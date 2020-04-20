  <script>
  

   import  { onMount  } from "svelte";

  var vids = [ ];
  var vids2 = [ ];

  var data = [ ];
  var data2 = [ ];
  var displayedvids = [ ];
  var switchVids = 0;
 
  onMount(async function(){
    const response = await fetch('https://www.googleapis.com/youtube/v3/search?part=id&type=video&key=AIzaSyC5UTeickpgiE_xSIXJqDZXMZ5rzq9Ty00&maxResults=25&channelId=UCwIxn6d5t7gZvebnGUoWJ3A&order=date');
      
    const response2 = await fetch('https://www.googleapis.com/youtube/v3/search?part=id&type=video&key=AIzaSyC5UTeickpgiE_xSIXJqDZXMZ5rzq9Ty00&maxResults=25&channelId=UCwIxn6d5t7gZvebnGUoWJ3A&order=viewcount');
    data = await response.json();
    data2 = await response2.json();
    console.log(data);
    console.log(data2);
   

  
        for(var index = 0; index < data.items.length; index++){
        vids[index] = data.items[index].id.videoId; 
        vids2[index] = data2.items[index].id.videoId; 
    
   }
    console.log(vids);
    console.log(vids2);
    displayedvids = vids;
    console.log(displayedvids);


   });

function recentVideos(){//Button Click, 0 = Most Recent, 1 = Most Viewed

    displayedvids = vids;

}
 
function topVideos(){

    displayedvids = vids2;

}



</script>


<style>
/* CSS Variables */
:root {
  --primary: #ddd;
  --dark: #333;
  --light: #fff;
  --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
}

:global(body){
  background-color: lightgrey

}
.main-banner img,
.main-banner iframe {
  display:block;
  margin-left: auto;
  margin-right: auto;
}
.main-banner h1{

  text-align: center;
}
.main-wrap {
  
  margin: 30px 50px;
  line-height: 1.4;

    box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--dark);
  
}

.btn {
  background: var(--dark);
  color: var(--light);
  padding: 0.6rem 1.3rem;
  text-decoration: none;
  border: 0;
}

img {
  max-width: 100%;
}

.wrapper {
  display: grid;
  grid-gap: 20px;
}

/* Navigation */
.main-nav ul {
  display: grid;
  grid-gap: 20px;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(2, 1fr);
}


.main-nav a {
  background: var(--primary);
  display: block;
  text-decoration: none;
  padding: 0.8rem;
  text-align: center;
  color: var(--dark);
  text-transform: uppercase;
  font-size: 1.1rem;
  box-shadow: var(--shadow);
}

.main-nav a:hover {
  background: var(--dark);
  color: var(--light);
}

/* Top Container */
.top-container {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'showcase showcase top-box-a'
    'showcase showcase top-box-b';
}

/* Showcase */
.showcase {
  grid-area: showcase;
  min-height: 400px;
  background: url(https://image.ibb.co/kYJK8x/showcase.jpg);
  background-size: cover;
  background-position: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  box-shadow: var(--shadow);
}
.showcase iframe{
  top:0;
  left:0;
  max-width:100%;
  max-height: 100%;
}
.showcase h1 {
  font-size: 4rem;
  margin-bottom: 0;
  color: var(--light);
}

.showcase p {
  font-size: 1.3rem;
  margin-top: 0;
  color: var(--light);
}

/* Top Box */
.top-box {
  background: var(--primary);
  display: grid;
  align-items: center;
  justify-items: center;
  box-shadow: var(--shadow);
  padding: 1.5rem;
}

.top-box .price {
  font-size: 2.5rem;
}

.top-box-a {
  grid-area: top-box-a;
}

.top-box-b {
  grid-area: top-box-b;
}

/* Boxes */
.boxes {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
}

.box {
  background: var(--primary);
  text-align: center;
  padding: 1.5rem 2rem;
  box-shadow: var(--shadow);
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
}
.box {position: relative; padding-bottom: 56.25%; /* 16:9 */  padding-top: 25px;height:10px;grid-template-columns: 1fr 1fr 1fr;}
.box iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%;grid-template-columns: 1fr 1fr 1fr;}


/* Info */
.info {
  background: var(--primary);
  box-shadow: var(--shadow);
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
}

/* Portfolio */
.portfolio {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
}

.portfolio img {
  width: 100%;
  box-shadow: var(--shadow);
}

/* Footer */
footer {
  margin-top: 2rem;
  background: var(--dark);
  color: var(--light);
  text-align: center;
  padding: 1rem;
}

/* Media Queries */
@media (max-width: 700px) {
  .top-container {
    grid-template-areas:
      'showcase showcase'
      'top-box-a top-box-b';
  }

  .showcase h1 {
    font-size: 2.5rem;
  }

  .main-nav ul {
    grid-template-columns: 1fr;
  }

  .info {
    grid-template-columns: 1fr;
  }

  .info .btn {
    display: block;
    text-align: center;
    margin: auto;
  }
}


@media (max-width: 500px) {
  .top-container {
    grid-template-areas:
      'showcase'
      'top-box-a'
      'top-box-b';
  }
}


  a:hover {
    text-decoration: none;
  }
 
  .mainVideo{

    grid-template-columns: 1fr 1fr 1fr;


  }
  .boxes{
      display: grid;
  grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

</style>
<body>
  <section class="main-wrap">
    <section class="main-banner" id="banner">
      
     
          <div class="col" id="banner">
      
            <img src="images/rebreak.png" alt="" class="img-fluid" />
     
            <h1> A Fresh take on local news</h1>
<iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Frebreaknews%2F&width=450&layout=standard&action=like&size=small&share=true&height=35&appId=2800550546728888" width="450" height="35" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>      
  
    </section>
    <div class="wrapper">
        <!-- Navigation -->
        <nav class="main-nav">
          <ul id="test">
            <li >
              <a href="#" on:click={topVideos}>Top Videos</a>
            </li>
            <li>
              <a href="#" on:click={recentVideos}>Recent Videos</a>
            </li>
          
          </ul>
        </nav>
        <!-- Top Container -->
        
     

        <!-- Boxes Section -->
        <section class="boxes">
      
          {#each displayedvids as vid}
          <div class="box">
            <i class="fas fa-globe fa-4x"></i>

          <iframe class='youtubebox' width="320" height="200"
              src="https://www.youtube.com/embed/{vid}">
          </iframe>
        </div>
        
        {/each}
    
        </section>

        <!-- Info Section 
        <section class="info">
          <img src="https://image.ibb.co/j4Qz8x/pic1.jpg" alt="">
          <div>
            <h2>Your Business On The Web</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non repellendus?
              Quae atque vero modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores provident commodi.</p>
            <a href="#" class="btn">Learn More</a>
          </div>
        </section>

      
        <section class="portfolio">
          <img src="https://source.unsplash.com/random/200x200" alt="">
          <img src="https://source.unsplash.com/random/201x200" alt="">
          <img src="https://source.unsplash.com/random/202x200" alt="">
          <img src="https://source.unsplash.com/random/203x200" alt="">
          <img src="https://source.unsplash.com/random/204x200" alt="">
          <img src="https://source.unsplash.com/random/205x200" alt="">
          <img src="https://source.unsplash.com/random/206x200" alt="">
          <img src="https://source.unsplash.com/random/207x200" alt="">
          <img src="https://source.unsplash.com/random/208x200" alt="">
        </section>

        <!-- Footer -->
        <footer>
          <p>James &copy; 2018</p>
        </footer>

      </div>
      <!-- Wrapper Ends -->
    </section>
  </body>