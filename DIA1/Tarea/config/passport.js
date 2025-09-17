import passport from "passport";
import {Strategy as JwtStrategy, ExtractJwt } from "passport";
import dotenv from "dotenv";
dotenv.config();


const opts={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};


passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
 
        let user = await Camper.findById(jwt_payload.id);
  

        if (!user) {
          user = await Trainer.findById(jwt_payload.id);
        }
  
        if (user) {
          return done(null, user); 
        } else {
          return done(null, false); 
        }
      } catch (err) {
        return done(err, false); 
      }
    })
  );
  export default passport;