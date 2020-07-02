let students = [ "maryam" , "malak" , "Reema" ]
students.forEach(logger);

function logger(students){
    console.log(students);
}

let temperature =[46 , 44 , 47 , 43 , 50 , 46];
function hottestDays(temp) {
    return 45 < temp;
}
console.log(temperature.filter(hottestDays));

let books = [
    {
        name: "book1",
        ID:1,
    },

    {
        name: "book2",
        ID:2,
    },
    {
        name: "book3",
        ID:3,
    },
    {
        name: "book4",
        ID:4,
    },
];

function getBookById(){
let holder = false;
let bookID = prompt("إدخل رقم الكتاب")
    for (let i = 0; i< books.length; i++){
        if (books[i].ID == bookID) {
            // return books[i];
            console.log("متوفر")
        holder = true ;
        } 
    }
        if (holder == false){
            console.log("غير متوفر");

    }
}

let shopping = true;
let bag = [];
while (shopping) {
  let name = prompt("السلعه: اضغط انتهيت عندما تنتهي");
  if (name != "انتهيت") {
    let quantity = prompt("الكميه");
    let price = prompt("السعر");

    let item = {
      name: name,
      quantity: quantity,
      price: price,
    };
    bag.push(item);
  } else {
    shopping = false;
    Bill(bag);
  }
}
function Bill(items) {
  let Total = 0;
  console.log("الفاتوره");
  console.log("------------");
  for (let i = 0; i < bag.length; i++) {
    console.log(
      items[i]["quantity"] +
        " " +
        items[i]["name"] +
        " " +
        items[i]["price"] +
        " KD"
    );
    Total += parseFloat(items[i]["price"]);
  }
  console.log("السعر الكلي:" + Total);
  console.log("------------");
}
