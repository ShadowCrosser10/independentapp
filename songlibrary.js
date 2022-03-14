var song_list=[];

window.addEventListener('click', songclick);

function back() {
    console.log("clicking1"); 
    sample = "<h4>Hello</h4>";
    for(i = 0; i < song_list.length; i++){
        console.log("clicking2"); 
        sample= sample+"<h4 id="+i+">"+song_list[i]+"</h4>";
    }

    console.log(sample);


document.getElementById("div_list").innerHTML = sample;
window.location = "addsongs.html";
}

function songclick(e) {
    console.log("inside click");
    console.log(e.target);
    if (e.target.id == "no1") {
        document.getElementById("no1").style.color = "cyan";
        song_list.push("Time of Your Life");
        console.log(song_list);
    } else if (e.target.id == "no2") {
        document.getElementById("no2").style.color = "cyan";
        song_list.push("A Thousand Miles");
        console.log(song_list);
    }


}

