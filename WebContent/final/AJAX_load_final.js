function getMovieTitles(){
	var xmlhttp;
	if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
	} else { // code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				jsondata = JSON.parse(xmlhttp.responseText);
				var movies = jsondata.movies;
				var output = '<form>';
				output += '<select id="movie_select" onchange="movieSelect()">';
				output += '<option value="">Kies Film</option>';
				for(var i=0;i<movies.length;++i){
						output += '<option value="'+i+'">'+movies[i].title+'</option>';
				}
				output += '</select></form>';
				document.getElementById('movie_title').innerHTML = output;
			}
	};
	xmlhttp.open("GET", "movies.json", true);
	xmlhttp.send();
}