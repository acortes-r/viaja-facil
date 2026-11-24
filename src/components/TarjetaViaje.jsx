import BadgeDescuento from './BadgeDescuento'

function TarjetaViaje({ travel, onSelect }) {
  const renderAvailableSeats = () => {
    if (availableSeats === 0) return <span style={{ color: 'red' }}>Agotados</span>
    if (availableSeats <= 5) return <span style={{ color: 'orange' }}>¡Últimos {availableSeats} asientos!</span>
    return <span>{availableSeats} asientos disponibles</span>
  }

  const formatPrice = (price) => {
    return price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })
  }

  const {
    origen: origin,
    destino: destination,
    empresa: company,
    salida: departure,
    duracionHoras: durationHours,
    descuento: discount,
    precio: price,
    asientosDisponibles: availableSeats
  } = travel
  const departureDate = new Date(departure).toLocaleDateString('es-MX',
    { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }
  )
  const hasDiscount = discount > 0
  const priceWithoutDiscount = price - ((price * (discount || 0)) / 100)
  const isSoldOut = availableSeats === 0

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
      <div>
        <h3 style={{ marginBottom: 0 }}>Origen: {origin} &rarr; Destino: {destination}</h3>
        <p style={{ margin: 0 }}>Empresa: {company}</p>
        <p style={{ margin: 0 }}>Fecha y hora de salida: {departureDate}</p>
        <p style={{ margin: 0 }}>Duración: {durationHours} horas</p>
        <p style={{ margin: 0 }}>Disponibles: {renderAvailableSeats()}</p>
      </div>
      <div>
        {
          hasDiscount ? (
            <>
              <p style={{ textDecoration: 'line-through', margin: 0 }}>Precio: {formatPrice(price)} MXN</p>
              <p style={{ margin: 0 }}>Precio final: {formatPrice(priceWithoutDiscount)} MXN <BadgeDescuento discountPercentage={discount} /></p>
            </>
          ) : (
            <p style={{ margin: 0 }}>Precio: {formatPrice(price)} MXN</p>
          )
        }
        <button onClick={() => onSelect(travel)} disabled={isSoldOut} style={{ backgroundColor: isSoldOut ? '#ccc' : '#007bff', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: isSoldOut ? 'not-allowed' : 'pointer' }}>Elegir</button>
      </div>
    </div>
  )
}

export default TarjetaViaje
