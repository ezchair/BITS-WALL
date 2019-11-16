let token, userId, channelId;
let config = {}

const twitch = window.Twitch.ext;

twitch.onContext((context) => {
  twitch.rig.log('start');

  twitch.rig.log(context);
  twitch.rig.log(token);
  twitch.rig.log(userId);
  twitch.rig.log(channelId);
  twitch.rig.log(config);

  twitch.rig.log('end');

});

twitch.onAuthorized((auth) => {
  token = auth.token;
  userId = auth.userId;
  channelId = auth.channelId;
});

twitch.configuration.onChanged( () => {
  let json = JSON.parse(twitch.configuration.broadcaster.content)
  twitch.rig.log('json')
  twitch.rig.log(json)
  config = json
}); 

function setChannelConfig(content) {
  console.log('content', content)
  const version = ( config.version ?  parseFloat(config.version) + 1 : 1.0 ).toString()
  twitch.configuration.set(
    "broadcaster",
    version,
    content
  );
  console.log('config', config)
}

function saveBrickSetting() {
  let setting = {
    channelId: channelId
  }
  const bricks  = convert2BrickData()
  console.log('bricks', bricks)
  twitch.rig.log('bricks')
  twitch.rig.log(bricks)
  if (!bricks) {
    setting.bricks = []
  }
  else {
    setting.bricks = bricks
  }
  twitch.rig.log('setting')
  twitch.rig.log(setting)
  console.log('setting', setting)
  setChannelConfig(setting)
}

function launchBrickSetting() {
  let requestData = config.content
  const url = 'http://ec2-18-179-200-250.ap-northeast-1.compute.amazonaws.com:3000/createWall'
  request({
    url: url,
    method: "POST",
    json: true,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(requestData)
  }, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        twitch.rig.log('launch success')
        console.log('launch success')
      }
      else {
        twitch.rig.log('launch fail')
        console.log('launch fail')
      }
  });
}