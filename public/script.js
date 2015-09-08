$(document).ready(function(){
  console.log('LO TOSH, GOT A TOSHIBA?');
  getVideos();
})

function request(method, url, data) {
  return $.ajax({
    method: method,
    url: url,
    dataType: 'json',
    data: data
  })
}

function getVideos(){
  //ajax requesting from DB the list of Videos
  request('GET', '/videos', null).done(function(response){
    console.log(response);
    $.each(response, function(index, vid) {
      console.log(vid);
    })
  })
}

function appendToPage(video) {
  console.log(video)
  // $('<iframe id="player" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/'+ video.url +'" frameborder="0"></iframe>').prependTo("#videos")
}


