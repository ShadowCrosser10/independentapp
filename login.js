function login() {
    username = document.getElementById("username_input").value;
    localStorage.setItem("Username", username); 
    window.location = "playlists.html";   
    console.log("Added username and redirected the user to create a playlist!");
}