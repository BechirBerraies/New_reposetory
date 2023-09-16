const mongoose = require('mongoose');


const PirateSchema = new mongoose.Schema({
    name: { type: String ,
    required:[true,"YOU MUST HAVE A NAME"],
    minlength:[3,"Name must be at least 3 characters 🙃🙃🙃🙃🙃🙃🙃"]

},

    image:{type:String  ,
    required:[true,"You must have an Image"],


},
numberOfTreasure:{
    type:Number,
    required:[true,"You are bad at finding them"]
},
catchPhrase:{
    type:String,
    required:[true,"Must have Catch Phrase"],
    minlength:[5,"You must have a catch phrase"]
},
crewPosition:{
    type:String,
    required:[true,"What's Your position"]
},
hook:{
    type:Boolean,
    default:false
},
eyePatch:{
    type:Boolean,
    default:false
},
pegLeg:{
    type:Boolean,
    default:false
}

}, { timestamps: true });

const Pirate = mongoose.model("Pirate",PirateSchema);
module.exports= Pirate
