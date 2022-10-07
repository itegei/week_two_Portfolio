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
        return list;
    }
    else if (document.myForm.month.value == "" || isNaN(document.myForm.month.value) || 
    document.myForm.month.value.length !=2 || document.myForm.month.value >12 || document.myForm.month.value <=0) {
        alert ("Please provide a valid month of birth! between 01 and 12");
        document.myForm.month.focus();
        return list;

    }
    else if (document.myForm.date.value == "" || isNaN(document.myForm.date.value) || 
    document.myForm.date.value.length !=2 || document.myForm.date.value >31 || document.myForm.month.value <=0) {
        alert ("Please provide a valid date of birth that you were born");
        document.myForm.day.focus();
        return list;
    
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
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = (((CC/4) -2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7
    console.log(d);
    return(Math.floor(d));
}
function getGender(){
    var genders = document.getElementsByName("gender");
    if (genders[0].checked == true){
        var gender = "male";
    }
    else if (genders[1].checked == true){
        var gender = "female";
    }
    else {
        return false;
    }
    switch(gender){
        case "male":
            if (dayValue == 1){alert("You were born on " +dayWeekNames[0] + " and your akan name is " +maleAkanNames[0]+"!");}
            else if (dayValue == 2){alert("You were born on " +dayWeekNames[1] + " and your akan name is " +maleAkanNames[1]+"!");}
            else if (dayValue == 3){alert("You were born on " +dayWeekNames[2] + " and your akan name is " +maleAkanNames[2]+"!");}
            else if (dayValue == 4){alert("You were born on " +dayWeekNames[3] + " and your akan name is " +maleAkanNames[3]+"!");}
            else if (dayValue == 5){alert("You were born on " +dayWeekNames[4] + " and your akan name is " +maleAkanNames[4]+"!");}
            else if (dayValue == 6){alert("You were born on " +dayWeekNames[5] + " and your akan name is " +maleAkanNames[5]+"!");}
            else if (dayValue == 0){alert("You were born on " +dayWeekNames[6] + " and your akan name is " +maleAkanNames[6]+"!");}
        break;
        case "female":
            if (dayValue == 1){alert("You were born on " +dayWeekNames[0] + " and your akan name is " +femaleAkanNames[0]+"!");}
            else if (dayValue == 2){alert("You were born on " +dayWeekNames[1] + " and your akan name is " +femaleAkanNames[1]+"!");}
            else if (dayValue == 3){alert("You were born on " +dayWeekNames[2] + " and your akan name is " +femaleAkanNames[2]+"!");}
            else if (dayValue == 4){alert("You were born on " +dayWeekNames[3] + " and your akan name is " +femaleAkanNames[3]+"!");}
            else if (dayValue == 5){alert("You were born on " +dayWeekNames[4] + " and your akan name is " +femaleAkanNames[4]+"!");}
            else if (dayValue == 6){alert("You were born on " +dayWeekNames[5] + " and your akan name is " +femaleAkanNames[5]+"!");}
            else if (dayValue == 0){alert("You were born on " +dayWeekNames[6] + " and your akan name is " +femaleAkanNames[6]+"!");}
        break
        default:
            
    }
}
function findName(){
    dayValue = calculateDayValue();
    getGender();

    // var outputElement = document.getElementById("output");
    // outputElement.innerHTML = "This is some"
    // console.log(outputElement.innerHTML);
}