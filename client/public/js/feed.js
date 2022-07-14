document.getElementById("portal_button").addEventListener("click", ()=> goToLocation("https://www.nasa.gov/nasalive"));


function feedItem(title, body, linkURL, imageUrl){
    this.title = title;
    this.body = body;
    this.linkURL = linkURL;
    this.imageUrl = imageUrl;
}

let storyOne = new feedItem("ASTRONAUTS" , "The term astronaut derives from the Greek words meaning space sailor, and refers to all who have been launched as crew members aboard NASA spacecraft bound for orbit and beyond. The term astronaut has been maintained as the title for those selected to join the NASA corps of astronauts who make space sailing their career profession." , "https://www.nasa.gov/astronauts", "http://www.nasa.gov/sites/default/files/thumbnails/image/jsc2020e000607.jpg");
let storyTwo = new feedItem("ROVER LANDS ON MARS" , "On Feb. 18, NASA's Perseverance Mars rover touched down on the Red Planet after a seven-month flight from Earth. Only the fifth rover to land on the planet, Perseverance represents a giant leap forward in our scientific and technological capabilities for exploring Mars and the possibility that life may have once existed on the Red Planet." , "https://www.jpl.nasa.gov/edu/news/2021/1/8/take-part-in-a-worldwide-teachable-moment-as-nasas-perseverance-rover-lands-on-mars" , "https://mars.nasa.gov/imgs/mars2020/mars2020-sky-crane.jpg");
let storyThree = new feedItem("THE PLANETS" ,"There are more planets than stars in our galaxy. The current count orbiting our star: eight.The inner, rocky planets are Mercury, Venus, Earth, and Mars. NASA's newest rover — Perseverance  landed on Mars on Feb. 18, 2021. The outer planets are gas giants Jupiter and Saturn and ice giants Uranus and Neptune." , "https://www.nasa.gov/topics/solarsystem/index.html" , "https://im.indiatimes.in/content/2020/Nov/AMP-12_5fa24b0e86672.jpg");

let stories =[storyOne,storyTwo,storyThree];

function displayItem(){
    for(var i= 0; i < stories.length; i++){
        let item = stories[i];
        document.getElementById("horizontal").innerHTML += "<div class = 'stories'><img class='feedImage' src='" + item.imageUrl + "'>\n<p><a href = '" + item.linkURL + "'>" + item.title + "</a><br>" + item.body + "<br><hr></p></div>";

    }
}

function displayItem(){
    for(var i= 0; i < stories.length; i++){
        let item = stories[i];
        document.getElementById("newsfeed").innerHTML += "<img class='feedImage' src='" + item.imageUrl + "'>\n<p><a href = '" + item.linkURL + "'>" + item.title + "</a><br>" + item.body + "<br><hr></p><hr>";

    }
}



window.addEventListener('load', displayItem);

function nasa(name, body, linkURL, imageUrl){
    this.name = name;
    this.body = body;
    this.linkURL = linkURL;
    this.imageUrl = imageUrl;
}

let displayNasacontroller = function(id, story){
    document.getElementById((id)).innerHTML +=
    "<div> <h1>" + story.name + "</h1> <img class = storyImage src = " + story.imageUrl + "></img> <br/ ><p>" + story.body + "</p><a href = " + story.linkURL + ">Get them here!</a> <hr/> </div>";
}






window.addEventListener("load", ()=> {
    for(var i = 0; i < story.length; i++){
        if(i == 0) 
            displayNasacontroller("storyOne", stories[i]);
        if(i == 1) 
            displayNasacontroller("storyTwo", stories[i]);
        if(i == 2) 
            displayNasacontroller("storyThree", stories[i]);
    
    }
});