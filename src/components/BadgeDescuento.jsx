function BadgeDescuento({ porcentajeDescuento }) {
  if (porcentajeDescuento === 0) return null
  return (
    <span style={{ color: 'red', fontWeight: 'bold', border: '1px solid red', padding: '2px 4px', borderRadius: '4px' }}>-{porcentajeDescuento}%</span>
  )
}

export default BadgeDescuento
