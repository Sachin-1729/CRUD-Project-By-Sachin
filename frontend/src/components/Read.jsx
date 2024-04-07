import React, { useEffect } from 'react'
import { useState} from 'react'
import{useNavigate, Link} from 'react-router-dom'

const Read = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');



    async function getData() {
        const response = await fetch("http://localhost:5000");

        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error);
        }
        if (response.ok) {
            setData(result.users)
        }



    }


    async function deleteUser(id) {
        const response = await fetch(`http://localhost:5000/${id}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        if (!response.ok) {
            console.log(result.error);
            setError(result.error);
        }
        if (response.ok) {
            setError("Deleted Succesfully")

            setTimeout(() => {
                setError('')
                getData();
            }, 1000)

        }}


    useEffect(() => {
        getData();
    }, [])


    console.log(data);













    return <div className='container my-2'>
        {error && <div className='alert alert-danger'>{error}</div>}
        <h2 className='text-center'>Show All Data</h2>


        <div className='row'>

        {
    data.map((user) => ( // changed ele to user for clarity
        <div className='col-3' key={user._id}> {/* Use user._id as the key */}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5> {/* Access user properties with user.property */}
                    <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                    <h6 className="card-text">{user.age}</h6>
                    <Link to={`/${user._id}`} className="card-link">Edit</Link>
                    <a href="#" className="card-link" onClick={() => deleteUser(user._id)}>Delete</a>
                </div>
            </div>
        </div>
    ))
}


          
        </div>
  </div>

}
export default Read
