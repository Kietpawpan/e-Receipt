/* Copyright (c) 2023 Montri Kiatphaophan
 * cards.js v1.0.0 | All rights reserved.
*/

const cards = new Map([ 
		['1','\u{1F0A1}'],['2','\u{1F0A2}'],['3','\u{1F0A3}'],['4','\u{1F0A4}'],['5','\u{1F0A5}'],['6','\u{1F0A6}'],['7','\u{1F0A7}'],
		['8','\u{1F0A8}'],['9','\u{1F0A9}'],['10','\u{1F0AA}'],['11','\u{1F0AB}'],['12','\u{1F0AD}'],['13','\u{1F0AE}'],

		['14','\u{1F0B1}'],['15','\u{1F0B2}'],['16','\u{1F0B3}'],['17','\u{1F0B4}'],['18','\u{1F0B5}'],['19','\u{1F0B6}'],['20','\u{1F0B7}'],
		['21','\u{1F0B8}'],['22','\u{1F0B9}'],['23','\u{1F0BA}'],['24','\u{1F0BB}'],['25','\u{1F0BD}'],['26','\u{1F0BE}'],

		['27','\u{1F0C1}'],['28','\u{1F0C2}'],['29','\u{1F0C3}'],['30','\u{1F0C4}'],['31','\u{1F0C5}'],['32','\u{1F0C6}'],['33','\u{1F0C7}'],
		['34','\u{1F0C8}'],['35','\u{1F0C9}'],['36','\u{1F0CA}'],['37','\u{1F0CB}'],['38','\u{1F0CD}'],['39','\u{1F0CE}'],

		['40','\u{1F0C1}'],['41','\u{1F0C2}'],['42','\u{1F0C3}'],['43','\u{1F0C4}'],['44','\u{1F0C5}'],['45','\u{1F0C6}'],['46','\u{1F0C7}'],
		['47','\u{1F0C8}'],['48','\u{1F0C9}'],['49','\u{1F0CA}'],['50','\u{1F0CB}'],['51','\u{1F0CD}'],['52','\u{1F0CE}'],

]);

function start() {
	var z1 = Math.floor(Math.random()*52)+1;
	var z1s = z1.toString();
	var z2 = Math.floor(Math.random()*52)+1;
	var z2s = z2.toString();
	var z3 = Math.floor(Math.random()*52)+1;
	var z3s = z3.toString();
	var z4 = Math.floor(Math.random()*52)+1;
	var z4s = z4.toString();
	var z5 = Math.floor(Math.random()*52)+1;
	var z5s = z5.toString();
	document.getElementById('z1').innerHTML = cards.get(z1s);
	document.getElementById('z2').innerHTML = cards.get(z2s);
	document.getElementById('z3').innerHTML = cards.get(z3s);
	document.getElementById('z4').innerHTML = '\u{1F0A0}';
	document.getElementById('z5').innerHTML = '\u{1F0A0}';
	document.getElementById('c1').innerHTML = '\u{1F0A0}';
	document.getElementById('c2').innerHTML = '\u{1F0A0}';
	document.getElementById('c3').innerHTML = '\u{1F0A0}';
	document.getElementById('c4').innerHTML = '\u{1F0A0}';
	document.getElementById('c5').innerHTML = '\u{1F0A0}';
	document.getElementById('c6').innerHTML = '\u{1F0A0}';
	document.getElementById('c7').innerHTML = '\u{1F0A0}';
	document.getElementById('c8').innerHTML = '\u{1F0A0}';
	document.getElementById('c9').innerHTML = '\u{1F0A0}';
	document.getElementById('c10').innerHTML = '\u{1F0A0}';
}

function turn() {
	var z4 = Math.floor(Math.random()*52)+1;
	var z4s = z4.toString();
	document.getElementById('z4').innerHTML = cards.get(z4s);

}
 
function river() {
	var z5 = Math.floor(Math.random()*52)+1;
	var z5s = z5.toString();
	document.getElementById('z5').innerHTML = cards.get(z5s);

}   
function aPlay1() {
 
	var c1 = Math.floor(Math.random()*52)+1;
	var c1s = c1.toString();
	var c2 = Math.floor(Math.random()*52)+1;
	var c2s = c2.toString();
	document.getElementById('c1').innerHTML = cards.get(c1s);
	document.getElementById('c2').innerHTML = cards.get(c2s);
}

function aPlay3() {
	var c3 = Math.floor(Math.random()*52)+1;
	var c3s = c3.toString();
	document.getElementById('c3').innerHTML = cards.get(c3s);
}

function aPlay4() {
	var c4 = Math.floor(Math.random()*52)+1;
	var c4s = c4.toString();
	document.getElementById('c4').innerHTML = cards.get(c4s);
}

function aPlay5() {
	var c5 = Math.floor(Math.random()*52)+1;
	var c5s = c5.toString();
	document.getElementById('c5').innerHTML = cards.get(c5s);
}


function bPlay1() {
	var c6 = Math.floor(Math.random()*52)+1;
	var c6s = c6.toString();
	var c7 = Math.floor(Math.random()*52)+1;
	var c7s = c7.toString();
	document.getElementById('c6').innerHTML = cards.get(c6s);
	document.getElementById('c7').innerHTML = cards.get(c7s);
}

function bPlay3() {
	var c8 = Math.floor(Math.random()*52)+1;
	var c8s = c8.toString();
	document.getElementById('c8').innerHTML = cards.get(c8s);
}

function bPlay4() {
	var c9 = Math.floor(Math.random()*52)+1;
	var c9s = c9.toString();
	document.getElementById('c9').innerHTML = cards.get(c9s);
}

function bPlay5() {
	var c10 = Math.floor(Math.random()*52)+1;
	var c10s = c10.toString();
	document.getElementById('c10').innerHTML =cards.get(c10s);
}