import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import{useNavigate} from 'react-router-dom'




const Update = () => {


    const[name , SetName] = useState('')
    const[email , SetEmail] = useState('')
    const[age , SetAge] = useState('0')
    const[eror, setError] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();
 

 //This function will give the single user data   

const getSingleUser = async () => {
    
    const response = await fetch(`http://localhost:5000/${id}`)
    const result = await response.json()
    if(!response.ok)
    {
        console.log(result.error)
        setError(result.error)
    }
    if(response.ok)
    {
        setError("");
        console.log("Update User", result);
        SetName(result.user.name);
        SetEmail(result.user.email);
        SetAge(result.user.age);
        
    }
   
}

//This function will update the data

const handleupdate = async(e) =>{

    e.preventDefault()

    const updatedUser = {name, email, age}
   
    const response = await fetch(`http://localhost:5000/${id}`, {
      method : "PATCH",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(updatedUser)
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

      navigate("/all")
    }











}



useEffect(() => {
    getSingleUser()
}, [])


  return (
    <div> 
        
         <h2 className='text-center'>Edit the Data</h2>
        <form onSubmit={handleupdate}>
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
  )
}

export default Update