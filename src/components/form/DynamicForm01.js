import React, { useState } from 'react'

export default function DynamicForm01() {
const [inputFields, setInputFields] = useState([{name:'', salary:''}])
const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
 }
 const addFields = () => {
    let newfield = { name: '', salary: '' }
    setInputFields([...inputFields, newfield])
 }
 const submit = (e) => {
    e.preventDefault();
    console.log(inputFields)
}
const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
}
  return (
    <>
      <div className='container-fluid'>
        <div className='row p-3 bg-danger text-center text-white'>
            <h2>Dynamic Form</h2>
            <p>Add Name and salary  Using Add, Submit and Remove button</p>
        </div>
      </div>
      <div className='container mt-3'>
        <div className='row'>
        <form onSubmit={submit}>
                {inputFields.map((input, index) => {
                    return(
                        <div key={index}>
                            <input name="name" placeholder='Name' value={input.name} 
                            onChange={event => handleFormChange(index, event)}/>
                            <input name="salary" placeholder='Salary' value={input.salary} 
                            onChange={event => handleFormChange(index, event)}/>
                            <button onClick={() => removeFields(index)} className="ms-1">Remove</button>                           
                        </div>
                    )
                })}
                <div className='mt-2'>
                <button onClick={addFields}>Add More..</button>
                <button onClick={submit} className="ms-1">Submit</button>
                </div>
                 
            </form>
        </div>

      </div>
    </>
  )
}
