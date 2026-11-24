import { viajes } from './data/viajes'
import Contenedor from './components/Contenedor'
import TarjetaViaje from './components/TarjetaViaje'

function App() {
  const handleSelect = (travel) => {
    alert(`Viaje seleccionado: ${travel.origen} &rarr; ${travel.destino}`)
  }

  const travelsWithAvailableSeats = viajes.filter(viaje => viaje.asientosDisponibles > 0)
  const travelsWithoutAvailableSeats = viajes.filter(viaje => viaje.asientosDisponibles === 0)

  return (
    <>
      <Contenedor title="Viajes disponibles">
        {travelsWithAvailableSeats
          .map(travel => <TarjetaViaje key={travel.id} travel={travel} onSelect={handleSelect} />)}
      </Contenedor>
      <Contenedor title="Viajes sin asientos disponibles">
        {travelsWithoutAvailableSeats
          .map(travel => <TarjetaViaje key={travel.id} travel={travel} />)}
      </Contenedor>
    </>
  )
}

export default App
