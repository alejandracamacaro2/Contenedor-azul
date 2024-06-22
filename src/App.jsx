import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabros from './componentes/Cabros'
import Cabro from './assets/Cabro.png'
import Arco from './componentes/Arco'
import arco from './assets/arco.png'
import Papel from './componentes/Papel'
import papel from './assets/papel.png'
import Click from './componentes/Click'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Papel imagen={papel} />
    <Arco imagen={arco} />
    <Click />
    <Cabros imagen={Cabro} />
    </div>
  )
}
export default App
