
window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
  // voir plus : https://www.w3schools.com/js/js_htmldom.asp
   console.log( "DOM ready!" );
   function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  let dateNaissance = new Date(2018, 8, 22); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#syntaxe
let dateNaissanceTimestamp = dateNaissance.getTime();
let nowTimestamp = Date.now()
var myModal = new bootstrap.Modal(document.getElementById('myModal'));
myModal.show();
document.querySelector("#lname")
document.querySelector("#lname").value;
document.querySelector("#Date")
document.querySelector("#Date").value;
document.querySelector("#inputAddress")
document.querySelector("#inputAddress").value;
document.querySelector(".modal-title").textContent = "Bienvenue Meriem"
document.querySelector(".modal-body").innerHTML = '<img src="https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/>'  



 
};