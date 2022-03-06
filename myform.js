const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (e) => {e.preventDefault();checkInputs();});

function checkInputs(){
	//get the various from inputs
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const mobileValue = mobile.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	

	if(firstnameValue === ''){
		//show error
		//add error class
		setErrorFor(firstname, 'Firstname cannot be blank');
	} else {
		//add success class
		setSuccessFor(firstname);
	}

	if(lastnameValue === ''){
		//show error
		//add error class
		setErrorFor(lastname, 'Lastname cannot be blank');
	} else {
		//add success class
		setSuccessFor(lastname);
	}

	if (emailValue === ''){
		//show error
		//add error class
		setErrorFor(email, 'Email cannot be blank');
	} else if(!isEmail(emailValue)){
		//show error
		//add error class
		setErrorFor(email, 'Email is not valid');
	} else {
		//add success class
		setSuccessFor(email);
	}

	if (mobileValue === ''){
		//show error
		//add error class
		setErrorFor(mobile, 'Mobile cannot be blank');
	} else if (!isInt(mobileValue)){
		//show error
		//add error class
		setErrorFor(mobile, 'Mobile must be number');
	} else {
		//add success class
		setSuccessFor(mobile);
	}

	if (passwordValue === ''){
		//show error
		//add error class
		setErrorFor(password, 'Password cannot be blank');
	} else if (!isValidate(passwordValue)){
		//show error
		//add error class
		setErrorFor(password, 'Password must at least 6 charactor, ONE upppercase, ONE lowercase, ONE special character, numbers and no space');

	} else {
		//add success class
		setSuccessFor(password);
	}

 	if (password2Value === ''){
 		//show error
		//add error class
		setErrorFor(password2, 'Password cannot be blank');
	} else if (passwordValue !== password2Value){
		//show error
		//add error class
		setErrorFor(password2, 'Password does not match');

	} else {
		//add success class
		setSuccessFor(password2);
	}

	if(genderValue === ''){
		//show error
		//add error class
		setErrorFor(sex, 'Cannot be blank');
	} else {
		//add success class
		setSuccessFor(sex);
	}

}

function setErrorFor(input, message){
	const formControl = input.parentElement; // .form-control
	const small = formControl.querySelector('small');

	// add error class
	formControl.className = 'form-control error';

	// add error message inside small
	small.innerText = message;
}

function setSuccessFor(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email){
	return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isInt(mobile){
	var x;
	return isNaN(mobile) ? !1 : (x = parseFloat(mobile), (0 | x) === x);
}


function isValidate(password){
	const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  	return re.test(password);
}

function toggler(e) {
  if( e.innerHTML == 'Show' ) {
      e.innerHTML = 'Hide'
      document.getElementById('password').type="text";
  } else {
      e.innerHTML = 'Show'
      document.getElementById('password').type="password";
  }
}






