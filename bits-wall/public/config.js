let token, userId;
let channelId = "470972377";
let config = {}

const twitch = window.Twitch.ext;

twitch.onContext((context) => {
  if (twitch.configuration) {
    twitch.rig.log(twitch.configuration);
    twitch.rig.log('yes');

  }
  else {
    twitch.rig.log('nonono');
  }

  if (!config || config === '' || JSON.stringify(config) === '{}') {
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
  if (twitch.configuration.broadcaster && 'content' in twitch.configuration.broadcaster) {
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
  twitch.rig.log('content', content)
  const version = ( config.version ?  parseFloat(config.version) + 1 : 1.0 ).toString()
  twitch.rig.log('version', version)
  twitch.configuration.set(
    "broadcaster",
    version,
    content
  );

  config = content
  twitch.rig.log('config', config)
}

function saveBrickSetting() {
  let setting = {
    channelId: channelId
  }
  const bitsWall  = convert2BrickData()
  if (!bitsWall) {
    setting.bitsWall = []
  }
  else {
    setting.bitsWall = bitsWall
  }
  twitch.rig.log('setting')
  twitch.rig.log(setting)
  console.log('setting', typeof(setting), setting)
  setChannelConfig(setting)
}

function launchBrickSetting() {
  // saveBrickSetting()
  // let requestData = config;
  // twitch.rig.log('requestData')
  // twitch.rig.log(requestData)
  // twitch.rig.log(typeof(requestData))

  // const url = 'http://ec2-18-179-200-250.ap-northeast-1.compute.amazonaws.com:3000/createWall'

  // $.ajax({
  //   type: 'POST',
  //   url: url,
  //   data: JSON.stringify(requestData),
  //   success: function(data) { twitch.rig.log('data: ' + data); },
  //   contentType: "application/json",
  //   dataType: 'json'
  // });
  // $.ajax({
  //   type: 'POST',
  //   url: 'http://ec2-18-179-200-250.ap-northeast-1.compute.amazonaws.com:3000/createWall',
  //   data: '{"channelId":"470972377","bitsWall":[{"id":"0","x":182,"y":70,"sx":0.5,"sy":0.5,"angle":0,"type":"TRIANGLE","active":true,"reward":null}]}', // or JSON.stringify ({name: 'jonas'}),
  //   success: function(data) { twitch.rig.log(data); },
  //   contentType: "application/json",
  //   dataType: 'json'
  //   });
  // $.post( url, requestData)
  const bitsWall  = convert2BrickData()
  let requestData = {"channelId": channelId,"bitsWall": bitsWall}
  twitch.rig.log('requestData')
  twitch.rig.log(requestData)
  $.ajax({
    type: 'POST',
    url: 'http://ec2-18-179-200-250.ap-northeast-1.compute.amazonaws.com:3000/createWall',
    data: JSON.stringify(requestData),
    success: function(data) {
      console.log('ssuio');
      console.log(data);
      },
    contentType: "application/json",
    dataType: 'json'
  });

}

function uploadImage(e) {
  var file = e.files[0];
  if (!file) {
      return;
  }
  const reader = new FileReader();
  reader.onload= function(e){
    let src = e.target.result
    setBackgroundImage(src)
  }
  reader.readAsDataURL(file);
  console.log('file', file)
  e.value = '';
}