//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBlrd02QeZVzrNvF4lZ15QAJkbLyCBUg2Y",
  authDomain: "musify-fe286.firebaseapp.com",
  databaseURL: "https://musify-fe286-default-rtdb.firebaseio.com",
  projectId: "musify-fe286",
  storageBucket: "musify-fe286.appspot.com",
  messagingSenderId: "1042305725762",
  appId: "1:1042305725762:web:a88e4d231a0968503004db"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("Username");
document.getElementById("welcome_user").innerHTML = "Welcome "+username+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("trendingplaylists").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    playlist_names = childKey;
   //Start code
   console.log(playlist_names);
   row = "<div id="+playlist_names+"onclick='redirecttoplaylist(this.id)'>#"+playlist_names+"</div><hr>"; 
   document.getElementById("trendingplaylists").innerHTML = row; 
   //End code
   });});}
getData();

function addplaylist() {
    playlist_names = document.getElementById("enterplaylist").value; 
    localStorage.setItem("Playlist name: ", playlist_names); 
    firebase.database().ref("/").child(playlist_names).update({
      Purpose: "creating a playlist"
    }
    );
  
    window.location = "addsongs.html"; 
  
  }

  function logout() {
    localStorage.removeItem("Playlist name: ");
    localStorage.removeItem("Username");
    window.location = "start.html"; 
}
