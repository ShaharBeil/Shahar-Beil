//Validation for user registration page
function RegVal() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let pass2 = document.getElementById("password2").value;

    if (name.length < 3) {
        alert("Name is too short");
        return false;
    }
    if (name.length > 20) {
        alert("Name is too long");
        return false;
    }
    if (!(name.match(/^[A-Za-z]+$/))){
        alert("Please use only english letters");
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Email address is not valid");
        return false;
    }
    if (email == "") {
        alert("Email address missing");
        return false;
    }
    if (pass.length < 8) {
        alert("Password must have at least 8 characters");
        return false;
    }
    if (pass!=pass2){
        alert("Passwords are not the same, please pay attention");
        return false;
    }
    if (!pass.match(/^[a-zA-Z0-9]*$/)) {
        alert("Password can only contain English letters and numbers");
        return false;
    }

    alert("Successgful user registration");
    console.log("success");
    return true;
}
//test purposes
function test(){
    alert("Hello123");
}