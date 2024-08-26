const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/users/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, emails, displayName } = profile;
      const email = emails[0].value;

      try {
        let user = await User.findOne({ email });

        if (!user) {
          user = await User.create({
            name: displayName,
            email,
            password: id, // You can hash this or generate a random password
            isVerified: true, // Since the user is sigg in via Google, we consider them verified
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});

module.exports = passport;
