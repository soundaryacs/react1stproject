import React, {useRef} from 'react'

export default function RefsDemo02() {
    const inputRef1 = useRef(); //refs in functional component
    const inputRef2 = useRef();
    const add = () =>{
        const val1 = +inputRef1.current.value;
        const val2 = +inputRef2.current.value;
        alert(val1 + val2);
    }
  return <>
  Enter Number 01: <br /><input ref={inputRef1}/><br /><br />
  Enter Number 02: <br /><input ref={inputRef2}/><br /><br />
  <button onClick={add}>Add</button>
  </>
}
