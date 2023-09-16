const Pirate = require('../models/pirate.model');


module.exports={


    findAllPirates:(req,res)=>{
        Pirate.find()
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    createPirate:(req,res)=>{
        Pirate.create(req.body)
        .then(response=>res.status(201).json(response))
        .catch(error=>res.status(400).json(error.errors))
    },
    finOnePirate:(req,res)=>{
        Pirate.findOne({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(404).json(error))
    },
    updatePirate:(req,res)=>{
        Pirate.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    deletePirate:(req,res)=>{
        Pirate.findByIdAndDelete({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    }

}

