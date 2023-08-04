/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );


	qlik.theme.apply('unimed-bh');


	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('3571eb10-3a54-43e4-9ac4-0b07f576c862', config);

	//get objects -- inserted here --
	app.getObject('QV08','atUy');
	
	
	
	
	app.getObject('QV07','sQHhj');
	
	
	app.getObject('QV02','uycJk');
	app.getObject('QV01','21d609cf-ec93-406d-b062-9a4d0e904e43');
	app.getObject('QV06','psXkrc');
	app.getObject('QV05','maPFa');
	app.getObject('QV04','LnrX');
	app.getObject('QV03','UDzHc');
	
	let scale = 0;
const cards = Array.from(document.getElementsByClassName("card"));
const inner = document.querySelector(".inner");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function slideAndScale() {
	cards.map((card, i) => {
		card.setAttribute("data-scale", i + scale);
		inner.style.transform = "translateX(" + scale * 8.5 + "em)";
	});
}

(function init() {
	slideAndScale();
	cards.map((card, i) => {
		card.textContent = i;
		card.addEventListener("click", () => {
			const id = card.getAttribute("data-scale");
			if (id !== 2) {
				scale -= id - 2;
				slideAndScale();
			}
		}, false);
	});
	
	nextBtn.addEventListener("click", () => {
		if (cards[cards.length -1].getAttribute("data-scale") != 2) {
			scale--;
		}
		slideAndScale();
	}, false);
	prevBtn.addEventListener("click", () => {
		if (cards[0].getAttribute("data-scale") < 2) {
			scale++;
		}
		slideAndScale();
	}, false);
})();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//create cubes and lists -- inserted here --

} );
