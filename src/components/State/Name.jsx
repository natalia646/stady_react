import React, { useEffect, useState } from "react";

export default function Greeting() {
  const [value, setValue] = useState(true);

useEffect(()=>{

  f()
  console.log(1);
  async function f(){
    console.log(2);
    await fetch('https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/items').then(r => console.log(r));
    console.log(3)
  }
  console.log(4)

  // console.log('change name')
}, [])

  return (
    <div>
      <h1>I'am {value ? 'Developer': 'Natalia'}</h1>
      <button onClick={()=>setValue(!value)}>Change</button>
    </div>
  );
}
