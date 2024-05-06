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
}, [age])


  return (
    // <div> 
        
    //      <h2 className='text-center'>Edit Details</h2>
    //     <form onSubmit={handleupdate}>
    //         <div className="mb-3">
    //             <label className="form-label">Name</label>
    //             <input type="text" className="form-control" value={name} onChange={
    //                 (e) => SetName(e.target.value)}/>

    //         </div>
    //         <div className="mb-3">
    //             <label className="form-label">Email</label>
    //             <input type="email" className="form-control" value={email} onChange={
    //                 (e) => SetEmail(e.target.value)
    //             }/>
    //         </div>
    //         <div className="mb-3">
    //             <label className="form-label">Age</label>
    //             <input type="number" className="form-control" value={age} onChange={
    //                 (e) => SetAge(e.target.value)
    //             }/>
    //         </div>

    //         <button type="submit" className="btn btn-primary">Submit</button>
    //     </form>
    // </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg max-w-lg">
        <h3 className="text-2xl font-bold text-center">Enter the Data</h3>
        <form onSubmit={handleupdate}>
            <div className="mt-4">
                <div>
                    <label className="block" htmlFor="name">Name</label>
                    <input type="text" placeholder="Name"
                        name="name" id="name"
                        value={name} onChange={
                      (e) => SetName(e.target.value)}
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                </div>
                <div className="mt-4">
                    <label className="block" htmlFor="email">Email</label>
                    <input type="email" placeholder="Email"
                        name="email" id="email"
                        value={email} onChange={
                        (e) => SetEmail(e.target.value)}
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                </div>
                <div className="mt-4">
                    <label className="block" htmlFor="age">Age</label>
                    <input type="number" placeholder="Age"
                        name="age" id="age"
                        value={age} onChange={
                        (e) => SetAge(e.target.value)}
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                </div>
                <div className="flex items-center justify-between mt-8">
                    <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Submit</button>
                </div>
            </div>
        </form>
    </div>
</div>
  )
}

export default Update 