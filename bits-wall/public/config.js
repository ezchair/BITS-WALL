let token, userId, channelId;
let config = {}

const twitch = window.Twitch.ext;

twitch.onContext((context) => {
  if (JSON.stringify(config) === '{}') {
    setChannelConfig(JSON.stringify({}))
  }
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
  let json;
  if (twitch.configuration.broadcaster) {
    json = JSON.parse(twitch.configuration.broadcaster.content)
  }
  else {
    console.log('twitch.configuration', twitch.configuration)
    twitch.rig.log(twitch.configuration)

    json = {}
  }
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
  const bitsWall  = convert2BrickData()
  let requestData = { channelId, bitsWall }//config.content
  twitch.rig.log('requestData')
  twitch.rig.log(requestData)
  const url = 'http://ec2-18-179-200-250.ap-northeast-1.compute.amazonaws.com:3000/createWall'
  // $.ajax({
  //   type: 'POST',
  //   url: url,
  //   data: requestData,
  //   success: function (response) { 
  //     twitch.rig.log('response')
  //     twitch.rig.log(response)
  //     console.log((response))

  //   },
  //   error: function (error) {  
  //     twitch.rig.log('error')
  //     twitch.rig.log(error)
  //     console.log((error))
  //   }     
  // });

  $.post( url, requestData, function( data ) {
    twitch.rig.log('data')
    twitch.rig.log(data)
    console.log((data))
  })
}

function uploadImage(e) {
  console.log('hihihihi')
  var file = e.files[0];
  if (!file) {
      return;
  }
  twitch.rig.log('file')
  twitch.rig.log(file)

  const reader = new FileReader();
  reader.onload= function(e){
    let src = e.target.result
    setBackgroundImage(src)
  }
  reader.readAsDataURL(file);
  console.log('file', file)
  e.value = '';
}