import Header from './components/Header'
import { useState } from 'react'

function App () {
  const [presupuesto, setPresupuesto] = useState(0)

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
    </div>
  )
}

export default App
