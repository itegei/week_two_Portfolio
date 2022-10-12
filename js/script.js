function akanNames() {
  //OUR WORKING LISTS
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // WE DECLARE AND INITIALISE AN ARRAY WITH THE DAYS OF THE WEEK STARTING FROM SUNDAY TO MONDAY
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //ARRAY OF FEMALE AKAN NAMES
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; //ARRAY OF MALE AKAN NAMES

  /*USER PROMPTS*/
  var dateInput = prompt("Enter date of birth: (YYYY-MM-DD)");

  /*DATE MANIPULATION VARIABLES*/
  var birthDate = new Date(dateInput); //uses the variable dateinput from the user prompt to create a calender date
  var sikuKamili = birthDate.getDay();
  var dayNumber = birthDate.getDate();
  var birthMonth = birthDate.getMonth(); // Picks the month from the date object
  var birthYear = birthDate.getFullYear(); //Picks the year from the date object

  /*USING THE DATES TO ACCESS THE NAME LISTS*/
  var genderFemale = femaleNames[sikuKamili];
  var genderMale = maleNames[sikuKamili];

  //console.log(sikuKamili, birthMonth, birthYear);

  if (dateInput.length === 10 && sikuKamili >= 0 && sikuKamili <= 7 && (dayNumber >= 01 && dayNumber <= 29) && (birthMonth >= 0 && birthMonth <= 11) && birthYear >= 1900 && birthYear <= 2100 ) {
    var jinsia = prompt("Enter the gender: (M/F)").toLowerCase(); //takes the user input and converts it to upper case
    if (jinsia === "m" || jinsia === "f") {
      if (jinsia === "m") {
        document.getElementById("myFeedback").innerHTML = "Your Akan Male Name is " +genderMale+ ". You were born on " +birthDate.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
        // alert("Your Akan Name is " +genderMale);
      } else {
        document.getElementById("myFeedback").innerHTML = "Your Akan Female Name is " +genderFemale+ ". You were born on " +birthDate.toDateString();
        // alert("Your Akan Name is " +genderFemale);
      }
    } else {
      alert("Sema kimeumana");
    }
  } 
  else {
    alert("Wrong date format, please reenter as YYYY-MM-DD. i.e 2022-10-30");
  }
}
