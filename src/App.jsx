import { viajes } from './data/viajes'
import Contenedor from './components/Contenedor'
import TarjetaViaje from './components/TarjetaViaje'

function App() {
  return (
    <Contenedor titulo="Viajes disponibles">
      {viajes.filter(viaje => viaje.asientosDisponibles > 0)
        .map(viaje => <TarjetaViaje key={viaje.id} viaje={viaje} />)}
    </Contenedor>
  )
}

export default App
