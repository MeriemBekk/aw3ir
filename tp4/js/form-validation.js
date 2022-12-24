
window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
  // voir plus : https://www.w3schools.com/js/js_htmldom.asp
   console.log( " " );
  
   function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }






  var  myModal = new bootstrap.Modal(document.getElementById('myModal'));
 
  var myButton = document.getElementById('submit');
  myButton.addEventListener('click', () => {myModal.show();
   
      
  
});
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form submitted!");
});


  //const lname = document.querySelector("#lname");
  //const Date = document.querySelector("#Date");
  
  
  document.querySelector("#inputAddress")
  document.querySelector("#inputAddress").value;
  document.querySelector(".modal-title").textContent = "Bienvenue Meriem";
  
    

  
  document.querySelector("#submitGPS").addEventListener("click", function(event){
    event.preventDefault();
    console.log( "click" );
   
  });
  
  
  
  
  

  function calcNbChar(id) {
    document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length;
  }}