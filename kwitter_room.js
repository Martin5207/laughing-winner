const firebaseConfig = {
      apiKey: "AIzaSyD_War3GS-FDmNdfRHZe1JNUVDgL-tkUyE",
      authDomain: "kwitter-d52cb.firebaseapp.com",
      databaseURL: "https://kwitter-d52cb-default-rtdb.firebaseio.com",
      projectId: "kwitter-d52cb",
      storageBucket: "kwitter-d52cb.appspot.com",
      messagingSenderId: "711501639133",
      appId: "1:711501639133:web:25835befd1d23738e51a34"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="welcome "+username+"!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start codeiuriushfefffffffrerrfeasob
console.log("roomname-"+Room_names);
row="<div class='room_name' id='"+Room_names+"' onclick='redirecttoroomname(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code     e
      });});}
getData();

function addroom() {
Room_name=document.getElementById("room_name").value ;
firebase.database().ref("/").child(Room_name).update({
purpose:"addingroomname"

});

localStorage.setItem("room_name",Room_name);
window.location="kwitter_page.html";
}
function redirecttoroomname(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name");      localStorage.removeItem("username");
window.location="index.html"
}