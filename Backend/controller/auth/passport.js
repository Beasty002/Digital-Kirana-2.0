const GoogleStrategy = require("passport-google-oauth20").Strategy;
const Costumer = require("../../model/userModel")

// not completed
passport.use(new GoogleStrategy({
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:"http://localhost:3000/auth/google/callback"
    },
        async function(accessToken,refreshToken,profile,cb){
            const costumer = new Costumer({
                username:profile.displayName,
            })
        }
    ))