import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const ocultarModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }
  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img
          src={CerrarBtn}
          onClick={ocultarModal}
        />
      </div>
      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto</label>
          <input
            id='nombre'
            type='text'
            placeholder='Añade el nombre del gasto'
          />
        </div>
        <div className='campo'>
          <label htmlFor='nombre'>Cantidad</label>
          <input
            id='cantidad'
            type='number'
            placeholder='Añade la cantidad del gastos ej: 300'
          />
        </div>
        <div className='campo'>
          <label htmlFor='categoria'>Categoría</label>
          <select id='categoria'>
            <option value='seleccione'>-- Seleccione --</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Comida</option>
            <option value='casa'>Casa</option>
            <option value='gastos'>Gastos Varios</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
          </select>
        </div>

        <input
          type='submit'
          value='Añadir Gastos'
        />
      </form>
    </div>
  )
}

export default Modal
