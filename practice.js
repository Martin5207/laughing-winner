const firebaseConfig = {
    apiKey: "AIzaSyBeRV6oglM1qdF2gU00sjvGAs0iyrCszrI",
    authDomain: "classtest-6552e.firebaseapp.com",
    databaseURL: "https://classtest-6552e-default-rtdb.firebaseio.com",
    projectId: "classtest-6552e",
    storageBucket: "classtest-6552e.appspot.com",
    messagingSenderId: "44460706222",
    appId: "1:44460706222:web:935a31ebfac54d25ba603f"
  };
  
    
  firebase.initializeApp(firebaseConfig);

function adduser(){
    username=document.getElementById("username").value ;
    Message=document.getElementById("message").value   ;
    firebase.database().ref("/").child(username).update ({
        username:username,
        Message:Message

    });
}