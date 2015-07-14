var spielerName;
var zufallszahl;
function begruesung(){
	var name=WertHolen();
	document.getElementById("Spielername").innerHTML = name;
}
function starteSpiel() {

	spielerName = document.getElementById('eingabe').value;
 // nameHinzufuegen(spielerName);
 //namensspeicherung cookie ein jahr//
 WertSetzen("spielerName",spielerName,365*24*60*60*1000);
 location.href="Startpart1.html";
}

function tuerUntersuchen() {
	document.getElementById('door').style.display='block';
	zufallszahl = Math.floor(Math.random() * 100);
	console.log(zufallszahl);
}
	
function tippPruefen() {
	var eingabe,
		statusText;

  eingabe = document.getElementById('eingegebeneZahl').value;
  statusText = document.getElementById('status');
  console.log(eingabe);

  if (isNaN(eingabe)) {
    status.innerHTML = 'Fehler bei Eingabe - Nur Zahlen gültig';
    return false;
  }

  if (eingabe == zufallszahl) {
    status.innerHTML = 'Die Eingabe ist richtig!';
  } else if (eingabe > zufallszahl) {
    alert('Die gesuchte Zahl ist kleiner');
  } else if (eingabe < zufallszahl) {
    alert('Die gesuchte Zahl ist größer');
  }

}
   function WertSetzen (Bezeichner, Wert, Verfall) {
      var jetzt = new Date();
      var Auszeit = new Date(jetzt.getTime() + Verfall);
      document.cookie = Bezeichner + "=" + Wert + "; expires=" + Auszeit.toGMTString() + ";";
   }
    function WertHolen () {
 
      var Wert = "";
 
      if (document.cookie) {
        var Wertstart = document.cookie.indexOf("=") + 1;
        var Wertende = document.cookie.indexOf(";");
 
        if (Wertende == -1)
          Wertende = document.cookie.length;
        Wert = document.cookie.substring(Wertstart, Wertende);
      }
        return Wert;
    }
	  
   function wirdnichtausgefuehrt(){
   alert('Hallo ' + spielerName + ' und Herzlich Willkommen beim Text Adventure ');
    var alter =0;
    while(alter <16){
    alter= prompt('Wie alt bist du ?');                        
    console.log(alter);
    }
    alert('Du wachst in einem dunklen Raum auf, dir tut alles weh.')
 var user=prompt('Unternehmmöglichkeiten: Tür suchen/weiter schlafen.')
 {if (user.toLowerCase()==='Tür suchen');
alert ('Du findest eine massive Holztür sie ist durch ein Zahlenschloss gesichert.');}
 {if(user.toLowerCase()==='weiter schlafen')
	 {alert('la li lu nur der Mann im Mond schaut zu ...');
    alert('los weiter oder willst du hier sterben')
	var user=prompt('Unternehmmöglichkeiten: Tür suchen');
if (user==='Tür suchen')
 alert ('Du findest eine massive Holztür sie ist durch ein Zahlenschloss gesichert.');}}
  var zufallszahl = Math.floor(Math.random() * 100);
  var eingabe;
  console.log(zufallszahl);

  while (eingabe != zufallszahl) {
    eingabe = 'a';  // Auf nicht-numerischen Wert setzen
    while (isNaN(eingabe)) {
      eingabe = prompt('Gesucht ist eine Zahl zwischen 0 und 99.');
    }
    if (eingabe == zufallszahl) {
      alert('Die Eingabe ist richtig!');
    } else if (eingabe > zufallszahl) {
      alert('Die gesuchte Zahl ist kleiner.');
    } else if (eingabe < zufallszahl) {
      alert('Die gesuchte Zahl ist größer.');
    }
  }
  alert ('Die Tür ist offen schnell weiter.')
  { alert  ('Du kommst in einen Raum mit 4 schlafenden Wachen, um sie herum leere Bierfässer.');
  { var user=prompt('Unternimmmöglichkeiten: Abstechen oder leise vorbei schleichen.')
  if (user.toLowerCase()==='Abstechen')
alert (spielerName + ' ermeuchelt sie alle im Schlaf und nimmt ihre Waffen.');}}
  {if (user.toLowerCase()==='leise vorbei schleichen')
  alert('Du versuchst dich an ihnen vorbei zu schleichen dabei bist du aber zu ungeschickt eine Wache wacht auf')
  alert('Du musst ihn zum schweigen bringen du tötest ihn')}
  alert('' + spielerName + ' steht vor einer Kreutzung welchen weg willst du gehen')
var Eingabe = window.prompt('Nimmst du den 1., 2., 3. oder 4. Gang:', '');
      switch (Eingabe) {
        case "1":
          text ='Der Gang stürzt ein du stirbst!';
		  
            break;
        case "2":
          text ='Du kommst zur Küche und frisst alles leer!';
            break;
        case "3":
          text ='Du fliegst eine Falltür runter und brichst dir ein Bein !';
            break;
        case "4":
          text ='Du kommst auf den Burg Hof!';
            break;
        default:
          text ='Sie bleiben leider dumm!';
            break;
      }
alert(text);
var user=prompt('Du schleichst weiter durch die Burg, du hast das Gefühl, dass dich was verfolgt. Du hörst ein schmerzhaftes Stöhnen aus dem Keller: nachsehen oder weiter eilen?');
if (user==='nachsehen')
alert('Du schleichst leise die Treppe runter, es ist stockdunkel, du enzündest eine Fackel, was du siehst bringt dich fast um den Verstand.Die Folterkammer - überall liegen verstümmelte Leichen, es stinkt nach verwesenden Körpern');
var user=prompt ('Du hörst das Stöhnen immer noch willst du weiter gehen?');
if (user.toLowerCase()==='nein')
  alert ('Du gehst den Gang weiter - deine Streitaxt erhoben - dein Unmut wird immer größer');
if (user.toLowerCase()==='ja')
  alert ('Du gehst weiter an vermoderten Leichnamen vorbei, tiefer und immer tiefer in den Kerker');

alert('Du kommst an eine kleine Zelle, in der Ecke ein Schatten, du machst dich daran das Schloß zu knacken');
var user =prompt('So ein Scheiß ein riesiges Zahlenschloß! Möchtest du es versuchen?');
if  (user==='Ja')   {
  var zufallszahl = Math.floor(Math.random() * 500);
  var eingabe;
  console.log(zufallszahl);

  while (eingabe != zufallszahl) {
    eingabe = 'a';  // Auf nicht-numerischen Wert setzen
    while (isNaN(eingabe)) {
      eingabe = prompt('Gesucht ist eine Zahl zwischen 0 und 500');
    }
    if (eingabe == zufallszahl) {
      alert('Die Eingabe ist richtig!');
    } else if (eingabe > zufallszahl) {
      alert('Die gesuchte Zahl ist kleiner.');
    } else if (eingabe < zufallszahl) {
      alert('Die gesuchte Zahl ist größer.');
    }
  }
}
alert('Du hast es nach Stunden geschafft das Schloß zu knacken, du näherst dich der dunklen Ecke aus der das Schluchzen kommt');
alert ('Du näherst dich langsam der Ecke, die Gestalt wird immer deutlicher, es ist ein Mädchen von vielleicht 15 Jahren, sie ist leicht verletzt');
var Eingabe = window.prompt('Was willst du sie fragen? / 1 Was machst du hier? / 2 bist du verletzt? / 3 komm wir gehen / 4 wie heißt du?');
      switch (Eingabe) {
        case "1":
          text ='Ich wurde mit meiner Familie gefangen genommen:Schluchz: sie wollten Informationen über die Militär Strategien des Königs.';
            break;
        case "2":
          text ='Mein Bein ist gebrochen :schluchz:und meine Knöchel wund.';
            break;
        case "3":
          text ='Nein nein nein sie werden mich fangen und miiir weh tuen!';
            break;
        case "4":
          text ='Ich heiße Leila,ich wohne in den Östlichen Hügeln!';
            break;
        default:
          text ='Nicht möglich!';
            break;
    }
    alert(text);
alert("... und wenn sie nicht gestorben sind ...");
alert("Vielen Dank, " + spielerName + ", dass Du die Betaversion unseres Textadventures gespielt hast!");
}


var namen = []

function nameHinzufuegen(name) {

  namen.push(name);

  namenAusgeben();
}

function namenAusgeben() {
	var htmlToInsert = '';
	for (var i=0; i < namen.length; i++) {
		htmlToInsert += namen[i] + '<br/>';
	}

	document.getElementById('namensListe').innerHTML = htmlToInsert;
}

function namenSortieren() {
namen.sort();
namenAusgeben();
}
   
