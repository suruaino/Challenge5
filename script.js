//funtion declaration
function formValidation() {
    // variable declarations
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // To validate first name
    if (firstName === "") {
        document.getElementById("firstnamelb").style.visibility = "visible";
  
      return false;
    } else {
        document.getElementById("firstnamelb").style.visibility = "hidden";
    }
  
    // To validate last name
    if (lastName === "") {
        document.getElementById("lastnamelb").style.visibility = "visible";

      return false;
    } else {
        document.getElementById("lastnamelb").style.visibility = "hidden";
    }
  
    // To validate email and specify email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === ""){
        alert("Email field can not be empty");
      
    } else if (!emailRegex.test(email)) {
        document.getElementById("emaillb").style.visibility = "visible";
       
    } else{
        document.getElementById("emaillb").style.visibility = "hidden";
        
    }
  
    // To validate password
    if (password === "") {
      document.getElementById("passwordlb").style.visibility = "visible";
      return false;
    } else{
        document.getElementById("passwordlb").style.visibility = "hidden";
    }
  
    if (password.length < 8) {
      alert("Password should be at least 8 characters long");
      return false;
    }
  
    // when all fields are valid
    return true;
  }
  