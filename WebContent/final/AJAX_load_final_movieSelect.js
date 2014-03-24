function movieSelect(){
		var selectBox = document.getElementById('movie_select');
		var movieIndex = selectBox.options[selectBox.selectedIndex].value;
		getMovieInfo(movieIndex);
}