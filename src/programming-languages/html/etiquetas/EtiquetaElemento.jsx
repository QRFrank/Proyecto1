import React from 'react'

function EtiquetaElemnto() {
  return (
    <>
      <div style={{display:"flex",justifyContent:"center"}}>
        <h3  style={{textAlign: "justify"}}>
          {'Elemento → <etiqueta>Texto</etiqueta>'}
          <br />
          <br />
          {'Etiqueta → h1 // Titulo'}
          <br />
          {'Etiqueta → h2...h6 // SubTitulo'}
        </h3>
      </div>

      <div style={{display:"flex",justifyContent:"center"}}>
        <h4 style={{width:550}}>
          👀 Toma nota de cómo las propiedades que se escriben con guión medio en CSS, aquí en JSX las escribiremos con camelCase. Por ejemplo: padding-top: 2rem; se escribiría así en camelCase ⇒ paddingTop: ”2rem”, display:"flex", justifyContent:"center"
        </h4>  
      </div>
    </>
  )
}

export default EtiquetaElemnto