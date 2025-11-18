import React, { useState } from 'react';
import './App.css';
function MostrarEsconder(){
  const[mostrar, setMostrar] = useState(true);
  return(
    <div>
      <button onClick={(()=> setMostrar(!mostrar))}>
        {mostrar ? 'esconder' : 'mostrar'}
      </button>
      {mostrar && <p>oieee</p>}
    </div>
  )
}

export default MostrarEsconder