/* Copyright (c) 2023 Montri Kiatphaophan
 * cards.js v1.0.1 | All rights reserved.
*/

const cards = new Map([ 
		[1,'\u{1F0A1}'],[5,'\u{1F0A2}'],[9,'\u{1F0A3}'],[13,'\u{1F0A4}'],[17,'\u{1F0A5}'],[21,'\u{1F0A6}'],[25,'\u{1F0A7}'],
		[29,'\u{1F0A8}'],[33,'\u{1F0A9}'],[37,'\u{1F0AA}'],[41,'\u{1F0AB}'],[45,'\u{1F0AD}'],[49,'\u{1F0AE}'],

		[2,'\u{1F0B1}'],[6,'\u{1F0B2}'],[10,'\u{1F0B3}'],[14,'\u{1F0B4}'],[18,'\u{1F0B5}'],[22,'\u{1F0B6}'],[26,'\u{1F0B7}'],
		[30,'\u{1F0B8}'],[34,'\u{1F0B9}'],[38,'\u{1F0BA}'],[42,'\u{1F0BB}'],[46,'\u{1F0BD}'],[50,'\u{1F0BE}'],

		[3,'\u{1F0C1}'],[7,'\u{1F0C2}'],[11,'\u{1F0C3}'],[15,'\u{1F0C4}'],[19,'\u{1F0C5}'],[23,'\u{1F0C6}'],[27,'\u{1F0C7}'],
		[31,'\u{1F0C8}'],[35,'\u{1F0C9}'],[39,'\u{1F0CA}'],[43,'\u{1F0CB}'],[47,'\u{1F0CD}'],[51,'\u{1F0CE}'],

		[4,'\u{1F0D1}'],[8,'\u{1F0D2}'],[12,'\u{1F0D3}'],[16,'\u{1F0D4}'],[20,'\u{1F0D5}'],[24,'\u{1F0D6}'],[28,'\u{1F0D7}'],
		[32,'\u{1F0D8}'],[36,'\u{1F0D9}'],[40,'\u{1F0DA}'],[44,'\u{1F0DB}'],[48,'\u{1F0DD}'],[52,'\u{1F0DE}'],[0,''],

]);

const cardsF = new Map([ 
		['\u{1F0A1}',1],['\u{1F0A2}',5],['\u{1F0A3}',9],['\u{1F0A4}',13],['\u{1F0A5}',17],['\u{1F0A6}',21],['\u{1F0A7}',25],
		['\u{1F0A8}',29],['\u{1F0A9}',33],['\u{1F0AA}',37],['\u{1F0AB}',41],['\u{1F0AD}',45],['\u{1F0AE}',49],

		['\u{1F0B1}',2],['\u{1F0B2}',6],['\u{1F0B3}',10],['\u{1F0B4}',14],['\u{1F0B5}',18],['\u{1F0B6}',22],['\u{1F0B7}',26],
		['\u{1F0B8}',30],['\u{1F0B9}',34],['\u{1F0BA}',38],['\u{1F0BB}',42],['\u{1F0BD}',46],['\u{1F0BE}',50],

		['\u{1F0C1}',3],['\u{1F0C2}',7],['\u{1F0C3}',11],['\u{1F0C4}',15],['\u{1F0C5}',19],['\u{1F0C6}',23],['\u{1F0C7}',27],
		['\u{1F0C8}',31],['\u{1F0C9}',35],['\u{1F0CA}',39],['\u{1F0CB}',43],['\u{1F0CD}',47],['\u{1F0CE}',51],

		['\u{1F0D1}',4],['\u{1F0D2}',8],['\u{1F0D3}',12],['\u{1F0D4}',16],['\u{1F0D5}',20],['\u{1F0D6}',24],['\u{1F0D7}',28],
		['\u{1F0D8}',32],['\u{1F0D9}',36],['\u{1F0DA}',40],['\u{1F0DB}',44],['\u{1F0DD}',48],['\u{1F0DE}',52],
]);

const redCard1 = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50];
const redCard2 = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51];

function a500() {
		var aScore = document.getElementById('AScore').innerHTML;
		var aNum = Number(aScore);
		var pot = document.getElementById('pot').innerHTML;
		var potNum = Number(pot);
		var aToPot = potNum + 500;	
		var newScore = aNum - 500;
		document.getElementById('pot').innerHTML = aToPot;
		document.getElementById('AScore').innerHTML = newScore;
	
}

