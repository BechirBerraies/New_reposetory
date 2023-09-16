import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'


const AddPirate = (props) => {
    const navigate = useNavigate()
    const [pirate,setPirate]=useState("")
    const formHandler = (e)=>{
        e.preventDefault()
        console.log("SUBMITTED Pirate ",pirate)
        axios.post("http://localhost:8000/api/pirate",pirate)
        .then(serverResponse => {
            console.log(serverResponse);
            setPirate({name:"",catchPhrase:"" ,crewPosition:"",numberOfTreasure:"",hook:false,eyePatch:false,pegLeg:false});
            navigate('/')
        })
    }
  return (

    <>
   <div style={{backgroundColor:"brown" ,padding:"10px"}} className='d-flex'>
        <h1>Add a Pirate </h1>
       <Link to={'/'}> <button style={{marginLeft:"200px"}}>Crew Board</button></Link>
    </div>
    <form onSubmit={formHandler}>

        <p>Name<input type="text" 
            onChange={(e)=> setPirate({...pirate,name:e.target.value})}
            value={pirate.name}
            /></p>


    Crew Position
    <select
        onChange={(e) => setPirate({ ...pirate, crewPosition: e.target.value })}
        value={pirate.crewPosition}
    >
        <option value="Captain">Captain</option>
        <option value="First Mate">First Mate</option>
        <option value="Boatswain">Boatswain</option>
        <option value="Cabin Boy">Cabin Boy</option>
    </select>


        <p>Image<input type="text" 
            onChange={(e)=> setPirate({...pirate,image:e.target.value})}
            value={pirate.image}
            /></p>

        <p>Number of Treasures<input type="number" 
            onChange={(e)=> setPirate({...pirate,numberOfTreasure:e.target.value})}
            value={pirate.numberOfTreasure}
            /></p>
        <p>Catch Phrase<input type="textarea" 
            onChange={(e)=> setPirate({...pirate,catchPhrase:e.target.value})}
            value={pirate.catchPhrase}
            /></p>
        <p>Hook<input type="checkbox" 
            onChange={(e)=> setPirate({...pirate,hook:e.target.checked})}
            value={pirate.hook}
            /></p>
        <p>Eyepatch<input type="checkbox" 
            onChange={(e)=> setPirate({...pirate,eyePatch:e.target.checked})}
            value={pirate.eyePatch}
            /></p>
        <p>PegLeg<input type="checkbox" 
            onChange={(e)=> setPirate({...pirate,pegLeg:e.target.checked})}
            value={pirate.pegLeg}
            /></p>
        <button type='submit'>Submit</button>
    </form>
   
   
    <div className="container"></div>










    </>
  )
}

export default AddPirate