function validateForm() {

var firstName = document.getElementById("fName").value;
var lastName = document.getElementById("lName").value;
var city = document.getElementById("city").value;
var zipCode = document.getElementById("zip").value;
var address = document.getElementById("address").value;
var area = document.getElementById("areaCode").value;
var phone = document.getElementById("phoneNumber").value;
var email1 = document.getElementById("email1").value;


    if (document.getElementById("fName").value == "First Name") {
        alert("Please enter your first name");
        return false;
    }
    
    if (!firstName.match(/^[a-zA-Z]+$/)) 
    {
        alert("Please use only letters A - Z for first name");
        return false;
    }

    if (document.getElementById("lName").value == "Last Name") {
        alert("Please enter your last name");
        return false;
    }
    if (!lastName.match(/^[a-zA-Z]+$/)) 
    {
        alert("Please use only letters A - Z for last name");
        return false;
    }

    if (document.getElementById("address").value === "") {
        alert("Please enter your address");
        return false;
    }
    if (!address.match(/^[a-z0-9]+$/i)) {
        alert("Please use only letters and numbers in address");
        return false;
    }

    if (document.getElementById("city").value === "") {
        alert("Please enter your city");
        return false;
    }
    if (!city.match(/^[a-zA-Z]+$/)) 
    {
        alert("Please use only letters A - Z for city");
        return false;
    }
    if (document.getElementById("state").value == "--Select--") {
        alert("Please select your state");
        return false;
    }
    if (document.getElementById("zip").value === "") {
        alert("Please enter your zip code");
        return false;
    }
    if (isNaN(document.getElementById("zip").value)) {
        alert("Please enter only numbers for Zip Code");
        return false;
    }
    if (!zipCode.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/))
    {
        alert("Please enter a valid 5 digit US zip code.");
        return false;
    }

    if (document.getElementById("areaCode").value === "") {
        alert("Please enter your area code");
        return false;
    }
    if (!area.match(/(^\d{3}$)|(^\d{3}-\d{2}$)/))
    {
        alert("Please enter a valid 3 digit area code.");
        return false;
    }
    if (document.getElementById("phoneNumber").value === "") {
        alert("Please enter your phone number");
        return false;
    }
    if (!phone.match(/(^\d{7}$)|(^\d{7}-\d{6}$)/))
    {
        alert("Please enter a valid 7 digit phone number.");
        return false;
    }
    if (document.getElementById("email1").value === "") {
        alert("Please enter your e-mail address");
        return false;
    }
    if (!email1.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) 
    {
        alert("You have entered an invalid e-mail address");
        return false;
    }
    if (document.getElementById("email2").value === "") {
        alert("Please confirm your email address");
        return false;
    }

    if (!email1.match(document.getElementById("email2").value)) {
        alert("Confermation email does not match");
        return false;
    }
    if (document.forms["myForm"]["mealPref"].value == "") {
        alert("Please choose a meal preference");
        return false;
    }

    if (document.forms["myForm"]["contMeth"].value === "") {
        alert("Please choose at least two contact methods");
        return false;
    }
	 
}
function onBlur(el) {
    if (el.value === '') {
        el.value = el.defaultValue;
    }
}
function onFocus(el) {
    if (el.value == el.defaultValue) {
        el.value = '';
    }
}
