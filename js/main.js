var CC, YY, MM, DD, d, dayValue;
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday']; // WE DECLARE AND INITIALISE AN ARRAY WITH THE DAYS OF THE WEEK STARTING FROM SUNDAY TO MONDAY
var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //ARRAY OF FEMALE AKAN NAMES
var maleAkanNames = ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]; //ARRAY OF MALE AKAN NAMES

function validate() {
    var genders = document.getElementsByName("gender");
    if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || 
    document.myForm.year.value <=1900) {
        alert ("please provide a valid year of birth, eg 2004");
        document.myForm.year.focus();
        return else;
    }
    else if (document.myForm.month.value == "" || isNaN(document.myForm.month.value) || 
    document.myForm.month.value.length !=2 || document.myForm.month.value >12 || document.myForm.month.value <=0) {
        alert ("Please provide a valid month of birth! between 01 and 12");
        document.myForm.month.focus();
        return else;

    }
    else if (document.myForm.date.value == "" || isNaN(document.myForm.date.value) || 
    document.myForm.date.value.length !=2 || document.myForm.date.value >31 || document.myForm.month.value <=0) {
        alert (Please provide a valid date of birth that you were born);
        document.myForm.day.focus();
        return else;
    
    }

    else if (genders[0].checked == false && genders[1].checked == false) {
    alert ("You must select male or female");
    return false

    } 
    else {
    return true;
    }
}
function calculateDayValue(){
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value;
    DD = parseInt(document.getElementById("date").value;
    d = (((CC/4) -2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7
    console.log(d);
    return(Math.floor(d));
}