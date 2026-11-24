import BadgeDescuento from './BadgeDescuento'

function TarjetaViaje({ travel }) {
  const { origen: origin, destino: destination, empresa: company, salida: departure, duracionHoras: durationHours, descuento: discount, precio: price } = travel
  const departureDate = new Date(departure).toLocaleDateString('es-MX',
    { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }
  )
  const hasDiscount = discount > 0
  const finalPrice = hasDiscount ? (price - ((price * discount) / 100)) : price

  return (
    <div>
      <div>
        <h3 style={{ marginBottom: 0 }}>Origen: {origin} &rarr; Destino: {destination}</h3>
        <p style={{ margin: 0 }}>Empresa: {company}</p>
        <p style={{ margin: 0 }}>Fecha y hora de salida: {departureDate}</p>
        <p style={{ margin: 0 }}>Duración: {durationHours} horas</p>
      </div>
      <div>
        {
          hasDiscount ? (
            <>
              <p style={{ textDecoration: 'line-through', margin: 0 }}>Precio: ${price} MXN</p>
              <p style={{ margin: 0 }}>Precio final: ${finalPrice} MXN <BadgeDescuento discountPercentage={discount} /></p>
            </>
          ) : (
            <p style={{ margin: 0 }}>Precio: ${price} MXN</p>
          )
        }
      </div>
    </div>
  )
}

export default TarjetaViaje
