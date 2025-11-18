import React, { useState } from 'react';
import './App.css';
function MostrarEsconder(){
  const[mostrar, setMostrar] = useState(true);
  return(
    <div>
      <button onClick={(()=> setMostrar(!mostrar))}>
        {mostrar ? 'esconder' : 'mostrar'}
      </button>
      {mostrar && <img src='https://e.snmc.io/i/600/s/a385d34419f7ef5bada7f318d37a2a38/10677923' alt="trailer"/>}
    </div>
  )
}

export default MostrarEsconder