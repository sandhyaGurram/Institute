// function registration() {
//     let name=document.getElementById("name").value;
//     let email=document.getElementById("email").value;
//     alert(name+" & "+ email);

// }

function validate() {
    let name = document.getElementById("name").value;
    const nameExp=/^[a-zA-Z]+$/;
    let email = document.getElementById("email").value;
    let nameStatus = false;
    let emailStatus = false;
    // ------------------name validation-----------------------------
    if (name === "") {
        document.getElementById("nameNote").innerHTML = "Name can't be empty";
    }
    else {
        if(name.match(nameExp)){
            document.getElementById("nameNote").innerHTML = "";
            nameStatus = true;
        }
        else{
            document.getElementById("nameNote").innerHTML = "Enter only characters";
        }
    }
    // ------------------email validation---------------------------

    if (email === "") {
        document.getElementById("emailNote").innerHTML = "email can't be empty";
    }
    else {
        document.getElementById("emailNote").innerHTML = "";
        emailStatus = true;
    }


    // -------------------form validation--------------------------
    if (nameStatus === true && emailStatus === true) {
        return true;
    }
    else {
        return false;
    }
}

// ------------------------------demo validation--------------------------------------
function demovalidate() {
    let name = document.getElementById("name").value;
    const alphaExp = /^[a-zA-Z]+$/;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    const numExp=/^[0-9]+$/;
    let ns = false;
    let es = false;
    let ps = false;



    if (name === "") {
        document.getElementById("nn").innerHTML = "name enter";
    }
    else {
        if (name.match(alphaExp)) {
            document.getElementById("nn").innerHTML = "";
            ns = true;
        }
        else{
            document.getElementById("nn").innerHTML = "Enter only characters";
        }

    }

    if (email === "") {
        document.getElementById("en").innerHTML = "please enter";
    }
    else {
        document.getElementById("en").innerHTML = "";
        es = true;
    }

    if (phone === "") {
        document.getElementById("pn").innerHTML = "please enter";
    }
    else {
        if (phone.match(numExp)){
            if(phone.length===10){
                document.getElementById("pn").innerHTML = "";
            ps = true;
            }
            else{
                document.getElementById("pn").innerHTML = "Enter 10 digits only";
            }
        }
        else{
            document.getElementById("pn").innerHTML = "Eneter only digits";
        }
    }


    if (ns === true && es === true && ps === true) {
        return true;
    }
    else {
        return false
    }


}
// ------------------------------demo validation end--------------------------------------

function jobdemovalidate() {
    let name = document.getElementById("name1").value;
    const alphaExp = /^[a-zA-Z]+$/;
    let email = document.getElementById("email1").value;
    const emailExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phone = document.getElementById("phone1").value;
    const numExp=/^[0-9]+$/;
    let names = false;
    let emails = false;
    let phones = false;



    if (name === "") {
        document.getElementById("namejob").innerHTML = "name enter";
    }
    else {
        if (name.match(alphaExp)) {
            document.getElementById("namejob").innerHTML = "";
            names = true;
        }
        else{
            document.getElementById("namejob").innerHTML = "Enter only characters";
        }

    }

    if (email === "") {
        document.getElementById("emailjob").innerHTML = "please enter";
    }
    else {
        if(email.match(emailExp)){
            document.getElementById("emailjob").innerHTML = "";
            emails = true;
        }
        else{
            document.getElementById("emailjob").innerHTML = "Invalid email Ex: abcd@gmail.com";
        }
        
    }

    if (phone === "") {
        document.getElementById("phonejob").innerHTML = "please enter";
    }
    else {
        if (phone.match(numExp)){
            if(phone.length===10){
                document.getElementById("phonejob").innerHTML = "";
                phones = true;
            }
            else{
                document.getElementById("phonejob").innerHTML = "Enter 10 digits only";
            }
        }
        else{
            document.getElementById("phonejob").innerHTML = "Eneter only digits";
        }
    }


    if (names === true && emails === true && phones === true) {
        return true;
    }
    else {
        return false
    }


}

// ==================================book demo class validation==============================
function bookdemo(){
    let name2=document.getElementById("name2").value;
    const name2Exp=/^[a-zA-Z]+$/;
    let name2Status=false;
    if (name2===""){
        document.getElementById("n2").innerHTML="Please enter";
    }
    else{
        document.getElementById("n2").innerHTML="";
        name2Status=true;
    }
    if(name2Status===true){
        return true;
    }
}