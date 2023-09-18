import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const AllPirates = () => {
    const [pirates,setPirates]=useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirate")
        .then(serverResponse =>{
        
        console.log(serverResponse.data)
        setPirates(serverResponse.data)
        })
        .catch(serverError=> console.log(serverError))
    },[])


        const deletePirate = (pirateId) => {
            axios.delete('http://localhost:8000/api/pirate/' + pirateId)
                .then(res => {
                    console.log(res)
                    const removeFromDom=  pirates.filter(pirate => pirate._id != pirateId)
                    setPirates(removeFromDom)

                })
                .catch(err => console.log(err));
        }

        const logout = () => {
            console.log("logout");
            axios.post('http://localhost:8000/api/logout',{},{withCredentials:true})
            .then(serverResponse=>{
                console.log(serverResponse);
                navigate('/login')
            })
            .catch(error=>console.log(error))
        }

return (

    <>
    <div style={{backgroundColor:"brown" ,padding:"10px"}} className='d-flex'>
        <h1>Pirate Crew </h1>
        <Link to={'/pirate/new'}><button style={{marginLeft:"200px"}}>Add a pirate</button></Link>
        <Link className='btn btn-danger ' onClick={logout}>Logout</Link>
    </div>
    {pirates.map(pirate=>
        <div key={pirate._id}>
            <div style={{width:"800px", display:"flex",justifyContent:"space-around",height:"200px"}} className="container">

            <img style={{width:"250px"}} src="{pirate.image}" alt="{pirate.image}" srcset="" />
            <div>
            <h1>{pirate.name}</h1>
            <Link to={`/pirate/${pirate._id}`}><button >View</button></Link>
            <button 
            onClick={()=>{deletePirate(pirate._id)}}
            
            >Delete</button>
            </div>

            </div>




        </div>
    )

    }




    
    
    
    
    </>

  )
}

export default AllPirates