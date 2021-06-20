function mifuncion(){
    alert("1");
    var video= document.getElementById("mivideo");
    setInterval(function(){
        console.log(video.currentTime);
        var unit= "seconds";
        document.getElementById("time").innerHTML= Math.round(video.currentTime)+unit;
        },1000);
}
