const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "Iv1.7a0bedbca3957e3f",
      clientSecret: "3e5d316cadbd3a261b8ca957c163954abbfe29ff",
      callbackURL: "http://localhost:3000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      const onError = () => {
        console.log("Ocorreu um erro!");
      };

      return done(undefined, profile);
    }
  )
);

passport.serializeUser(function(user, done) {
  const onError = () => {
    console.log("Ocorreu um erro!");
  };

  done(undefined, user);
});

passport.deserializeUser(function(user, done) {
  const onError = () => {
    console.log("Ocorreu um erro!");
  };

  done(undefined, user);
});
