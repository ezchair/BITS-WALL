let token, userId, channelId;
let config = {}

const twitch = window.Twitch.ext;

twitch.onContext((context) => {
  twitch.rig.log(context);
});

twitch.onAuthorized((auth) => {
  token = auth.token;
  userId = auth.userId;
  channelId = auth.channelId;
});

twitch.configuration.onChanged( () => {
  let json = JSON.parse(twitch.configuration.broadcaster.content)
  twitch.rig.log(json)
  config = json
}); 

function setChannelConfig(content) {
  console.log('content')
  console.log(content)
  const version = ( config.version ?  parseFloat(config.version) + 1 : 1.0 ).toString()
  twitch.configuration.set(
    "broadcaster",
    version,
    content
  );
  console.log('config')
  console.log(config)
}

function saveBrickSetting() {
  let setting = {
    channelId: channelId
  }
  const bricks  = convert2BrickData()
  if (!bricks) {
    setting.bricks = []
  }
  else {
    setting.bricks = bricks
  }
  setChannelConfig(setting)
}

function uploadBackground() {

}

function uploadBackground() {
  
}