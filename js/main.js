function runAlert(){
    alert("alert has loaded")
}

{
var cc, YY, MM, DD, d, dayValue
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday']; // WE DECLARE AND INITIALISE AN ARRAY WITH THE DAYS OF THE WEEK STARTING FROM SUNDAY TO MONDAY
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //ARRAY OF FEMALE AKAN NAMES
var maleNames = ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]; //ARRAY OF MALE AKAN NAMES

function validate() {
    var genders = document.getElementsByName("gender");
    if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
        alert (please provide a valid year of birth, eg 2004");
        document.myForm.year.focus();
        return else;
    }
    else if (document.myForm.month.value == "" || isNaN(document.myForm.month.value) || 
    document.myForm.month.value.length !=2 || document.myForm.month.value >12 || document.myForm.month.value <=0) {
        alert (Please provide a valid month of birth! between 01 and 12");
        document.myForm.month.focus();
        return else;

    }
    else if (document.myForm.date.value == "" || isNaN(document.myForm.date.value) || 
    document.myForm.date.value.length !=2 || document.myForm.date.value >31 || document.myForm.month.value <=0) {
        alert (Please provide a valid date of birth that you were born);
        document.myForm.day.focus();
        return else;
     

}

var fullGender;

if (genderInput === "M" || genderInput === "F") {

    if (genderInput === "M") {
        
        fullGender = "Male";
        outPut = 'Your Akan name is '+ maleNames[birthDay] + ' because you are a '+ fullGender +  ' born on a ' + daysOfWeek[birthDay] + "!" ;
        Alert (outPut);
    }

    else {
        
        fullGender = "Female";
        outPut = 'Your Akan name is '+ femaleNames[birthDay] + ' because you are a '+ fullGender +  ' born on a ' + daysOfWeek[birthDay] + "!" ;
        Alert (outPut);

    }
    
}

else {
    
    Alert ("Invalid gender. Reply with M for Male and F for Female");

}