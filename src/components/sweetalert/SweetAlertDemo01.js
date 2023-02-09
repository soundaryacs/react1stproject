import React from 'react';
import Swal from 'sweetalert2'

export default function SweetAlertDemo01() {
    const alertDemo01 =() => {
        alert ("Helloooo");
    };
    const alertDemo02 = () =>{
        Swal.fire(	
            'Good job!',	
            'You clicked the button!',	
            'success'	
          )
    }
  return (
    <div>
      <button onClick={alertDemo01}>JS Alert</button>
      <button onClick={alertDemo02}>Sweet Alert</button>
    </div>
  )
}
