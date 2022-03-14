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
playlist_name = localStorage.getItem("Playlist name: ");



function logout() {
  localStorage.removeItem("Playlist name: ");
  localStorage.removeItem("Username");
  window.location = "start.html"; 
}

function addsongs() {
  msg = document.getElementById("msg_input").value; 
  firebase.database().ref(room_name).push({
        Message: msg,
        Username: username,
        Likes: 0
  });

  document.getElementById("msg_input").value = ""; 
}

function library() {
  window.location = "songlibrary.html";
}
