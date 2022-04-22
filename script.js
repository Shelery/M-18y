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
    maxResults: 21,
    playlistId: playlistId,
  };

  let messages = [
    [
      `Mélyen tisztelt, tegnaptól fogva nagykorú Márta! <br> <br>
      Remélem, emlékszel még arra a beszélgetésünkre, ami valahol a Barii Egyetem weboldalának szidalmazása után folyt le közöttünk.
      Nem, nem a fickóra, sem az érthetetlen törzsekre, mégcsak nem is az álom egyetemedre, a Macska Minketre gondolok. <br>
      Hanem arra, amikor a dalokhoz kapcsolódó emlékekről beszélgettünk. Nekem nagyon emlékezetes volt. Utána is sokszor felidéződött bennem
      egy kis bödön képe, ami üres, de ami még mindig magában őrzi a kávé illatát, pedig ki tudja, mióta nincs is benne. 
      (Mert igen, kávé volt ebben a hipotetikus bödönben, és úgy főzték le, hogy ne legyen csersavas.) <br>
      Mint ez a példa is mutatja, a kép megihletett, és arra gondoltam: töltsük meg újra ezt a bödönt. Olyan számokkal, amiket az emberek
      hozzád kötnek. <br> 
      Ezzel (is) szeretnénk neked boldog 18. születésnapot kívánni! <br> - Eszti és Vali`,
    ],
    [
      `Kedves Márti ❤️<br> 
    Nagyon köszönöm, hogy bármit megoszthatok veled és hogy ennyire érdeklődő és nyitott vagy!<br> 
    Szeretem benned, hogy mindig őszinte , direkt, és közvetlen vagy.Nagyon szeretem a humorodat, hogy kapható vagy mindenre és hogy a jövőbeli utazóstársam leszel <br> - Réka`,
    ],
    [
      `Mert szereted ezt a számot és azzal hogy beraktad állandóan az agyamra mentél. <br> - Brigi`,
    ],
    [
      `kedves Márti! Hiába a sok olasz spanyol stb szám, én ezt a számot küldöm neked, ez maradt meg az edzesunkrol. Nem tom miért, nem a szöveget figyeltem, egyszerűen csak ez... <br>  boldog születésnapot, szeretettel, Gerda`,
    ],
    [
      `Drága Márti! <br> 
    Egy hozzád kapcsolódó számon gondolkodva eszembe jutott az összes spanyol dal, amit ismerek, partizenék és minden, amire twerkelni lehet, elvégre te tanítottál meg. Valamiért mégis úgy éreztem, ez a jó választás. Talán mert olyan ember vagy, aki tudja élvezni az életet. Akivel hatalmasakat lehet bulizni, de aki érti a világ rendjét, sosem fél hangosan kimondani a véleményét és kiállni magáért. És aki mellett az ember is tudja élvezni az életet. Nekem legalábbis ilyen vagy. Felnézek rád és hihetetlenül hálás vagyok a barátságunkért. Nagyon szeretlek, a legboldogabb szülinapot és egy csodálatos évet kívánok Neked!
     <br> - Hanga`,
    ],
    [
      `Ami eszembejutott, hogy amikor feldobtad ezt a számot, hogy énekeljük a ballagáson eljátszottad egyedül citerán és nagyon büszke voltam rád😢❤️ Boldog szülit a csajszinak!🌷<br> 
    Ui.: Büszke vagyok azért is, hogy milyen bátor világutazó vagy.✈️<br>  - Zsófi `,
    ],
    [
      `Ezt a dalt gondolom a közös dalunknak, egyből te jutsz róla eszembe, amikor hallgatom, nagyon sok jó emléket hoz fel bennem. Boldog születésnapot, nagyon szeretlek❤️ <br> - Lilla`,
    ],
    [
      `Vannak azok, akik olyan különlegesek, hogy mellettük minden más szürkének tűnik. És vannak azok, akik olyan kivételesek, hogy körülöttük minden színesebbnek tűnik. Ez valahogy szebben volt megfogalmazva, de a lényeg az, hogy te az utóbbi vagy.
    Csodálom azt az erőt, amivel képviseled az értékeidet, és azt a törődést, amivel mindenki felé viseltetsz. Neked talán fel sem tűnik, de nekem újra és újra példaként szolgál.
    Nagyon boldog születésnapot kívánok neked! <br>
     - Eszti`,
    ],
    [`Bette`],
    [`Bette`],
    [`Bette`],
    [`Bette`],
    [`feliz cumpleaños a la mejor novia <br>  - Maja`],
    [`feliz cumpleaños a la mejor novia <br> - Maja`],
    [`feliz cumpleaños a la mejor novia <br>  - Maja`],
    [
      `Tudom, hogy a kis társaságunkban Alvaro Soler underrated, de te szereted, és hát actually én is, szóval nagyon-nagyon sok szeretettel küldöm neked őt, és ha nem találsz senkit aki szívesen hallgatja veled, akkor gondolj rám és jövök❤️
      <br> PS.: ha rossz kedved van, akkor pedig nézd meg youtubeon a rajzolt klipjét ennek a számnak, mert hihetetlen cuki és remélem feldobja a napod!!🐥
      <br> - Dorka`,
    ],
    [
      ` La canzone è "È nu juorn buon" significa che è una bella giornata oggi, Gabriellin è il nome del bambino Gabriele, e  sta per chi ogni giorno scopre il mondo attraverso gli occhi del fanciullino, che è infantile ma curioso. Sta a noi scoprire piú cose del mondo che ci circonda e lo si deve fare sempre con tanta sorpresa emotiva. Ti auguro tanti successi nella vita Márti, divertiti stasera💓💋 <br> - Giovanni`,
    ],
    [
      ` Boldog születésnapot! <br>
        Ne szálljon el a feje a "kék mesternek", de csak így tovább.
        Egy éven belül a legprofibb falmászók leszünk.
        <br> - Domonkos
        `,
    ],
    [`Simone`],
    [
      `Kedves Márti! <br> Azért ezt a dalt küldöm, mert ez a legnevezetesebb ESZTÉTIKUS HALÁLZENE. Hogy legyen valami az elmélázós napokra is, amikor az ember nem fut vagy táncol, hanem csak sétál és nézi a tájat.  A sok mulatós mellett szerettem volna ezzel színesíteni a gyűjteményt, mint ahogy a személyiségem színesíti az életeted. Örülök, hogy örökbefogadtunk 3. ikernek, remélem, tudod, hogy már soha nem kerülsz távol a szívünktől, bárhova is utazz a fizikai világban! Élvezd az életet, és tudd, hogy mindig lesznek körülötted emberek, akikre számíthatsz - még ha a fizikai világban nincsenek is mindig melletted! <br> - Vali`,
    ],
    [
      `If you don't do wild things while you are young, you will have nothing to smile about when you are old. However remember; now that you are an adult, you can do all the  things you are doing illegally before legally <br> - Adi`,
    ],
  ];
  console.log(messages[0][1]);

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
      let pos = 0;
      let autoplay = 0;
      // Get main video
      mainVid(id, title, pos, autoplay);
      // Get the videos of playlist
      resultsLoop(data);
    });
  }

  // Make main video appear on page
  function mainVid(id, title, pos, autoplay) {
    $("#video").html(`
      <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/${id}?&autoplay=${autoplay}&controls=0"
          id = ${pos}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `);
    $(".song-title").html(`
        ${title}
    `);
    $(".intro").html(`
      <p>
      ${messages[pos]}
      </p>
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
      let title = item.snippet.title;
      // vid = video id
      let vid = item.snippet.resourceId.videoId;

      $(".sky-con").append(`
        <div id = "${i}" class="star-${i} star", data-key="${vid}", title="${title}"> + </div>
        `);
    });
  }

  // Change main video on click
  $(".sky-con").on("click", ".star", function () {
    let id = $(this).attr("data-key");
    let title = $(this).attr("title");
    let pos = parseInt($(this).attr("id"));
    let autoplay = 1;
    mainVid(id, title, pos, autoplay);
  });
});
