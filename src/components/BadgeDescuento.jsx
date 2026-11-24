function BadgeDescuento({ discountPercentage }) {
  if (!discountPercentage) return null
  return (
    <span style={{ color: 'red', fontWeight: 'bold', border: '1px solid red', padding: '2px 4px', borderRadius: '4px' }}>-{discountPercentage}%</span>
  )
}

export default BadgeDescuento
