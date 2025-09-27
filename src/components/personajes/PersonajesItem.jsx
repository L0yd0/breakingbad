import React from 'react'

const PersonajesItem = ({ item }) => {
  return (
    <div className='card'>
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt={item.name} />
        </div>
        
        <div className="card-back">  {/* Esto debe estar DENTRO de card-inner */}
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor: </strong> {item.portrayed}
            </li>
            <li>
              <strong>Apodo:</strong> {item.nickname}
            </li>
            <li>
              <strong>Fecha Nacimiento:</strong> {item.birthday}
            </li>
          </ul>
        </div>
        
      </div> 
    </div>
  )
}

export default PersonajesItem