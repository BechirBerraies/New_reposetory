import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewPirates = (props) => {
    const {id} = useParams()

    const [pirate,setPirate]=useState({name:"",image:"",catchPhrase:"" ,crewPosition:"",numberOfTreasure:"",hook:"",eyePatch:"",pegLeg:""})
    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate/'+ id)
            .then(response => {
                console.log(response.data);
            setPirate(response.data)
            })
            .catch(error=> console.log(error))
    }, [id])

    return (
    <>
    <div  className="naver d-flex ">
        <h1 style={{marginLeft:"250px"}}>{pirate.name}</h1>
        <Link to={'/'}><button style={{marginLeft:"20px"}}> Crew Board</button></Link>
        </div>

    <div style={{width:"700px", marginTop:"50px"}} className="container d-flex justify-content-around">
        <div className="box">
            <img src={pirate.image} alt={pirate.image} srcset="" />
            <h1>{pirate.catchPhrase}</h1>
        </div>
        <div className="box">
        <h2>Number of Treasures:{pirate.numberOfTreasure}</h2>
        <h2>eyePatch :  {pirate.eyePatch ? "Yes" : "No"}</h2>
        <h2>Hook: {pirate.hook ? "Yes" : "No"}</h2>
        <h2> Pegleg: {pirate.pegLeg ? "Yes" : "No"}</h2>
        </div>
    </div>






    </>
  )
}

export default ViewPirates