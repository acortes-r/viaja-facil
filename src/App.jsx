import { viajes } from './data/viajes'
import Contenedor from './components/Contenedor'
import TarjetaViaje from './components/TarjetaViaje'

function App() {
  return (
    <Contenedor title="Viajes disponibles">
      {viajes.filter(viaje => viaje.asientosDisponibles > 0)
        .map(travel => <TarjetaViaje key={travel.id} travel={travel} />)}
    </Contenedor>
  )
}

export default App
