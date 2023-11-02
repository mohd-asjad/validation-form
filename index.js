  // Validation logic
  // check if all required fields are filled and validate email and mobile number formats etc..........

  function validateForm() {

    var first_Name = document.getElementById("first-name").value;
    var last_Name = document.getElementById("last-name").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country-name").value;
    var gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map((input) => input.value).join(", ");
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var correct_way = /^[A-Za-z]+$/;
  
    // logic for first-name and last-name.................................................
  
    // first name shouldn't be empty..........
    if (first_Name == "") {
      document.getElementById("message").innerHTML ="*first name shouldn't be empty";
      document.getElementById("firstName-error").innerHTML = "*";
      return false;
    }
  
    //first name should be greater than 3 and less than 20......
  
    if (first_Name.length < 3 || first_Name.length > 20) {
      document.getElementById("message").innerHTML ="* First name should be greater than 3 and less than 20";
      document.getElementById("firstName-error").innerHTML = "*";
  
      return false;
    }
  
    // first name should accept only alphabetss.........
  
    if (first_Name.match(correct_way)) true;
    else {
      document.getElementById("message").innerHTML ="*Only alphabets allowed in first name";
      document.getElementById("firstName-error").innerHTML = "*";
      return false;
    }
  
    // logic for last name..................................................................
  
    if (last_Name == "") {
      document.getElementById("message").innerHTML ="*Last name shouldn't be empty";
      document.getElementById("lastName-error").innerHTML = "*";
      return false;
    }
  
    //last name should be greater than 3 and less than 20......
  
    if (last_Name.length < 3 || last_Name.length > 20) {
      document.getElementById("message").innerHTML ="*Last name should be greater than 3 and less than 20";
      document.getElementById("lastName-error").innerHTML = "*";
      return false;
    }
  
    // last name should accept only alphabetss......
  
    if (last_Name.match(correct_way)) true;
    else {
      document.getElementById("message").innerHTML ="*Only alphabets allowed in last name";
      document.getElementById("lastName-error").innerHTML = "*";
      return false;
    }
  
    // logic part for dob........
  
    if (dob == "") {
      document.getElementById("message").innerHTML ="*Please select date of birth";
      document.getElementById("dob-error").innerHTML = "*";
      return false;
    }
  
    // logic part for country...........
  
    if (country == "none") {
      document.getElementById("message").innerHTML ="*Please select country";
      document.getElementById("country-error").innerHTML = "*";
      return false;
    }
  
    // logic part for gender..............
  
    if (gender == "") {
      document.getElementById("message").innerHTML ="*Please select gender";
      document.getElementById("gender-error").innerHTML = "*";
      return false;
    }
  
    // logic part for profession.........
  
    if (profession == "") {
      document.getElementById("message").innerHTML ="*Profession shouldn't be empty";
      document.getElementById("profession-error").innerHTML = "*";
      return false;
    }
  
    // Profession should accept only alphabetss......
  
    if (profession.match(correct_way)) true;
    else {
      document.getElementById("message").innerHTML ="*only alphabets allowed in profession";
      document.getElementById("profession-error").innerHTML = "*";
      return false;
    }
  
    // email validation......................
  
    if (email == "")  {
      document.getElementById("message").innerHTML ="*Email shouldn't be empty";
      document.getElementById("email-error").innerHTML = "*";
      return false;
    }
  
    if (email.indexOf("@") <= 0) {
      document.getElementById("message").innerHTML = "*invalid email";
      document.getElementById("email-error").innerHTML = "*";
      return false;
    }
  
    if (
      email.charAt(email.length - 4) != "." &&email.charAt(email.length - 3) != ".") {
      document.getElementById("message").innerHTML = "*invalid '.' position";
      document.getElementById("email-error").innerHTML = "*";
      return false;
    }
  
    // Mobile no validation...............
  
    if (mobile == "") {
      document.getElementById("message").innerHTML = "*Please enter mobile number";
      document.getElementById("mobile-error").innerHTML = "*";
      return false;
    }
  
    if (isNaN(mobile)) {
      document.getElementById("message").innerHTML = "*Enter only numbers";
      document.getElementById("mobile-error").innerHTML = "*";
      return false;
    }
  
    if (mobile.length < 10) {
      document.getElementById("message").innerHTML ="*Mobile no. must be 10 digit";
      document.getElementById("mobile-error").innerHTML = "*";
      return false;
    }
  
    return true; // Return true if the form is valid
  }
  
  // Logic to Get form values and display them in a popup diaplay.................
  
  function displayPopup() {
    
    const first_Name = document.getElementById("first-name").value;
    const last_Name = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country-name").value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')
    ).map((input) => input.value).join(", ");
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
  
    const popupContent = `
          <p><strong>First Name:</strong> ${first_Name}</p>
          <p><strong>Last Name:</strong> ${last_Name}</p>
          <p><strong>Date of Birth:</strong> ${dob}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Profession:</strong> ${profession}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile Number:</strong> ${mobile}</p>
          `;
  
    const popup = window.open("", "Survey Form Data", "width=400, height=400");
    popup.document.write(popupContent);
  }
  
  // Targeting the submit and reset button..............
  
  function openPopup () {   //function to open popup if validateForm() returns true...
    // Form validation
    if (validateForm()) {
      displayPopup();
    }
  }
  
  // function for to reset value from form...............
  function resetForm () {
    document.getElementById("survey-form").reset();
    document.getElementById("message").innerHTML = " "; 
    document.getElementsByTagName("span").innerHTML= " ";
  }
  