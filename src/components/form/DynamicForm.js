import React, { useState } from 'react'

export default function DynamicForm() {
    const [inputFields, setInputFields] = useState([{fName:'', lName:'', phone:''}]);
    const [inputSkills, setInputSkills] = useState([{skill:'',  version:'', exp:''}]);

    const handleFormChange = (index,event) =>{
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    const addFields = () => {
        let newfield = { fName: '', lName: '', phone:'' }
        setInputFields([...inputFields, newfield])
     }
     const submit = (e) => {
        e.preventDefault();
        console.log(inputFields);
        console.log(inputSkills);
    }
    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

    // Skills Handler
    const handleFormChange1 = (ind,event) =>{
        let data1 = [...inputSkills];
        data1[ind][event.target.name] = event.target.value;
        setInputSkills(data1);
    }
    const addSkills = () => {
        let newfield1 = { skill: '', version:'', exp: '' }
        setInputSkills([...inputSkills, newfield1])
     }
     const removeSkills = (ind) => {
        let data1 = [...inputSkills];
        data1.splice(ind, 1)
        setInputSkills(data1)
    }
  return (
    <>
      <div className='container-fluid'>
        <div className='row p-3 bg-danger text-center text-white'>
            <h2>Dynamic Form</h2>
            <p>Add First name and Last name</p>
        </div>
      </div>
      <div className='container mt-3'>
        <div className='row'>
            <form  onSubmit={submit}>
                {inputFields.map((input,index) => {
                    return(
                        <div key={index}>
                            <input name="fName" placeholder='First Name' value={input.fName} 
                            onChange = {event => handleFormChange(index,event)} />
                            <input name="lName" placeholder='Last Name' value={input.lName}
                            onChange = {event => handleFormChange(index,event)} />
                            <input name="phone" placeholder='Phone Number' value={input.phone}
                            onChange = {event => handleFormChange(index,event)} />
                            <button onClick={addFields} className="ms-1">Add More..</button>
                            <button onClick={() => removeFields(index)} className="ms-1">Remove</button>
                        </div>
                    )
                })}
                <hr />
                {inputSkills.map((skills, ind) =>{
                    return(
                        <div key={ind}>
                            <input name="skill" placeholder='Skills' value={skills.skill}
                            onChange = {event => handleFormChange1(ind,event)}  />
                            <input name="version" placeholder='Version' value={skills.version}
                            onChange = {event => handleFormChange1(ind,event)}  />
                            <input name='exp' placeholder='Years of Experiences' value={skills.exp} 
                            onChange = {event => handleFormChange1(ind,event)}  />
                            <button onClick={addSkills} className="ms-1">Add More Skills..</button>
                            <button onClick={() => removeSkills(ind)} className="ms-1">Delete</button>
                        </div>
                    )
                })}
                <div className='mt-2'>
                <button onClick={submit} className="ms-1">Submit</button>
                </div>
            </form>
        </div>
        </div>
    </>
  )
}
