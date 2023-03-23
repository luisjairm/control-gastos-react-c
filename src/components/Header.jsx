import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {
        isValidPresupuesto
          ? (
            <h1>Valido</h1>
            )
          : (
            <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
            />
            )
      }
    </header>
  )
}

export default Header
