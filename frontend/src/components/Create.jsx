import React, { useState } from 'react'
import{useNavigate} from 'react-router-dom'

const Create = () => {

const[name , SetName] = useState('')
const[email , SetEmail] = useState('')
const[age , SetAge] = useState('0')
const[eror, setError] = useState('')
const navigate = useNavigate();

console.log(name , email , age);

const handleSubmit = async (e) =>{
  e.preventDefault()

  const addUser = {name, email, age}
 
  const response = await fetch("http://localhost:5000" , {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(addUser)
  })

  const result = await response.json; 
  if(!response.ok)
  {
    console.log(result);
    setError(result.error)
  }
  if(response.ok)
  {
    console.log(result);
    setError('');
    SetName('');
    SetEmail('');
    SetAge('');
    navigate("/all")
  }
};





    return <div className='container my-2'>
        <h1>{eror}</h1>
        <h2 className='text-center'>Enter the Data</h2>

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={
                    (e) => SetName(e.target.value)}/>

            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={
                    (e) => SetEmail(e.target.value)
                }/>
            </div>
            <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" value={age} onChange={
                    (e) => SetAge(e.target.value)
                }/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>

}

export default Create