import React from 'react'

export default function ListDemo1() {
let cars = ["Tata", "Honda", "Maruti", "Toyoto"];

  return (
    <>
    <div>
      {cars.map((car, ind) =>{
        return <li key={ind}>{car} </li>
      })}
    </div>
    
    
    </>
  )
}
