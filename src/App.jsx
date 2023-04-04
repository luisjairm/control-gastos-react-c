import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import Filtros from './components/Filtros'
import IconNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './helpers/index'
import ListadoGastos from './components/ListadoGastos'

function App () {
  // eslint-disable-next-line no-undef
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0)
  const [gastos, setGastos] = useState(
    // eslint-disable-next-line no-undef
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    if (filtro) {
      console.log('Filtrando')
    }
  }, [filtro])

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      }, 500)
    }
  }, [gastoEditar])
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])
  useEffect(() => {
    // eslint-disable-next-line no-undef
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    // eslint-disable-next-line no-undef
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  const handleNuevoGasto = () => {
    setGastoEditar({})
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      // Actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})
    } else {
      // Nuevo gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const eliminarGasto = (id) => {
    // const aceptar = window.confirm('¿Seguro de que quieres eliminar el gasto?')
    const nuevosGastos = gastos.filter(gasto => gasto.id !== id)
    setGastos(nuevosGastos)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={IconNuevoGasto}
              alt='nuevo gasto'
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      {
        modal && (
          <Modal
            setModal={setModal}
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
            guardarGasto={guardarGasto}
            gastoEditar={gastoEditar}
            setGastoEditar={setGastoEditar}
          />
        )

      }
    </div>
  )
}

export default App
