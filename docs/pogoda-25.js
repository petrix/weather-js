
//////////////////////////////////LVIV
function weather_lviv()
{
	 $(function(lvivtemp) {
		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
		var url = "https://api.forecast.io/forecast/";
		var lati = 49.8492;
		var longi = 23.9974;
		var data;
$.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
		  var lvivtemp = data.currently.temperature;
		   lvivicon = data.currently.icon;
		   lvivsum = data.currently.summary;
			lvivtemp=lvivtemp.toFixed(0);
		  $("lvivtemp").html(lvivtemp + "&deg;C");
		  $("lvivsum").html(lvivsum);
		//sym.$("lvivicon"). html('<canvas id="lvivicon" width="50" height="50"></canvas>');
		  var skycons = new Skycons({"color": "white"});
		  skycons.add("lvivicon", lvivicon);
		  skycons.play();
			});
		 });
}
weather_lviv();

//////////////////////////////////uzhgorod
// function weather_uzhgorod()
// {
// 	 $(function(uzhgorodtemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 48.6275;
// 		var longi = 22.2856;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var uzhgorodtemp = data.currently.temperature;
// 		   uzhgorodicon = data.currently.icon;
// 			uzhgorodtemp=uzhgorodtemp.toFixed(0);
// 		  $("#Stage_uzhgorodtemp2").html(uzhgorodtemp + "&deg;C");
// 		sym.$("uzhgorodicon2"). html('<canvas id="uzhgorodicon" width="50" height="50"></canvas>');
// 		  var skycons2 = new Skycons({"color": "white"});
// 		  skycons2.add("uzhgorodicon", uzhgorodicon);
// 		  skycons2.play();

// 			});
// 		 });
// }
// weather_uzhgorod();


// //////////////////////////////////IVF
// function weather_ivf()
// {
// 	 $(function(ivftemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 48.9214;
// 		var longi = 24.7069;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var ivftemp = data.currently.temperature;
// 		   ivficon = data.currently.icon;
// 			ivftemp = ivftemp.toFixed(0);
// 		  $("#Stage_ivftemp3").html(ivftemp + "&deg;C");
// 		sym.$("ivficon3"). html('<canvas id="ivficon" width="50" height="50"></canvas>');
// 		  var skycons3 = new Skycons({"color": "white"});
// 		  skycons3.add("ivficon", ivficon);
// 		  skycons3.play();
// 			});
// 		 });
// }
// weather_ivf();

// //////////////////////////////////ternopil
// function weather_ternopil()
// {
// 	 $(function(ternopiltemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 49.5567;
// 		var longi = 25.5923;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var ternopiltemp = data.currently.temperature;
// 		   ternopilicon = data.currently.icon;
// 			ternopiltemp = ternopiltemp.toFixed(0);
// 		  $("#Stage_ternopiltemp4").html(ternopiltemp + "&deg;C");
// 		sym.$("ternopilicon4"). html('<canvas id="ternopilicon" width="50" height="50"></canvas>');
// 		  var skycons4 = new Skycons({"color": "white"});
// 		  skycons4.add("ternopilicon",ternopilicon);
// 		  skycons4.play();
// 			});
// 		 });
// }
// weather_ternopil();

