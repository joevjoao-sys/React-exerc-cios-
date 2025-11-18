import React, { useState } from 'react';
import './App.css';

function Contador() {
  const [count, setCount] = useState(20);

  const GetCorTemperatura = (temperatura) => {
    if (temperatura < 15) return '#4190e2';   
    if (temperatura < 25) return '#f1c207ff'; 
    return '#d0021b';                         
  };

  return (
    <div style={{
      
      backgroundColor: GetCorTemperatura(count),
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      color: 'white',
    
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
    }}>
      
      <h2>Contador: {count}°</h2>
      
      <button onClick={() => setCount(count + 2)}>+2°</button>
      {}
      <button onClick={() => setCount(count - 2)}>-2°</button>
    </div>
  );
}

export default Contador;