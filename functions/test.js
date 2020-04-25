const axios = require('axios');



exports.handler = function(event, context, callback){
  const API_URL = 'https://www.googleapis.com/youtube/v3/search';
  const CHANNEL_ID = 'UCwIxn6d5t7gZvebnGUoWJ3A';
  const API_KEY = 'AIzaSyC5UTeickpgiE_xSIXJqDZXMZ5rzq9Ty00';
  const MAX_RESULTS = '10';

 

  const URL = `${API_URL}?snippet&type=video&key=${API_KEY}&maxResults=${MAX_RESULTS}&channelID=${CHANNEL_ID}&order=date`;

  //SEND user response
 const send = body => {
  callback(null, {
      statusCode: 200,
      body: body
      
  });


  }

  //Personming api call

  const getVideos = () => {
    axios.get(URL)
      .then(res => send(res.data))
      .catch(error = send(error));
  } 

  //makign sure method is get
  if(event.httpMethod == 'GET'){
    getVideos();
  }

}