// //////////////////////////////////hmelnitski
// function weather_hmelnitski()
// {
// 	 $(function(hmelnitskitemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 49.4181;
// 		var longi = 26.9885;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var hmelnitskitemp = data.currently.temperature;
// 		   hmelnitskiicon = data.currently.icon;
// 			hmelnitskitemp=hmelnitskitemp.toFixed(0);
// 		  $("#Stage_hmelnitskitemp").html(hmelnitskitemp + "&deg;C");
// 		sym.$("hmelnitskiicon"). html('<canvas id="hmelnitskiicon" width="50" height="50"></canvas>');
// 		  var skycons5 = new Skycons({"color": "white"});
// 		  skycons5.add("hmelnitskiicon", hmelnitskiicon);
// 		  skycons5.play();
// 			});
// 		 });
// }
// weather_hmelnitski();
// //////////////////////////////////rivne
// function weather_rivne()
// {
// 	 $(function(rivnetemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 50.6201;
// 		var longi = 26.2452;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var rivnetemp = data.currently.temperature;
// 		   rivneicon = data.currently.icon;
// 			rivnetemp=rivnetemp.toFixed(0);
// 		  $("#Stage_rivnetemp2").html(rivnetemp + "&deg;C");
// 		sym.$("rivneicon2"). html('<canvas id="rivneicon" width="50" height="50"></canvas>');
// 		  var skycons6 = new Skycons({"color": "white"});
// 		  skycons6.add("rivneicon", rivneicon);
// 		  skycons6.play();

// 			});
// 		 });
// }
// weather_rivne();
// //////////////////////////////////lutsk
// function weather_lutsk()
// {
// 	 $(function(lutsktemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 50.7472;
// 		var longi = 25.3256;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var lutsktemp = data.currently.temperature;
// 		   lutskicon = data.currently.icon;
// 			lutsktemp = lutsktemp.toFixed(0);
// 		  $("#Stage_lutsktemp3").html(lutsktemp + "&deg;C");
// 		sym.$("lutskicon3"). html('<canvas id="lutskicon" width="50" height="50"></canvas>');
// 		  var skycons7 = new Skycons({"color": "white"});
// 		  skycons7.add("lutskicon", lutskicon);
// 		  skycons7.play();
// 			});
// 		 });
// }
// weather_lutsk();
// //////////////////////////////////chernovtsy
// function weather_chernovtsy()
// {
// 	 $(function(chernovtsytemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 48.2999;
// 		var longi = 25.9332;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var chernovtsytemp = data.currently.temperature;
// 		   chernovtsyicon = data.currently.icon;
// 			chernovtsytemp = chernovtsytemp.toFixed(0);
// 		  $("#Stage_chernovtsytemp4").html(chernovtsytemp + "&deg;C");
// 		sym.$("chernovtsyicon4"). html('<canvas id="chernovtsyicon" width="50" height="50"></canvas>');
// 		  var skycons8 = new Skycons({"color": "white"});
// 		  skycons8.add("chernovtsyicon",chernovtsyicon);
// 		  skycons8.play();
// 			});
// 		 });
// }
// weather_chernovtsy();

// //////////////////////////////////zhitomir
// function weather_zhitomir()
// {
// 	 $(function(zhitomirtemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 50.2705;
// 		var longi = 28.6726;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var zhitomirtemp = data.currently.temperature;
// 		   zhitomiricon = data.currently.icon;
// 			zhitomirtemp=zhitomirtemp.toFixed(0);
// 		  $("#Stage_zhitomirtemp").html(zhitomirtemp + "&deg;C");
// 		sym.$("zhitomiricon"). html('<canvas id="zhitomiricon" width="50" height="50"></canvas>');
// 		  var skycons9 = new Skycons({"color": "white"});
// 		  skycons9.add("zhitomiricon", zhitomiricon);
// 		  skycons9.play();
// 			});
// 		 });
// }
// weather_zhitomir();
// //////////////////////////////////sumy
// function weather_sumy()
// {
// 	 $(function(sumytemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 50.9040;
// 		var longi = 34.8091;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var sumytemp = data.currently.temperature;
// 		   sumyicon = data.currently.icon;
// 			sumytemp=sumytemp.toFixed(0);
// 		  $("#Stage_sumytemp2").html(sumytemp + "&deg;C");
// 		sym.$("sumyicon2"). html('<canvas id="sumyicon" width="50" height="50"></canvas>');
// 		  var skycons10 = new Skycons({"color": "white"});
// 		  skycons10.add("sumyicon", sumyicon);
// 		  skycons10.play();

