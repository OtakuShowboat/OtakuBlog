//Not the most elegant of code, but it gets the job done. The below is what highlights the navbar text for the current page.

function highlightNav() {

//Highlights home page
var homeLink = document.getElementById("home");
if(window.location.pathname == "/OtakuBlog/" || window.location.pathname == "/") 
	{
		homeLink.className += " active";
	};


//Top navigation highlighting for side navigation pages
var weightLink = document.getElementById("weight");
var videoLink = document.getElementById("videos");
var collectionLink = document.getElementById("collection");
var aboutLink = document.getElementById("about");
var urlArray = window.location.pathname.split("/")

for (var i = 0, l = urlArray.length; i < l; i++) {
if( urlArray[i] == "weighins" ){
	weightLink.className += " active ";
}
if( urlArray[i] == "videos" ) {
	videoLink.className += " active ";
}
if( urlArray[i] == "about" ) {
	aboutLink.className += " active ";
}
if( urlArray[i] == "collection") {
	collectionLink.className += " active ";
	}

if( urlArray[i] == "otaku-blog") {
	homeLink.className += " active ";
	}
 
 function runApplication() {
  //console.log(window.location.pathname);
  setActiveLink(window.location.pathname + window.location.hash);
 }
};

};