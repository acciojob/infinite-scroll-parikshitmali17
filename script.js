//your code here!
const body=document.getElementById("body")
const infiniteList=document.getElementById("infi-list");

let itemNo=11;

function Infunction(e) {
if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
for (let i = 0; i < 2; i++){
	let li1=document.createElement("li");
	li.innerText=`Item ${itemNo}`
	infiniteList.appendChild(li)
itemNo++
}
}
	
}

window.addEventListner("scroll",)
