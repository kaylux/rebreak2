const axios = require('axios');



exports.handler = function(event, context, callback){
  const {API_URL, CHANNEL_ID, API_KEY} = process.env;

  const MAX_RESULTS = '10';

 
  const URL = `${API_URL}?part=snippet&type=video&key=${API_KEY}&maxResults=${MAX_RESULTS}&channelId=${CHANNEL_ID}&order=date`;

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