let students = [ "maryam" , "malak" , "Reema" ]
students.forEach(logger);

function logger(students){
    console.log(students);
}

let todaysTemp =[46 , 44 , 47 , 43 , 50 , 46];
function hottestDays(temp) {
    return 45 < temp;
}
console.log(todaysTemp.filter(hottestDays));
