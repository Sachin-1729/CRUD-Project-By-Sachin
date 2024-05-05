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
        


        <div className='row'>

        {
    // data.map((user) => ( // changed ele to user for clarity
    //     <div className='col-3' key={user._id}> {/* Use user._id as the key */}
    //         <div className="card">
    //             <div className="card-body">
    //                 <h5 className="card-title">{user.name}</h5> {/* Access user properties with user.property */}
    //                 <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
    //                 <h6 className="card-text">{user.age}</h6>
    //                 <Link to={`/${user._id}`} className="card-link">Edit</Link>
    //                 <a href="#" className="card-link" onClick={() => deleteUser(user._id)}>Delete</a>
    //             </div>
    //         </div>
    //     </div>
    // ))
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"> {/* Responsive grid layout */}
    {data.map((user) => (
        <div key={user._id} className="bg-white rounded-lg shadow-lg overflow-hidden"> {/* Use user._id as the key */}
            <div className="p-4">
                <h5 className="text-lg font-semibold text-gray-900">{user.name}</h5> {/* Card title */}
                <h6 className="text-sm text-gray-500">{user.email}</h6> {/* Subtitle with lighter color */}
                <p className="text-gray-700 mb-4">Age: {user.age}</p> {/* Age with margin */}
                <div className="flex justify-between">
                    <Link to={`/${user._id}`} className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out">Edit</Link> {/* Link with hover effect */}
                    <button onClick={() => deleteUser(user._id)} className="text-red-500 hover:text-red-600 transition duration-150 ease-in-out">Delete</button> {/* Button styled as link */}
                </div>
            </div>
        </div>
    ))}
</div>
}


          
        </div>
  </div>

}
export default Read