// 			});
// 		 });
// }
// weather_sumy();
// //////////////////////////////////chernigiv
// function weather_chernigiv()
// {
// 	 $(function(chernigivtemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 51.4943;
// 		var longi = 31.2955;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var chernigivtemp = data.currently.temperature;
// 		   chernigivicon = data.currently.icon;
// 			chernigivtemp = chernigivtemp.toFixed(0);
// 		  $("#Stage_chernigivtemp3").html(chernigivtemp + "&deg;C");
// 		sym.$("chernigivicon3"). html('<canvas id="chernigivicon" width="50" height="50"></canvas>');
// 		  var skycons11 = new Skycons({"color": "white"});
// 		  skycons11.add("chernigivicon", chernigivicon);
// 		  skycons11.play();
// 			});
// 		 });
// }
// weather_chernigiv();
// //////////////////////////////////poltava
// function weather_poltava()
// {
// 	 $(function(poltavatemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 49.5908;
// 		var longi = 34.5508;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var poltavatemp = data.currently.temperature;
// 		   poltavaicon = data.currently.icon;
// 			poltavatemp = poltavatemp.toFixed(0);
// 		  $("#Stage_poltavatemp4").html(poltavatemp + "&deg;C");
// 		sym.$("poltavaicon4"). html('<canvas id="poltavaicon" width="50" height="50"></canvas>');
// 		  var skycons12 = new Skycons({"color": "white"});
// 		  skycons12.add("poltavaicon",poltavaicon);
// 		  skycons12.play();
// 			});
// 		 });
// }
// weather_poltava();

// //////////////////////////////////harkiv
// function weather_harkiv()
// {
// 	 $(function(harkivtemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 49.9991;
// 		var longi = 36.2556;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var harkivtemp = data.currently.temperature;
// 		   harkivicon = data.currently.icon;
// 			harkivtemp=harkivtemp.toFixed(0);
// 		  $("#Stage_harkivtemp").html(harkivtemp + "&deg;C");
// 		sym.$("harkivicon"). html('<canvas id="harkivicon" width="50" height="50"></canvas>');
// 		  var skycons13 = new Skycons({"color": "white"});
// 		  skycons13.add("harkivicon", harkivicon);
// 		  skycons13.play();
// 			});
// 		 });
// }
// weather_harkiv();
// //////////////////////////////////lugansk
// function weather_lugansk()
// {
// 	 $(function(lugansktemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 48.5768;
// 		var longi = 39.3338;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var lugansktemp = data.currently.temperature;
// 		   luganskicon = data.currently.icon;
// 			lugansktemp=lugansktemp.toFixed(0);
// 		  $("#Stage_lugansktemp2").html(lugansktemp + "&deg;C");
// 		sym.$("luganskicon2"). html('<canvas id="luganskicon" width="50" height="50"></canvas>');
// 		  var skycons14 = new Skycons({"color": "white"});
// 		  skycons14.add("luganskicon", luganskicon);
// 		  skycons14.play();

// 			});
// 		 });
// }
// weather_lugansk();
// //////////////////////////////////donetsk
// function weather_donetsk()
// {
// 	 $(function(donetsktemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 48.0033;
// 		var longi = 37.8045;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var donetsktemp = data.currently.temperature;
// 		   donetskicon = data.currently.icon;
// 			donetsktemp = donetsktemp.toFixed(0);
// 		  $("#Stage_donetsktemp3").html(donetsktemp + "&deg;C");
// 		sym.$("donetskicon3"). html('<canvas id="donetskicon" width="50" height="50"></canvas>');
// 		  var skycons15 = new Skycons({"color": "white"});
// 		  skycons15.add("donetskicon", donetskicon);
// 		  skycons15.play();
// 			});
// 		 });
// }
// weather_donetsk();
// //////////////////////////////////dnipro
// function weather_dnipro()
// {
// 	 $(function(dniprotemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 48.4631;
// 		var longi = 35.0489;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var dniprotemp = data.currently.temperature;
// 		   dniproicon = data.currently.icon;
// 			dniprotemp = dniprotemp.toFixed(0);
// 		  $("#Stage_dniprotemp4").html(dniprotemp + "&deg;C");
// 		sym.$("dniproicon4"). html('<canvas id="dniproicon" width="50" height="50"></canvas>');
// 		  var skycons16 = new Skycons({"color": "white"});
// 		  skycons16.add("dniproicon",dniproicon);
// 		  skycons16.play();
// 			});
// 		 });
// }
// weather_dnipro();

