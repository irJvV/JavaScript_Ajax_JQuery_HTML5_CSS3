function getDataVanXML() {
	var xmlhttp;
	if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
	} else { // code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				xmldata = xmlhttp.responseXML;
				var movies = xmldata.getElementsByTagName("movie");
				var output = "<ul>";
				//output += movies[0].getElementsByTagName("title")[0].firstChild.nodeValue;
				for(var i=0;i<movies.length;++i){
						output += '<li>'+movies[i].getElementsByTagName("title")[0].firstChild.nodeValue+'</li>';
				}
				output += "</ul>";
				document.getElementById("movie-data").innerHTML = output;
				
		}
	};
	xmlhttp.open("GET", "movies.xml", true);
	xmlhttp.send();
}