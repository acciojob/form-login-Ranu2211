
function getFormvalue(e) {
    //Write your code here
	e.preventDefault();
	const form = document.getElementById('form1');
	const first = form.elements['fname'].value.trim();
	const last = form.elements['lname'].value.trim();
	alert(`${first} ${last}`);

}
