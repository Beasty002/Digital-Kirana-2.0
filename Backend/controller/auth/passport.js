const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy=require('passport-local').Strategy
const Customer = require("../../model/userModel")
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')


//completed
module.exports = (passport) => {
  // Google OAuth2.0 Strategy
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



  // Local Strategy for Customer/User
  passport.use(
    new LocalStrategy(
      async(username, password, done)=> {
        try{
          const user =await Customer.findOne({ userName: username })

          if (!user) { 
            console.log("Invalid credentials")
            return done(null, false)
          }

          const isMatch = await bcrypt.compare(password, user.password)
          if (!isMatch) {
            console.log("Invalid credentials")
            return done(null, false)
          }
          console.log("Success")
          return done(null, user)
            
        }catch(error){
          console.log("Error")
          return done(error, false);
        }
      }
    )
  );

  // Serialize and Deserialize User
  passport.serializeUser((user, cb)=> {
    cb(null,user.id)
  });
    
  passport.deserializeUser(async(id, cb)=> {
    try{
      const user = await Customer.findById(id);
      cb(null, user)
    } catch(err){
      console.log(err)
    }    
  });
  
}
