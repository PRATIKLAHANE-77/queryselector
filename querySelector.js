// query selector to change the property of each element

let seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor = "green";
let thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.display = "none";

// query selector to change the property of all element

let seconditemall = document.querySelectorAll('.list-group-item');
seconditemall[1].style.color = "green";

// odd element background green using querySelectorAll

let oddelement = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i = 0;i<oddelement.length;i++) {
    oddelement[i].style.backgroundColor = "green";
}


