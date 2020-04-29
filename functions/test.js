const axios = require('axios');



exports.handler = function(event, context, callback){
  const {API_URL, CHANNEL_ID, API_KEY} = process.env;

  const MAX_RESULTS = '10';
  const UPLOADS_PLAYLIST = 'UUwIxn6d5t7gZvebnGUoWJ3A';

  //const URL = `${API_URL}?part=snippet&type=video&key=${API_KEY}&maxResults=${MAX_RESULTS}&channelId=${CHANNEL_ID}&order=date`;
  const URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=UUwIxn6d5t7gZvebnGUoWJ3A&fields=items(contentDetails(videoId%2CvideoPublishedAt)%2Csnippet%2Ftitle%2Cstatus)&maxResults=25&key=AIzaSyC5UTeickpgiE_xSIXJqDZXMZ5rzq9Ty00';
  
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