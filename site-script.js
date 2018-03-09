console.log('hi')
var FirstBox = document.getElementById('first-box');

console.log(FirstBox)
FirstBox.innerHTML = 'seig';
FirstBox.style.backgroundColor = "red";
SecondBox = document.getElementById('second-box');
SecondBox.innerHTML = 'em';
SecondBox.style.backgroundColor = 'blue';
ThirdBox = document.getElementById('third-box');
ThirdBox.innerHTML = 'up';
ThirdBox.style.backgroundColor = 'yellow';
function  testfunction(){
    console.log('seig');
}
FirstBox.addEventListener('click', testfunction);

function onMouseOver(){
    SecondBox.style.backgroundColor = "green" ;
    console.log ('yoo');
    

}
SecondBox.addEventListener('mouseover', onMouseOver);

function onMouseOut() {
   SecondBox.style.backgroundColor = 'blue'
}
SecondBox.addEventListener('mouseout',onMouseOut);
var ListOfItems = document.getElementsByClassName('item');

function crossoutitem(event){
    console.log('crossthisout');

    var Item = event.target;
    Item.style.textDecoration = 'line-through';
if(Item.style.textDecoration == 'line-through') {
    Item.style.textDecoration = 'none';

}
else {
    Item.style.textDecoration = 'line-through'
}   
}

for (var count=0; count < ListOfItems.length; count++ ){
console.log('loop ran',count );
var Item = ListOfItems[count];
console.log(Item);
Item.addEventListener('click', crossoutitem)




}


var timebetweenupdates = 1000;

function displaytime() {
    var date = new Date();
        console.log('the time is...', date);
    

}
{
var clocktimer = setInterval(displaytime,timebetweenupdates);


}