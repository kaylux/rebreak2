const axios = require('axios');



exports.handler = function(event, context, callback){
  const {API_URL, CHANNEL_ID, API_KEY} = process.env;
  const videoIds = event.queryStringParameters.test;
  console.log(videoIds);
  console.log(event.queryStringParameters.test);

  const MAX_RESULTS = '10';
  const UPLOADS_PLAYLIST = 'UUwIxn6d5t7gZvebnGUoWJ3A';

  //const URL = `${API_URL}?part=snippet&type=video&key=${API_KEY}&maxResults=${MAX_RESULTS}&channelId=${CHANNEL_ID}&order=date`;
  const URL = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=DqL8Lcx3NPo%2CPfQazWP8PpY%2CfQoDsd1fr3o%2C2LxdmkPNsfE%2Cbkjh--XsoQo%2CJhoUlLaMDMY%2C6cX0llvY7Sk%2CuSqKtMHh3yQ%2CILHdTX-hEY8%2C1g5ykWTq3ZM%2CKoBZq29wClw%2CPBcVFjMHOSo%2CwR1KMvUG0M0%2C4gYhkDLySdc%2Csp_yQtIQ-6A&key=AIzaSyC5UTeickpgiE_xSIXJqDZXMZ5rzq9Ty00';

  

  const send = body => {
  callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
      
  });


  }

  //Personming api call

  const getVideos = () => {
    axios.get(URL , {headers: { "If-None-Match":'nxOHAKTVB7baOKsQgTtJIyGxcs8/pYDE6vjmwEGNxgI3RViaQe6RFLQ'}})
      .then(res => send(res.data));

  } 

  //makign sure method is get
  if(event.httpMethod == 'GET'){
    getVideos();
  }

}