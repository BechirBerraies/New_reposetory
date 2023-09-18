const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { PirateSchema } = require('./pirate.model')

const UserSchema = new mongoose.Schema({
    userName:{
        type: String,
        required : [true,"UserName is important"],
        minlength:[3,"at least 3 letters"]
    },
    email:{
        type: String,
        required:[true,"Email must exist "],
        validate: {
            validator: val=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
            message:"PLEASE ENTER A VALID EMAIL"
        }
    },
    password:{
        type:String ,
        required:[true,"Must have password"],
        minlength:[6,"Password too short"]
    },
    notes : [PirateSchema]
})


UserSchema.virtual('confirmPassword')
.get(()=>this._confirmPassword)
.set(value=>this._confirmPassword = value)

UserSchema.pre('validate',function(next){
    console.log('INSIDE VALIDATE CONFIRM PASSWORD');
    console.log(`Password: ${this.password} \n Confirm password : ${this.confirmPassword}`);
    if (this.password != this.confirmPassword){
        this.invalidate('confirmPassword', 'Password Must match')
    }
    next()
})


UserSchema.pre('save', async function(next){
    console.log('Inside Pre Save Hook');
    try{
        const hashedPassword = await bcrypt.hash(this.password, 10);
        console.log('PASSWORD text : ',this.password,'\nPASSWORD hashed : ',hashedPassword);
        this.password= hashedPassword
    }
    catch(error){
        console.log(error);
    }
    next()
})

const User = mongoose.model("User", UserSchema)
module.exports = User