// //////////////////////////////////odesa
// function weather_odesa()
// {
// 	 $(function(odesatemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 46.4766;
// 		var longi = 30.7117;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var odesatemp = data.currently.temperature;
// 		   odesaicon = data.currently.icon;
// 			odesatemp=odesatemp.toFixed(0);
// 		  $("#Stage_odesatemp").html(odesatemp + "&deg;C");
// 		sym.$("odesaicon"). html('<canvas id="odesaicon" width="50" height="50"></canvas>');
// 		  var skycons17 = new Skycons({"color": "white"});
// 		  skycons17.add("odesaicon", odesaicon);
// 		  skycons17.play();
// 			});
// 		 });
// }
// weather_odesa();
// //////////////////////////////////cherkasy
// function weather_cherkasy()
// {
// 	 $(function(cherkasytemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 49.4250;
// 		var longi = 32.0629;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var cherkasytemp = data.currently.temperature;
// 		   cherkasyicon = data.currently.icon;
// 			cherkasytemp=cherkasytemp.toFixed(0);
// 		  $("#Stage_cherkasytemp2").html(cherkasytemp + "&deg;C");
// 		sym.$("cherkasyicon2"). html('<canvas id="cherkasyicon" width="50" height="50"></canvas>');
// 		  var skycons18 = new Skycons({"color": "white"});
// 		  skycons18.add("cherkasyicon", cherkasyicon);
// 		  skycons18.play();

// 			});
// 		 });
// }
// weather_cherkasy();
// //////////////////////////////////vinnitsa
// function weather_vinnitsa()
// {
// 	 $(function(vinnitsatemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 49.2354;
// 		var longi = 28.4856;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var vinnitsatemp = data.currently.temperature;
// 		   vinnitsaicon = data.currently.icon;
// 			vinnitsatemp = vinnitsatemp.toFixed(0);
// 		  $("#Stage_vinnitsatemp3").html(vinnitsatemp + "&deg;C");
// 		sym.$("vinnitsaicon3"). html('<canvas id="vinnitsaicon" width="50" height="50"></canvas>');
// 		  var skycons19 = new Skycons({"color": "white"});
// 		  skycons19.add("vinnitsaicon", vinnitsaicon);
// 		  skycons19.play();
// 			});
// 		 });
// }
// weather_vinnitsa();
// //////////////////////////////////kropivnitski
// function weather_kropivnitski()
// {
// 	 $(function(kropivnitskitemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 48.5110;
// 		var longi = 32.2551;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var kropivnitskitemp = data.currently.temperature;
// 		   kropivnitskiicon = data.currently.icon;
// 			kropivnitskitemp = kropivnitskitemp.toFixed(0);
// 		  $("#Stage_kropivnitskitemp4").html(kropivnitskitemp + "&deg;C");
// 		sym.$("kropivnitskiicon4"). html('<canvas id="kropivnitskiicon" width="50" height="50"></canvas>');
// 		  var skycons20 = new Skycons({"color": "white"});
// 		  skycons20.add("kropivnitskiicon",kropivnitskiicon);
// 		  skycons20.play();
// 			});
// 		 });
// }
// weather_kropivnitski();



