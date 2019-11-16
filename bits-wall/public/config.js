let token, userId;

const twitch = window.Twitch.ext;

let version = "0.0"
let config = {}

twitch.onContext((context) => {
  twitch.rig.log(context);

  setChannelConfig('1.0', JSON.stringify({'one': 'one'}))
    
});

twitch.onAuthorized((auth) => {
  token = auth.token;
  userId = auth.userId;
});

twitch.configuration.onChanged( () => {
  let json = JSON.parse(twitch.configuration.broadcaster.content)
  twitch.rig.log(json)
  config = json
}); 

function setChannelConfig( content ) {
  const version = ( twitch.configuration.broadcaster ? ( twitch.configuration.broadcaster.content) parseFloat(config.);)
  twitch.configuration.set(
    "broadcaster",
    version,
    content
  );
}
