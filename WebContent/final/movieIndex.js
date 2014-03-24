function getMovieInfo(i){
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
				var output = "";
				output += '<li>Year: '+movies[i].year+'</li>';
				output += '<li>Genre: '+movies[i].genre+'</li>';
				output += '<li>Director: '+movies[i].director+'</li>';
				document.getElementById('movie_info').innerHTML = output;
			}
	};
	xmlhttp.open("GET", "movies.json", true);
	xmlhttp.send();
}