function b500() {
		var bScore = document.getElementById('BScore').innerHTML;
		var bNum = Number(bScore);
		var pot = document.getElementById('pot').innerHTML;
		var potNum = Number(pot);
		var bToPot = potNum + 500;	
		var newScore = bNum - 500;
		document.getElementById('pot').innerHTML = bToPot;
		document.getElementById('BScore').innerHTML = newScore;
	
}

function aWin() {
		var aScore = document.getElementById('AScore').innerHTML;
		var aNum = Number(aScore);
		var pot = document.getElementById('pot').innerHTML;
		var potNum = Number(pot);
		var zeroPot = potNum - potNum;	
		var newScore = aNum + potNum;
		document.getElementById('pot').innerHTML = zeroPot;
		document.getElementById('AScore').innerHTML = newScore;
	
}

function bWin() {
		var bScore = document.getElementById('BScore').innerHTML;
		var bNum = Number(bScore);
		var pot = document.getElementById('pot').innerHTML;
		var potNum = Number(pot);
		var zeroPot = potNum - potNum;	
		var newScore = bNum + potNum;
		document.getElementById('pot').innerHTML = zeroPot;
		document.getElementById('BScore').innerHTML = newScore;
	
}

function start() {
	document.getElementById('z1').innerHTML = '\u{1F0A0}';
	document.getElementById('z1').style.color='blue';
	document.getElementById('z2').innerHTML = '\u{1F0A0}';
	document.getElementById('z2').style.color='blue';
	document.getElementById('z3').innerHTML = '\u{1F0A0}';
	document.getElementById('z3').style.color='blue';
	document.getElementById('z4').innerHTML = '\u{1F0A0}';
	document.getElementById('z4').style.color='blue';
	document.getElementById('z5').innerHTML = '\u{1F0A0}';
	document.getElementById('z5').style.color='blue';

	document.getElementById('c1').innerHTML = '\u{1F0A0}';
	document.getElementById('c1').style.color='blue';


	document.getElementById('c2').innerHTML = '\u{1F0A0}';
	document.getElementById('c2').style.color='blue';

	document.getElementById('c3').innerHTML = cards.get(0);
	document.getElementById('c4').innerHTML = cards.get(0);
	document.getElementById('c5').innerHTML = cards.get(0);


	document.getElementById('c6').innerHTML = '\u{1F0A0}';
	document.getElementById('c6').style.color='blue';

	document.getElementById('c7').innerHTML = '\u{1F0A0}';
	document.getElementById('c7').style.color='blue';

	document.getElementById('c8').innerHTML = cards.get(0);
	document.getElementById('c9').innerHTML = cards.get(0);
	document.getElementById('c10').innerHTML = cards.get(0);


	document.getElementById('a1').innerHTML = cards.get(0);
	document.getElementById('a2').innerHTML = cards.get(0);
	document.getElementById('a3').innerHTML = cards.get(0);
	document.getElementById('a4').innerHTML = cards.get(0);
	document.getElementById('a5').innerHTML = cards.get(0);
	document.getElementById('a6').innerHTML = cards.get(0);
	document.getElementById('a7').innerHTML = cards.get(0);
	document.getElementById('b1').innerHTML = cards.get(0);
	document.getElementById('b2').innerHTML = cards.get(0);
	document.getElementById('b3').innerHTML = cards.get(0);
	document.getElementById('b4').innerHTML = cards.get(0);
	document.getElementById('b5').innerHTML = cards.get(0);
	document.getElementById('b6').innerHTML = cards.get(0);
	document.getElementById('b7').innerHTML = cards.get(0);

}

