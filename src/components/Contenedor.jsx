function Contenedor({ titulo, children }) {
  return (
    <section>
      <h2>{titulo}</h2>
      {children}
    </section>
  )
}

export default Contenedor
