let token, userId;

const twitch = window.Twitch.ext;

let config = {}

twitch.onContext((context) => {
  twitch.rig.log(context);

  for (let i =0; i<3; i++) {
    setTimeout(() => {
      twitch.rig.log(i)
      twitch.rig.log(config)
    }, 1000)
  }
  setTimeout(() => {
    twitch.rig.log('before')
    setChannelConfig('1.0', JSON.stringify({'one': 'one'}))
    twitch.rig.log('after')
  }, 1000)
  setTimeout(() => {
    twitch.rig.log('before')
    setChannelConfig('2.0', JSON.stringify({'two': 'two'}))
    twitch.rig.log('after')
  }, 2000)
  setTimeout(() => {
    twitch.rig.log('before')
    setChannelConfig('3.0', JSON.stringify({'three': 'three'}))
    twitch.rig.log('after')
  }, 3000)
    

});

twitch.onAuthorized((auth) => {
  token = auth.token;
  userId = auth.userId;
});

twitch.configuration.onChanged( () => {
  twitch.rig.log('hi')
  let json = JSON.parse(twitch.configuration.broadcaster.content)
  twitch.rig.log(json)
  config = json
}); 

function setChannelConfig( version, content ) {
  twitch.configuration.set(
    "broadcaster",
    version,
    content
  );
}
