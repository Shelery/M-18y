$(document).ready(function () {
  let key = "AIzaSyBcTa8Jsqop6Cvtz - cfmYUUZOakE0CYRvc";
  let playlistId = "PLhP5ryA9vR7DeGERzu5sCv1e3UVhClB69";
  // You send plaslistId and API key to the following URL
  //      it send its response in JSON
  let URL = "https://www.googleapis.com/youtube/v3/playlistItems";
  // Create an object
  //      because the API expects is
  var options = {
    part: "snippet",
    key: key,
    maxResults: 20,
    playlistId: playlistId,
  };

  loadVids();

  // Make the videos appear on the page
  function loadVids() {
    // Send a request"form
    $.getJSON(URL, options, function (data) {
      // Tell what to do with the data sent back ^^
      console.log(data);
      // Get main video's id from 'data' JSON
      let id = data.items[0].snippet.resourceId.videoId;
      let title = data.items[0].snippet.title;
      // Get main video
      mainVid(id, title);
      // Get the videos of playlist
      resultsLoop(data);
    });
  }

  // Make main video appear on page
  function mainVid(id, title) {
    $("#video").html(`
      <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/${id}?&autoplay=1&controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `);
    $(".song-title").html(`
        ${title}
    `);
  }

  // Loop through other result of playlist
  //  and insert them under mainVid
  function resultsLoop(data) {
    // Get each videos url
    //  Loop through each playlist item
    //      Explanation:
    //      list = data.items; i = number of position; item = element of list
    $.each(data.items, function (i, item) {
      // thumb = video urls
      let thumb = item.snippet.thumbnails.medium.url;
      let title = item.snippet.title;
      let descr = item.snippet.description.substring(0, 100);
      // vid = video id
      let vid = item.snippet.resourceId.videoId;

      $(".sky-con").append(`
        <div class="star-${i} star", data-key="${vid}", title="${title}"> + </div>
        `);
    });
  }

  // Change main video on click
  $(".sky-con").on("click", ".star", function () {
    let id = $(this).attr("data-key");
    let title = $(this).attr("title");
    mainVid(id, title);
  });
});
