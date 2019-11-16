let token, userId;

const twitch = window.Twitch.ext;

twitch.onContext((context) => {
  twitch.rig.log('hi Ryan & Noah')
  twitch.rig.log(context);
});

twitch.onAuthorized((auth) => {
  token = auth.token;
  userId = auth.userId;
});

