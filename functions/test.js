const axios = require('axios');



exports.handler = function(event, context, callback){
  const API_URL = 'https://www.googleapis.com/youtube/v3/search';
  const CHANNEL_ID = 'UCwIxn6d5t7gZvebnGUoWJ3A';
  const API_KEY = 'AIzaSyC5UTeickpgiE_xSIXJqDZXMZ5rzq9Ty00';
  const MAX_RESULTS = '10';

 

  const URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyC5UTeickpgiE_xSIXJqDZXMZ5rzq9Ty00&maxResults=25&channelId=UCwIxn6d5t7gZvebnGUoWJ3A&order=date';
  const URL = `'${API_URL}?part=snippet&type=video&key=${API_KEY}&maxResults=${MAX_RESULTS}&channelId=${CHANNEL_ID}&order=date'`;

  //SEND user response
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