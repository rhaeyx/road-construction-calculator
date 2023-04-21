const inputs = document.getElementsByTagName('input');
Array.from(inputs).forEach((element) => {
	element.addEventListener('click', clearInput);
});
function clearInput(event) {
	event.srcElement.value = '';
	console.log(event.srcElement);
}

const measure = document.getElementById('measure-selected');
let selectedMeasure = measure.value;
measure.addEventListener('change', updateMeasure);

function updateMeasure() {
	let measure1 = 'meter';
	let measure2 = 'cm';

	if (selectedMeasure == 1) {
		selectedMeasure = 2;
		measure1 = 'feet';
		measure2 = 'inch';
	} else {
		selectedMeasure = 1;
	}

	// get all measure elements
	let measure1s = document.getElementsByClassName('measure-1');
	Array.from(measure1s).forEach((element) => {
		element.textContent = measure1;
	});

	let measure2s = document.getElementsByClassName('measure-2');
	Array.from(measure2s).forEach((element) => {
		element.textContent = measure2;
	});
}

const calculate = document.getElementById('calculate');
calculate.addEventListener('click', solve);

function solve() {
	// values
	let length = 0; // meters
	length += parseInt(document.getElementById('length-1').value);
	length += parseInt(document.getElementById('length-2').value) / 10;

	let width = 0; // meters
	width += parseInt(document.getElementById('width-1').value);
	width += parseInt(document.getElementById('width-2').value) / 10;

	let depth = 0; // meters
	depth += parseInt(document.getElementById('depth-1').value);
	depth += parseInt(document.getElementById('depth-2').value) / 10;

	if (isNaN(length) || isNaN(width) || isNaN(depth)) {
		alert('Please fill every field.');
		return;
	}

	console.log(length + ' ' + width + ' ' + depth);

	let sol1 = document.getElementById('sol-1');
	sol1.innerHTML = 'Total Volume = ' + length + ' x ' + width + ' x ' + depth;

	let totVolume = length * width * depth;

	// convert to meters
	if (selectedMeasure == 2) {
		totVolume /= 35.3147;
	}

	let sol2 = document.getElementById('sol-2');
	sol2.innerHTML = 'Total Volume = ' + totVolume.toFixed(2) + ' m<sup>3</sup>';

	let sol3 = document.getElementById('sol-3');
	sol3.innerHTML = 'Total Quantity = ' + totVolume.toFixed(2) + ' x 2322';

	let totQuantity = totVolume * 2322;
	let tons = totQuantity / 1000;
	let sol4 = document.getElementById('sol-4');
	sol4.innerHTML =
		'Total Quantity = ' +
		totQuantity.toFixed(2) +
		' kgs or ' +
		tons.toFixed(2) +
		' tons';

	document.getElementById('final-ton').innerHTML = tons.toFixed('2') + ' tons';
}

var form = document.getElementById('solver');
function handleForm(event) {
	event.preventDefault();
}
form.addEventListener('submit', handleForm);
