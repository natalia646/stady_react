import React, { useEffect, useState } from "react";

export default function Greeting() {
  const [value, setValue] = useState(true);

useEffect(()=>{
  console.log('change name')
}, [])

  return (
    <div>
      <h1>I'am {value ? 'Developer': 'Natalia'}</h1>
      <button onClick={()=>setValue(!value)}>Change</button>
    </div>
  );
}
