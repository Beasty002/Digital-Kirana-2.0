const GoogleStrategy = require("passport-google-oauth20").Strategy;
const Customer = require("../../model/userModel")
const mongoose = require("mongoose")

//completed
module.exports = (passport) => {
  passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:"http://localhost:3000/auth/google/callback"
  },
  async (accessToken,refreshToken,profile,cb) => {
    const newUser = {
      googleId:profile.id,
      userName:profile.displayName,
      email:profile.emails[0].value,
      phoneNumber:profile.phonenumber || null,
    }
    try {
      let user = await Customer.findOne({googleId:profile.id});
      if(user){
        console.log("Inside User Exists")
        cb(null,user)
      } else{
        console.log("inside user Doesnot exists")
        user = await Customer.create(newUser);
        cb(null,user)
      }
    } catch (error) {
      console.log(error)
    }
  }
  ));

  passport.serializeUser((user, cb)=> {
    cb(null,user.id)
  });
    
  passport.deserializeUser((id, cb)=> {
    try{
      const user = Customer.findById(id);
      cb(null, user)
    } catch(err){
      console.log(err)
    }    
  });
}
