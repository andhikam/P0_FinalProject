var beruntun = [];
var countM = 0;
var countK = 0;
var countS = 0;
var countB = 0;

function askName() {
	let username = prompt(
		'Before you go further, please let the World know your name, the choosen one!'
	);
	if (username !== null) {
		document.getElementById(
			'userpara'
		).innerHTML = `Ok ${username}, first, you must now this rules <br> Focus on Arrow Sign, <br>the flow means it will win from the others, <br>----------- for example ----------- <br> <b>Gun</b> will win againts "Rock, Scissors, Snake, Human, Tree and Wolf", <br> But it will lose from "Sponge, Paper, Air, Water, Dragon, Devil and Lightning". <br> (Dont Ask Me Why) `;
		document.getElementById('rules').style.display = 'block';
	} else {
		document.getElementById('userpara').innerHTML =
			'I know it! you click cancel, you are not the choosen one! <br> if you want continue and see the rules, click refresh and fill in your trully name';
	}
	localStorage.setItem('username', username);
	return username;
}

document.getElementById('titlePlay').innerText = `${localStorage.getItem(
	'username'
)}, It's All About Winstreak!`;

function gantiIni() {
	let kata = document.getElementById('changeThis');
	kata.innerText = 'BERUBAH';
}

function klik(type) {
	// console.log(type);
	if (type === 'batu') {
		var comp = Math.floor(Math.random() * 3 + 1);
		if (comp === 1) {
			document.getElementById('arena').innerHTML =
				'<img class="computer" src="./img/batuKebalik.png"/>';
			document.getElementById('status').innerHTML =
				'SERI<br>Kamu Batu<br>Lawan Batu';
		} else if (comp === 2) {
			document.getElementById('arena').innerHTML =
				'<img class="computer" src="./img/guntingKebalik.png"/>';
			document.getElementById('status').innerHTML =
				'MENANG<br>Kamu Batu<br>Lawan Gunting';
		} else {
			document.getElementById('arena').innerHTML =
				'<img class="computer" src="./img/kertasKebalik.png"/>';
			document.getElementById('status').innerHTML =
				'KALAH<br>Kamu Batu<br>Lawan Kertas';
		}
		document.getElementById('arena').innerHTML +=
			'<img class="pilihan" src="./img/batu.png"/>';
	}

	if (type === 'gunting') {
		var comp = Math.floor(Math.random() * 3 + 1);
		if (comp === 1) {
			document.getElementById('arena').innerHTML =
				'<img class="computer" src="./img/batuKebalik.png"/>';
			document.getElementById('status').innerHTML =
				'KALAH<br>Kamu Gunting<br>Lawan Batu';
		} else if (comp === 2) {
			document.getElementById('arena').innerHTML =
				'<img class="computer" src="./img/guntingKebalik.png"/>';
			document.getElementById('status').innerHTML =
				'SERI<br>Kamu Gunting<br>Lawan Gunting';
		} else {
			document.getElementById('arena').innerHTML =
				'<img class="computer" src="./img/kertasKebalik.png"/>';
			document.getElementById('status').innerHTML =
				'MENANG<br>Kamu Gunting<br>Lawan Kertas';
		}
		document.getElementById('arena').innerHTML +=
			'<img class="pilihan" src="./img/gunting.png"/>';
	}

	if (type === 'kertas') {
		var comp = Math.floor(Math.random() * 3 + 1);
		if (comp === 1) {
			document.getElementById('arena').innerHTML =
				'<img class="computer" src="./img/batuKebalik.png"/>';
			document.getElementById('status').innerHTML =
				'MENANG<br>Kamu Kertas<br>Lawan Batu';
		} else if (comp === 2) {
			document.getElementById('arena').innerHTML =
				'<img class="computer" src="./img/guntingKebalik.png"/>';
			document.getElementById('status').innerHTML =
				'KALAH<br>Kamu Kertas<br>Lawan Gunting';
		} else {
			document.getElementById('arena').innerHTML =
				'<img class="computer" src="./img/kertasKebalik.png"/>';
			document.getElementById('status').innerHTML =
				'SERI<br>Kamu Kertas<br>Lawan Kertas';
		}
		document.getElementById('arena').innerHTML +=
			'<img class="pilihan" src="./img/kertas.png"/>';
	}

	let status = document.getElementById('status').innerText[0];

	if (status === 'M') {
		countM++;
		countB++;
		document.getElementById('totalMenang').innerHTML = `Menang = ${countM}`;
	}

	if (status === 'K') {
		countK++;
		countB = 0;
		document.getElementById('totalKalah').innerHTML = `Kalah = ${countK}`;
	}

	if (status === 'S') {
		countS++;
		countB = 0;
		document.getElementById('totalSeri').innerHTML = `Seri = ${countS}`;
	}

	document.getElementById('totalWinstreak').innerHTML = `Winstreak = ${countB}`;
}

function buttonRefresh() {
	document
		.getElementById('buttonRefresh2')
		.addEventListener('click', function () {
			countS = 0;
			countM = 0;
			countK = 0;
			countB = 0;
			document.getElementById('totalMenang').innerHTML = `Menang = ${countM}`;
			document.getElementById('totalKalah').innerHTML = `Kalah = ${countK}`;
			document.getElementById('totalSeri').innerHTML = `Seri = ${countS}`;
			document.getElementById(
				'totalWinstreak'
			).innerHTML = `Winstreak = ${countB}`;
			countS = 0;
		});
}

window.addEventListener('load', function () {
	buttonRefresh();
});
