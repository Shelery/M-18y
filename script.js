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

  let messages = [
    [
      "Eszti és Vali",
      `Mélyen tisztelt, innentól fogva nagykorú Márta!
      Remélem, emlékszel még arra a beszélgetésünkre, ami valahol a Barii Egyetem weboldalának szidalmazása után folyt le közöttünk.
      Nem, nem a fickóra, sem az érthetetlen törzsekre, mégcsak nem is az álom egyetemedre, a Macska Minketre gondolok.
      Hanem arra, amikor a dalokhoz kapcsolódó emlékekről beszélgettünk. Nekem nagyon emlékezetes volt. Utána is sokszor felidéződött bennem
      egy kis bödön képe, ami üres, de ami még mindig magában őrzi a kávé illatát, pedig ki tudja, mióta nincs is benne. 
      (Mert igen, kávé volt eben a hipotetikus bödönben, és úgy főzték le, hogy ne legyen csersavas.)
      Mint ez a példa is mutatja, a kép megihletett, és arra gondoltam: töltsük meg újra ezt a bödönt. Olyan számokkal, amiket az emberek így-vagy-úgy, de
      hozzád kötnek. 
      Ezzel (is) szeretnénk neked boldog 18. születésnapot kívánni!`,
    ],
    [
      "Réka",
      `Kedves Márti ❤️
    Nagyon köszönöm, hogy bármit megoszthatok veled és hogy ennyire érdeklődő és nyitott vagy!
    Szeretem benned, hogy mindig őszinte , direkt, és közvetlen vagy.Nagyon szeretem a humorodat, hogy kapható vagy mindenre és hogy a jövőbeli utazóstársam leszel`,
    ],
    [
      "Brigi",
      `Mert szereted ezt a számot és azzal hogy beraktad állandóan az agyamra mentél.`,
    ],
    [
      "Gerda",
      `kedves Márti! Hiába a sok olasz spanyol stb szám, én ezt a számot küldöm neked, ez maradt meg az edzesunkrol. Nem tom miért, nem a szöveget figyeltem, egyszerűen csak ez...boldog születésnapot, szeretettel,`,
    ],
    [
      "Hanga",
      `Drága Márti! 
    Egy hozzád kapcsolódó számon gondolkodva eszembe jutott az összes spanyol dal, amit ismerek, partizenék és minden, amire twerkelni lehet, elvégre te tanítottál meg. Valamiért mégis úgy éreztem, ez a jó választás. Talán mert olyan ember vagy, aki tudja élvezni az életet. Akivel hatalmasakat lehet bulizni, de aki érti a világ rendjét, sosem fél hangosan kimondani a véleményét és kiállni magáért. És aki mellett az ember is tudja élvezni az életet. Nekem legalábbis ilyen vagy. Felnézek rád és hihetetlenül hálás vagyok a barátságunkért. Nagyon szeretlek, a legboldogabb szülinapot és egy csodálatos évet kívánok Neked!`,
    ],
    [
      "Zsófi",
      `Ami eszembejutott, hogy amikor feldobtad ezt a számot, hogy énekeljük a ballagáson eljátszottad egyedül citerán és nagyon büszke voltam rád😢❤️ Boldog szülit a csajszinak!🌷
    Ui.: Büszke vagyok azért is, hogy milyen bátor világutazó vagy.✈️`,
    ],
    [
      "Lilla",
      `Ezt a dalt gondolom a közös dalunknak, egyből te jutsz róla eszembe, amikor hallgatom, nagyon sok jó emléket hoz fel bennem. Boldog születésnapot, nagyon szeretlek❤️`,
      "Ata",
    ],
    [
      "Eszti",
      `Vannak azok, akik olyan különlegesek, hogy mellettük minden más szürkének tűnik. És vannak azok, akik olyan kivételesek, hogy körülöttük minden színesebbnek tűnik. Ez valahogy szebben volt megfogalmazva, de a lényeg az, hogy te az utóbbi vagy.
    Csodálom azt az erőt, amivel képviseled az értékeidet, és azt a törődést, amivel mindenki felé viseltetsz. Neked talán fel sem tűnik, de nekem újra és újra példaként szolgál.
    Nagyon boldog születésnapot kívánok neked!`,
    ],
    ["Maja", `feliz cumpleaños a la mejor novia`],
    ["Bette"],
  ];
  console.log(messages[0][0]);

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