function hole() { 
	var c1 = Math.floor(Math.random()*52)+1;
	var c2 = Math.floor(Math.random()*52)+1;
	var c6 = Math.floor(Math.random()*52)+1;
	var c7 = Math.floor(Math.random()*52)+1;
	document.getElementById('c1').innerHTML = cards.get(c1);
	if(redCard1.includes(c1)){document.getElementById('c1').style.color='red';}
	else if(redCard2.includes(c1)){document.getElementById('c1').style.color='red';}
	else{document.getElementById('c1').style.color='black';}

	document.getElementById('c2').innerHTML = cards.get(c2);
	if(redCard1.includes(c2)){document.getElementById('c2').style.color='red';}
	else if(redCard2.includes(c2)){document.getElementById('c2').style.color='red';}
	else{document.getElementById('c2').style.color='black';}

	document.getElementById('c6').innerHTML = cards.get(c6);
	if(redCard1.includes(c6)){document.getElementById('c6').style.color='red';}
	else if(redCard2.includes(c6)){document.getElementById('c6').style.color='red';}
	else{document.getElementById('c6').style.color='black';}

	document.getElementById('c7').innerHTML = cards.get(c7);
	if(redCard1.includes(c7)){document.getElementById('c7').style.color='red';}
	else if(redCard2.includes(c7)){document.getElementById('c7').style.color='red';}
	else{document.getElementById('c7').style.color='black';}
	
}

function flop() {
	var z1 = Math.floor(Math.random()*52)+1;
	var z2 = Math.floor(Math.random()*52)+1;
	var z3 = Math.floor(Math.random()*52)+1;

	document.getElementById('z1').innerHTML = cards.get(z1);
	if(redCard1.includes(z1)){document.getElementById('z1').style.color='red';}
	else if(redCard2.includes(z1)){document.getElementById('z1').style.color='red';}
	else{document.getElementById('z1').style.color='black';}

	document.getElementById('z2').innerHTML = cards.get(z2);
	if(redCard1.includes(z2)){document.getElementById('z2').style.color='red';}
	else if(redCard2.includes(z2)){document.getElementById('z2').style.color='red';}
	else{document.getElementById('z2').style.color='black';}

	document.getElementById('z3').innerHTML = cards.get(z3);
	if(redCard1.includes(z3)){document.getElementById('z3').style.color='red';}
	else if(redCard2.includes(z3)){document.getElementById('z3').style.color='red';}
	else{document.getElementById('z3').style.color='black';}

}

function turn() {
	var z4 = Math.floor(Math.random()*52)+1;
	document.getElementById('z4').innerHTML = cards.get(z4);
	if(redCard1.includes(z4)){document.getElementById('z4').style.color='red';}
	else if(redCard2.includes(z4)){document.getElementById('z4').style.color='red';}
	else{document.getElementById('z4').style.color='black';}

}
 
function river() {
	var z5 = Math.floor(Math.random()*52)+1;
	document.getElementById('z5').innerHTML = cards.get(z5);
	if(redCard1.includes(z5)){document.getElementById('z5').style.color='red';}
	else if(redCard2.includes(z5)){document.getElementById('z5').style.color='red';}
	else{document.getElementById('z5').style.color='black';}


}   


