$(document).ready(function(){

	$('input[type="submit"]').click(function(event){

		event.preventDefault();

		$('')
		
		var search = $('#query').val();

		getRequest(search);

	});	

	function getRequest(search) {

		var params = {
			part:'snippet',
			key:"AIzaSyDv65pOGkf1np9V56hTMDV_Iy1ukR3gXj4",
			q:search,
			maxResults:50		
		};

		var url = 'https://www.googleapis.com/youtube/v3/search';

	  $.getJSON(url, params, function(data){
	    
	    showResults(data);

	  });
	}

	function showResults(results) {

		$('#search-result').empty();

		for(var i = 0; i < results.items.length; i++) {

			var vid = new video(results.items[i].id.videoId,results.items[i].snippet.thumbnails.medium.url);
			
			vid.display();//not working


			//this works just needs to be uncommented 
			//$('#search-result').append('<a href="https://www.youtube.com/watch?v=' + vid.videoId + '">' + '<img src="' + vid.photoUrl+ '">' + '</a>');
		}
	}


function video(videoId,photoUrl) {
	
	//this.url = url;

	this.videoId = videoId;

	this.photoUrl = photoUrl;

	this.display = function(){
		
		//console.log(this.videoId,this.photoUrl);
		$('#search-result').append('<a href="https://www.youtube.com/watch?v=' + this.videoId + '<img src="' + this.photoUrl + '">' + '</a>');

	};

}













});