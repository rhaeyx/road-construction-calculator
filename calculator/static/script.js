const activeCalc = document.getElementById('active-calc');

activeCalc.addEventListener('change', () => {
	window.location.href = '/' + activeCalc.value;
});
console.log(activeCalc);
console.log(activeCalc.value);

var form = document.getElementById('myForm');
function handleForm(event) {
	event.preventDefault();
}
form.addEventListener('submit', handleForm);
