
window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
  // voir plus : https://www.w3schools.com/js/js_htmldom.asp
   console.log( " " );
  
   function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }



var myModal = new bootstrap.Modal(document.getElementById('myModal'));


const lname = document.querySelector("#lname");
const Date = document.querySelector("#Date");

document.querySelector("#inputAddress")
document.querySelector("#inputAddress").value;
document.querySelector(".modal-title").textContent = "Bienvenue Meriem"
document.querySelector(".modal-body").innerHTML = '<img src="https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/>'  


document.querySelector("#submitGPS").addEventListener("click", function(event){
  event.preventDefault();
  console.log( "click" );

}); 


function init() { 
  console.log("init");

 var myform = document.getElementById("#form");

myform.addEventListener("submit", function(e) { console.log("submit");
var username = document.getElementById("#lname").value;  var errors = '';
          
if(username == '') errors += 'Please specify a username.\n';

if(errors != '') { alert(errors); e.preventDefault(); }

}); };


};
function calcNbChar(id) {
  document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length;
}