// //////////////////////////////////herson
// function weather_herson()
// {
// 	 $(function(hersontemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 49.8492;
// 		var longi = 23.9974;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var hersontemp = data.currently.temperature;
// 		   hersonicon = data.currently.icon;
// 			hersontemp=hersontemp.toFixed(0);
// 		  $("#Stage_hersontemp").html(hersontemp + "&deg;C");
// 		sym.$("hersonicon"). html('<canvas id="hersonicon" width="50" height="50"></canvas>');
// 		  var skycons21 = new Skycons({"color": "white"});
// 		  skycons21.add("hersonicon", hersonicon);
// 		  skycons21.play();
// 			});
// 		 });
// }
// weather_herson();
// //////////////////////////////////nikolaev
// function weather_nikolaev()
// {
// 	 $(function(nikolaevtemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 48.6275;
// 		var longi = 22.2856;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var nikolaevtemp = data.currently.temperature;
// 		   nikolaevicon = data.currently.icon;
// 			nikolaevtemp=nikolaevtemp.toFixed(0);
// 		  $("#Stage_nikolaevtemp2").html(nikolaevtemp + "&deg;C");
// 		sym.$("nikolaevicon2"). html('<canvas id="nikolaevicon" width="50" height="50"></canvas>');
// 		  var skycons22 = new Skycons({"color": "white"});
// 		  skycons22.add("nikolaevicon", nikolaevicon);
// 		  skycons22.play();

// 			});
// 		 });
// }
// weather_nikolaev();
// //////////////////////////////////zaporozhe
// function weather_zaporozhe()
// {
// 	 $(function(zaporozhetemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 48.9214;
// 		var longi = 24.7069;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var zaporozhetemp = data.currently.temperature;
// 		   zaporozheicon = data.currently.icon;
// 			zaporozhetemp = zaporozhetemp.toFixed(0);
// 		  $("#Stage_zaporozhetemp3").html(zaporozhetemp + "&deg;C");
// 		sym.$("zaporozheicon3"). html('<canvas id="zaporozheicon" width="50" height="50"></canvas>');
// 		  var skycons23 = new Skycons({"color": "white"});
// 		  skycons23.add("zaporozheicon", zaporozheicon);
// 		  skycons23.play();
// 			});
// 		 });
// }
// weather_zaporozhe();
// //////////////////////////////////simfer
// function weather_simfer()
// {
// 	 $(function(simfertemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 49.5567;
// 		var longi = 25.5923;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var simfertemp = data.currently.temperature;
// 		   simfericon = data.currently.icon;
// 			simfertemp = simfertemp.toFixed(0);
// 		  $("#Stage_simfertemp4").html(simfertemp + "&deg;C");
// 		sym.$("simfericon4"). html('<canvas id="simfericon" width="50" height="50"></canvas>');
// 		  var skycons24 = new Skycons({"color": "white"});
// 		  skycons24.add("simfericon",simfericon);
// 		  skycons24.play();
// 			});
// 		 });
// }
// weather_simfer();

// //////////////////////////////////kiev
// function weather_kiev()
// {
// 	 $(function(kievtemp) {
// 		var apiKey = "7d7fb208bc708b6bd2657291246a83e6";
// 		var url = "https://api.forecast.io/forecast/";
// 		var lati = 49.8492;
// 		var longi = 23.9974;
// 		var data;
// $.getJSON(url + apiKey + "/" + lati + "," + longi + "?units=uk&callback=?", function(data) {
// 		  var kievtemp = data.currently.temperature;
// 		   kievicon = data.currently.icon;
// 			kievtemp=kievtemp.toFixed(0);
// 		  $("#Stage_kievtemp").html(kievtemp + "&deg;C");
// 		sym.$("kievicon"). html('<canvas id="kievicon" width="50" height="50"></canvas>');
// 		  var skycons25 = new Skycons({"color": "white"});
// 		  skycons25.add("kievicon", kievicon);
// 		  skycons25.play();
// 			});
// 		 });
// }
// weather_kiev();