function check() {
	var c1a = document.getElementById('c1').innerHTML;
	var c1 = cardsF.get(c1a);
	var c2a = document.getElementById('c2').innerHTML;
	var c2 = cardsF.get(c2a);
	var c6a = document.getElementById('c6').innerHTML;
	var c6 = cardsF.get(c6a);
	var c7a = document.getElementById('c7').innerHTML;
	var c7 = cardsF.get(c7a);
	var z1a = document.getElementById('z1').innerHTML;
	var z1 = cardsF.get(z1a);
	var z2a = document.getElementById('z2').innerHTML;
	var z2 = cardsF.get(z2a);
	var z3a = document.getElementById('z3').innerHTML;
	var z3 = cardsF.get(z3a);
	var z4a = document.getElementById('z4').innerHTML;
	var z4 = cardsF.get(z4a);
	var z5a = document.getElementById('z5').innerHTML;
	var z5 = cardsF.get(z5a);
	var hold0a =[c1, c2, z1, z2, z3, z4, z5];
	var hold0b =[c6, c7, z1, z2, z3, z4, z5];

	const holdA = hold0a.sort(function(a, b){return a - b});
	const holdB = hold0b.sort(function(a, b){return a - b});

	document.getElementById('a1').innerHTML = cards.get(holdA[0]);
	if(redCard1.includes(holdA[0])){document.getElementById('a1').style.color='red';}
	else if(redCard2.includes(holdA[0])){document.getElementById('a1').style.color='red';}
	else{document.getElementById('a1').style.color='black';}

	document.getElementById('a2').innerHTML = cards.get(holdA[1]);
	if(redCard1.includes(holdA[1])){document.getElementById('a2').style.color='red';}
	else if(redCard2.includes(holdA[1])){document.getElementById('a2').style.color='red';}
	else{document.getElementById('a2').style.color='black';}

	document.getElementById('a3').innerHTML = cards.get(holdA[2]);
	if(redCard1.includes(holdA[2])){document.getElementById('a3').style.color='red';}
	else if(redCard2.includes(holdA[2])){document.getElementById('a3').style.color='red';}
	else{document.getElementById('a3').style.color='black';}

	document.getElementById('a4').innerHTML = cards.get(holdA[3]);
	if(redCard1.includes(holdA[3])){document.getElementById('a4').style.color='red';}
	else if(redCard2.includes(holdA[3])){document.getElementById('a4').style.color='red';}
	else{document.getElementById('a4').style.color='black';}

	document.getElementById('a5').innerHTML = cards.get(holdA[4]);
	if(redCard1.includes(holdA[4])){document.getElementById('a5').style.color='red';}
	else if(redCard2.includes(holdA[4])){document.getElementById('a5').style.color='red';}
	else{document.getElementById('a5').style.color='black';}

	document.getElementById('a6').innerHTML = cards.get(holdA[5]);
	if(redCard1.includes(holdA[5])){document.getElementById('a6').style.color='red';}
	else if(redCard2.includes(holdA[5])){document.getElementById('a6').style.color='red';}
	else{document.getElementById('a6').style.color='black';}

	document.getElementById('a7').innerHTML = cards.get(holdA[6]);
	if(redCard1.includes(holdA[6])){document.getElementById('a7').style.color='red';}
	else if(redCard2.includes(holdA[6])){document.getElementById('a7').style.color='red';}
	else{document.getElementById('a7').style.color='black';}

	document.getElementById('b1').innerHTML = cards.get(holdB[0]);
	if(redCard1.includes(holdB[0])){document.getElementById('b1').style.color='red';}
	else if(redCard2.includes(holdB[0])){document.getElementById('b1').style.color='red';}
	else{document.getElementById('b1').style.color='black';}

	document.getElementById('b2').innerHTML = cards.get(holdB[1]);
	if(redCard1.includes(holdB[1])){document.getElementById('b2').style.color='red';}
	else if(redCard2.includes(holdB[1])){document.getElementById('b2').style.color='red';}
	else{document.getElementById('b2').style.color='black';}

	document.getElementById('b3').innerHTML = cards.get(holdB[2]);
	if(redCard1.includes(holdB[2])){document.getElementById('b3').style.color='red';}
	else if(redCard2.includes(holdB[2])){document.getElementById('b3').style.color='red';}
	else{document.getElementById('b3').style.color='black';}

	document.getElementById('b4').innerHTML = cards.get(holdB[3]);
	if(redCard1.includes(holdB[3])){document.getElementById('b4').style.color='red';}
	else if(redCard2.includes(holdB[3])){document.getElementById('b4').style.color='red';}
	else{document.getElementById('b4').style.color='black';}

	document.getElementById('b5').innerHTML = cards.get(holdB[4]);
	if(redCard1.includes(holdB[4])){document.getElementById('b5').style.color='red';}
	else if(redCard2.includes(holdB[4])){document.getElementById('b5').style.color='red';}
	else{document.getElementById('b5').style.color='black';}

	document.getElementById('b6').innerHTML = cards.get(holdB[5]);
	if(redCard1.includes(holdB[5])){document.getElementById('b6').style.color='red';}
	else if(redCard2.includes(holdB[5])){document.getElementById('b6').style.color='red';}
	else{document.getElementById('b6').style.color='black';}

	document.getElementById('b7').innerHTML = cards.get(holdB[6]);
	if(redCard1.includes(holdB[6])){document.getElementById('b7').style.color='red';}
	else if(redCard2.includes(holdB[6])){document.getElementById('b7').style.color='red';}
	else{document.getElementById('b7').style.color='black';}




}

