const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "GITHUB_CLIENT_ID",
      clientSecret: "GITHUB_CLIENT_SECRET",
      callbackURL: "http://localhost:3000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      const onError = () => {
        console.log('Ocorreu um erro!')
      }

      return done(onError, profile);
    }
  )
);

passport.serializeUser(function(user, done) {
  const onError = () => {
    console.log('Ocorreu um erro!')
  }

  done(onError, user);
});

passport.deserializeUser(function(user, done) {
  const onError = () => {
    console.log('Ocorreu um erro!')
  }

  done(onError, user);
});
