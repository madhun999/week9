$("document").ready(function(){
    //		
	var artists = {
		artist1 : {
			link : "http://hoist1138.com/jacques-louis-david.html",
			img : "assets/images/artists/jacques-louis-david.png",
			fullName : "Jacques-Louis David",
			years : "1748 - 1845"
		},
		artist2 : {
		    link: "http://hoist1138.com/orazio-gentileschi.html",
			img : "assets/images/artists/orazio-gentileschi.png",
			fullName : "Orazio Gentileschi",
			years : "1563 - 1639"
		},
		artist3 : {
			link : "http://hoist1138.com/bob-ross.html",
			img : "assets/images/artists/bob-ross.png",
			fullName : "Bob Ross",
			years : "1942 - 1995"
		},artist4 : {
		    link: "http://hoist1138.com/pablo-picasso.html",
			img : "assets/images/artists/pablo-picasso.png",
			fullName : "Pablo Picasso ",
			years : "1881 - 1973"
		},
		artist5 : {
		    link: "http://hoist1138.com/vincent-van-gogh.html",
			img : "assets/images/artists/jacques-louis-david.png",
			fullName : "Jacques-Louis David",
			years : "1853 - 1890"
		},
		artist6 : {
			link : "http://hoist1138.com/mark-ryden.html",
			img : "assets/images/artists/mark-ryden.png",
			fullName : "Mark Ryden",
			years : "1963 - present"
		},
		artist7 : {
			link : "http://hoist1138.com/leonardo-da-vinci.html",
			img : "assets/images/artists/leonardo-da-vinci.png",
			fullName : "Leonardo da Vinci",
			years : "1452 - 1519"
		},
		artist8 : {
			link : "http://hoist1138.com/william-cumming.html",
			img : "assets/images/artists/william-cumming.png",
			fullName : "William Cumming",
			years : "1917 - 2010"
		},
		artist9 : {
		    link: "http://hoist1138.com/norman-rockwell.html",
			img : "assets/images/artists/norman-rockwell.png",
			fullName : "Norman Rockwell",
			years : "1894 - 1978"
		},
		artist10 : {
		    link: "http://hoist1138.com//michelangelo-merisi-da-caravaggio.html",
			img : "assets/images/artists/caravaggio.png",
			fullName : "Michelangelo Merisi da Caravaggio",
			years : "1571 - 1610"
		},
		artist11 : {
			link : "http://hoist1138.com/name.html",
			img : "assets/images/artists/artemisia_gentileschi.png",
			fullName : "Artemisia Gentileschi",
			years : "1593 - 1656"
		},
		artist12 : {
			link : "http://hoist1138.com/jean-honore-fragonard.html",
			img : "assets/images/artists/jean-Honore-fragonard.png",
			fullName : "Jean-Honoré Fragonard",
			years : "1732 - 1806"
		},
		artist13 : {
			link : "http://hoist1138.com/jean-baptiste-camille-corot.html",
			img : "assets/images/artists/jean-baptiste-camille-corot.png",
			fullName : "Jean-Baptiste-Camille Corot",
			years : "1796 - 1875"
		},
		artist14 : {
			link : "http://hoist1138.com/jan-van-eyck.html",
			img : "assets/images/artists/jan_van_eyck.png",
			fullName : "Jan van Eyck",
			years : "1390 - 1441"
		},
		artist15 : {
			link : "http://hoist1138.com/jean-michel-basquiat.html",
			img : "assets/images/artists/jean-michel-basquiat.png",
			fullName : "Jean-Michel Basquiat",
			years : "1748 - 1845"
		}
	};



//	<li>
//        <a href="http://hoist1138.com/edward-hopper.html">
//        <img src="assets/images/artists/edward-hopper.png" />
//        <h3>Edward Hopper  </h3>
//        <h4>1892 - 1967</h4>
//        </a>
//        <a href="#">info</a>
//    </li>

	function buildArtistList(objList) {
	    var str = "";


        // Render HTML list of artists
	    for (i in objList) {
	        str +=
            '<li>' +
                '<a href="' + objList[i].link + '">' +
                    '<img src="' + objList[i].img + '" />' +
                    '<h3>' + objList[i].fullName + '</h3>' +
                    '<h4>' + objList[i].years + '</h4>' +
                '</a>' +
                '<a href="#">info</a>' +
            '</li>';
	    }

        // Insert the HTML into the webpage
	    $("#artist-list").html(str);
	}

    //
	buildArtistList(artists);

});//closing document.ready
