function help() {
	document.getElementById('c1').innerHTML = cards.get(37);
	document.getElementById('c1').style.color='black';
	document.getElementById('c2').innerHTML = cards.get(41);
	document.getElementById('c2').style.color='black';
	document.getElementById('c3').innerHTML = cards.get(45);
	document.getElementById('c3').style.color='black';
	document.getElementById('c4').innerHTML = cards.get(49);
	document.getElementById('c4').style.color='black';
	document.getElementById('c5').innerHTML = cards.get(1);
	document.getElementById('c5').style.color='black';

	document.getElementById('z1').innerHTML = cards.get(1);
	document.getElementById('z1').style.color='black';
	document.getElementById('z2').innerHTML = cards.get(2);
	document.getElementById('z2').style.color='red';
	document.getElementById('z3').innerHTML = cards.get(3);
	document.getElementById('z3').style.color='red';
	document.getElementById('z4').innerHTML = cards.get(4);
	document.getElementById('z4').style.color='black';
	document.getElementById('z5').innerHTML = cards.get(37);
	document.getElementById('z5').style.color='black';

	document.getElementById('c6').innerHTML = cards.get(49);
	document.getElementById('c6').style.color='black';
	document.getElementById('c7').innerHTML = cards.get(50);
	document.getElementById('c7').style.color='red';
	document.getElementById('c8').innerHTML = cards.get(51);
	document.getElementById('c8').style.color='red';
	document.getElementById('c9').innerHTML = cards.get(37);
	document.getElementById('c9').style.color='black';
	document.getElementById('c10').innerHTML = cards.get(38);
	document.getElementById('c10').style.color='red';

	document.getElementById('a1').innerHTML = cards.get(5);
	document.getElementById('a1').style.color='black';
	document.getElementById('a2').innerHTML = cards.get(13);
	document.getElementById('a2').style.color='black';
	document.getElementById('a3').innerHTML = cards.get(25);
	document.getElementById('a3').style.color='black';
	document.getElementById('a4').innerHTML = cards.get(29);
	document.getElementById('a4').style.color='black';
	document.getElementById('a5').innerHTML = cards.get(49);
	document.getElementById('a5').style.color='black';

	document.getElementById('b1').innerHTML = cards.get(1);
	document.getElementById('b1').style.color='black';
	document.getElementById('b2').innerHTML = cards.get(6);
	document.getElementById('b2').style.color='red';
	document.getElementById('b3').innerHTML = cards.get(11);
	document.getElementById('b3').style.color='red';
	document.getElementById('b4').innerHTML = cards.get(16);
	document.getElementById('b4').style.color='black';
	document.getElementById('b5').innerHTML = cards.get(17);
	document.getElementById('b5').style.color='black';}

function reload() {
	document.getElementById('c1').innerHTML = cards.get(0);
	document.getElementById('c2').innerHTML = cards.get(0);
	document.getElementById('c3').innerHTML = cards.get(0);
	document.getElementById('c4').innerHTML = cards.get(0);
	document.getElementById('c5').innerHTML = cards.get(0);

	document.getElementById('z1').innerHTML = cards.get(0);
	document.getElementById('z2').innerHTML = cards.get(0);
	document.getElementById('z3').innerHTML = cards.get(0);
	document.getElementById('z4').innerHTML = cards.get(0);
	document.getElementById('z5').innerHTML = cards.get(0);

	document.getElementById('c6').innerHTML = cards.get(0);
	document.getElementById('c7').innerHTML = cards.get(0);
	document.getElementById('c8').innerHTML = cards.get(0);
	document.getElementById('c9').innerHTML = cards.get(0);
	document.getElementById('c10').innerHTML = cards.get(0);

	document.getElementById('a1').innerHTML = cards.get(0);
	document.getElementById('a2').innerHTML = cards.get(0);
	document.getElementById('a3').innerHTML = cards.get(0);
	document.getElementById('a4').innerHTML = cards.get(0);
	document.getElementById('a5').innerHTML = cards.get(0);
	document.getElementById('a6').innerHTML = cards.get(0);
	document.getElementById('a7').innerHTML = cards.get(0);

	document.getElementById('b1').innerHTML = cards.get(0);
	document.getElementById('b2').innerHTML = cards.get(0);
	document.getElementById('b3').innerHTML = cards.get(0);
	document.getElementById('b4').innerHTML = cards.get(0);
	document.getElementById('b5').innerHTML = cards.get(0);
	document.getElementById('b6').innerHTML = cards.get(0);
	document.getElementById('b7').innerHTML = cards.get(0);

	document.getElementById('AScore').innerHTML = 0;
	document.getElementById('BScore').innerHTML = 0;
	document.getElementById('pot').innerHTML = 0;


}


