import BadgeDescuento from './BadgeDescuento'

function TarjetaViaje({ viaje }) {
  console.log(viaje)
  const { origen, destino, empresa, salida, duracionHoras, descuento, precio } = viaje
  const fecha = new Date(salida).toLocaleDateString('es-MX', { day: '2-digit', month: 'long', year: 'numeric' })
  const hasDescuento = descuento > 0
  const finalPrice = hasDescuento ? (precio - ((precio * descuento) / 100)) : precio

  return (
    <article>
      <header>
        <h3>Origen: {origen} &rarr; Destino: {destino}</h3>
        <p style={{ margin: 0 }}>Empresa: {empresa}</p>
        <p style={{ margin: 0 }}>Fecha y hora de salida: {fecha}</p>
        <p style={{ margin: 0 }}>Duración: {duracionHoras} horas</p>
      </header>
      <main>
        {!hasDescuento && <p style={{ margin: 0 }}>Precio: ${finalPrice} MXN</p>}
        {hasDescuento && <p style={{ textDecoration: 'line-through', margin: 0 }}>Precio: ${precio} MXN</p>}
        {hasDescuento && <p style={{ margin: 0 }}>Precio final: ${finalPrice} MXN {BadgeDescuento({ porcentajeDescuento: descuento })}</p>}
      </main>
    </article>
  )
}

export default TarjetaViaje
