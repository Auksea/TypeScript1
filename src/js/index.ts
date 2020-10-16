let inputText = <HTMLInputElement> document.getElementById("input");
let selectedOption = <HTMLSelectElement> document.getElementById("letters");
let result:HTMLElement = document.getElementById("table");
let itemId:number = 1;

document.getElementById("submit").addEventListener("click", AddElement);

   //function that creates a table element
function AddElement(){
    let trElement:HTMLTableRowElement = document.createElement("tr");
    result.appendChild(trElement);


   //number
    let itemNumber:HTMLTableHeaderCellElement = document.createElement("th");
    itemNumber.innerHTML = itemId.toString();
    trElement.appendChild(itemNumber);

    //text
    let itemText:HTMLTableHeaderCellElement = document.createElement("th");
    let text:string;
    if(selectedOption.value == "uppercase"){
        text = inputText.value.toUpperCase();
    }
    else{
        text = inputText.value.toLowerCase();
    }
    itemText.innerHTML = text;
    trElement.appendChild(itemText);

    //adds a class
if(itemId%2 == 0){
    trElement.className = "even";
}
else{
    trElement.className = "uneven";
}
    trElement.id = itemId.toString();
    itemNumber.id = "number" + itemId.toString();
    itemText.id = "text" + itemId.toString();

    itemId++;
}