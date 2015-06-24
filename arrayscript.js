var namen = [];

function nameHinzufuegen() {

var neuerName = document.getElementById('eingabe').value;
namen.push(neuerName);

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