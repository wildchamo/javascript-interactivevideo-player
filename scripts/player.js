    var video=null;
var player={
    currentTime:0,
    videoPlaying:1,
};

function initPlayer(){
    video=document.getElementById("mivideo");
    video.ontimeupdate=function(){
    player.currentTime=video.currentTime;
    console.log(player.currentTime);

    // if(player.currentTime>57 && player.videoPlaying==1){
       
    //    crearBotones();
    //    player.videoPlaying=0;

    // }
    switch (player.videoPlaying){
        case(1):
        if(player.currentTime>27){
            crearBotones1();
            player.videoPlaying=0;
        }
        break;
        case(2):
        if(player.currentTime>9){
            crearBotones1();
            player.videoPlaying=0;
        }
        break;
        case(3):
        if(player.currentTime>9){
            crearBotones2();
            player.videoPlaying=0;
        }
        break;
        case(4):
        if(player.currentTime>9){
            crearBotones2();
            player.videoPlaying=0;
        }
        break;
        case(5):
        if(player.currentTime>9){
            crearBotones3();
            player.videoPlaying=0;
        }
        break;
        case(6):
        if(player.currentTime>9){
            crearBotones3();
            player.videoPlaying=0;
        }
        break;
        case(7):
        if(player.currentTime>9){
            crearBotones4();
            player.videoPlaying=0;
        }
        break;
        case(8):
        if(player.currentTime>9){
            crearBotones4();
            player.videoPlaying=0;
        }
        break;
        case(9):
        if(player.currentTime>9){
            crearBotones5();
            player.videoPlaying=0;
        }
        break;
        case(10):
        if(player.currentTime>9){
            crearBotones5();
            player.videoPlaying=0;
        }
        break;
        case(11):
        if(player.currentTime>9){
            player.videoPlaying=0;
            crearBotones6();
        }
        break;
        case(13):
        if(player.currentTime>9){
            player.videoPlaying=0;
            crearBotones7();
        }
        break;
    }




    function crearBotones1(){
        var btn1=document.createElement("button");
        btn1.innerHTML= "Boton1" ;
        btn1.id="boton1";
        btn1.style.left="15%";
        btn1.style.width="300px";
        btn1.style.height="600px";
        btn1.style.padding="10px 10px";
        btn1.style.opacity="0";
        btn1.style.top="25%";
        btn1.style.margin= "0.4em auto";
        document.body.appendChild(btn1);
        var btn2=document.createElement("button");
        btn2.innerHTML="Boton2";
        btn2.id="boton2";
        btn2.style.width="300px";
        btn2.style.height="600px";
        btn2.style.left="63%";
        btn2.style.top="25%";
        btn2.style.opacity="0";
        btn2.style.padding="10px 10px";
        btn2.style.margin= "0.4em auto";
        document.body.appendChild(btn2);

        btn1.onclick=function(){
            video.src="videospasta/3.mp4";
            video.play();
            btn1.remove();
            btn2.remove();
            player.videoPlaying=3;
        }
        btn2.onclick=function(){
            video.src="videospasta/2.mp4";
            video.play();
            btn1.remove();
            btn2.remove();
            player.videoPlaying=2;
        }
    }

    function crearBotones2(){
        var btn1=document.createElement("button");
        btn1.innerHTML= "Boton1" ;
        btn1.id="boton1";
        btn1.style.left="15%";
        btn1.style.width="300px";
        btn1.style.height="600px";
        btn1.style.padding="10px 10px";
        btn1.style.opacity="0";
        btn1.style.top="25%";
        btn1.style.margin= "0.4em auto";
        document.body.appendChild(btn1);
        var btn2=document.createElement("button");
        btn2.innerHTML="Boton2";
        btn2.id="boton2";
        btn2.style.width="300px";
        btn2.style.height="600px";
        btn2.style.left="63%";
        btn2.style.top="25%";
        btn2.style.opacity="0";
        btn2.style.padding="10px 10px";
        btn2.style.margin= "0.4em auto";
        document.body.appendChild(btn2);

        btn1.onclick=function(){
            video.src="videospasta/5.mp4";
            video.play();
            btn1.remove();
            btn2.remove();
            player.videoPlaying=5;
        }
        btn2.onclick=function(){
            video.src="videospasta/4.mp4";
            video.play();
            btn1.remove();
            btn2.remove();
            player.videoPlaying=4;
        }
    }

    function crearBotones3(){
        var btn1=document.createElement("button");
        btn1.innerHTML= "Boton1" ;
        btn1.id="boton1";
        btn1.style.left="15%";
        btn1.style.width="300px";
        btn1.style.height="600px";
        btn1.style.padding="10px 10px";
        btn1.style.opacity="0";
        btn1.style.top="25%";
        btn1.style.margin= "0.4em auto";
        document.body.appendChild(btn1);
        var btn2=document.createElement("button");
        btn2.innerHTML="Boton2";
        btn2.id="boton2";
        btn2.style.width="300px";
        btn2.style.height="600px";
        btn2.style.left="63%";
        btn2.style.top="25%";
        btn2.style.opacity="0";
        btn2.style.padding="10px 10px";
        btn2.style.margin= "0.4em auto";
        document.body.appendChild(btn2);

        btn1.onclick=function(){
            video.src="videospasta/7.mp4";
            video.play();
            btn1.remove();
            btn2.remove();
            player.videoPlaying=7;
        }
        btn2.onclick=function(){
            video.src="videospasta/6.mp4";
            video.play();
            btn1.remove();
            btn2.remove();
            player.videoPlaying=6;
        }
    }
    function crearBotones4(){
        var btn1=document.createElement("button");
        btn1.innerHTML= "Boton1" ;
        btn1.id="boton1";
        btn1.style.left="15%";
        btn1.style.width="300px";
        btn1.style.height="600px";
        btn1.style.padding="10px 10px";
        btn1.style.opacity="0";
        btn1.style.top="25%";
        btn1.style.margin= "0.4em auto";
        document.body.appendChild(btn1);
        var btn2=document.createElement("button");
        btn2.innerHTML="Boton2";
        btn2.id="boton2";
        btn2.style.width="300px";
        btn2.style.height="600px";
        btn2.style.left="63%";
        btn2.style.top="25%";
        btn2.style.opacity="0";
        btn2.style.padding="10px 10px";
        btn2.style.margin= "0.4em auto";
        document.body.appendChild(btn2);


        btn1.onclick=function(){
            video.src="videospasta/9.mp4";
            video.play();
            btn1.remove();
            btn2.remove();
            player.videoPlaying=9;
        }
        btn2.onclick=function(){
            video.src="videospasta/8.mp4";
            video.play();
            btn1.remove();
            btn2.remove();
            player.videoPlaying=8;
        }
    }
    function crearBotones5(){
        var btn1=document.createElement("button");
        btn1.innerHTML= "Boton1" ;
        btn1.id="boton1";
        btn1.style.left="15%";
        btn1.style.width="300px";
        btn1.style.height="600px";
        btn1.style.padding="10px 10px";
        btn1.style.opacity="0";
        btn1.style.top="25%";
        btn1.style.margin= "0.4em auto";
        document.body.appendChild(btn1);
        var btn2=document.createElement("button");
        btn2.innerHTML="Boton2";
        btn2.id="boton2";
        btn2.style.width="300px";
        btn2.style.height="600px";
        btn2.style.left="63%";
        btn2.style.top="25%";
        btn2.style.opacity="0";
        btn2.style.padding="10px 10px";
        btn2.style.margin= "0.4em auto";
        document.body.appendChild(btn2);

        btn1.onclick=function(){
            video.src="videospasta/11.mp4";
            video.play();
            btn1.remove();
            btn2.remove();
            player.videoPlaying=11;
        }
        btn2.onclick=function(){
            video.src="videospasta/10.mp4";
            video.play();
            btn1.remove();
            btn2.remove();
            player.videoPlaying=10;
        }
    }

    function crearBotones5(){
        var btn1=document.createElement("button");
        btn1.innerHTML= "Boton1" ;
        btn1.id="boton1";
        btn1.style.left="15%";
        btn1.style.width="300px";
        btn1.style.height="600px";
        btn1.style.padding="10px 10px";
        btn1.style.opacity="0";
        btn1.style.top="25%";
        btn1.style.margin= "0.4em auto";
        document.body.appendChild(btn1);
        var btn2=document.createElement("button");
        btn2.innerHTML="Boton2";
        btn2.id="boton2";
        btn2.style.width="300px";
        btn2.style.height="600px";
        btn2.style.left="63%";
        btn2.style.top="25%";
        btn2.style.opacity="0";
        btn2.style.padding="10px 10px";
        btn2.style.margin= "0.4em auto";
        document.body.appendChild(btn2);

        btn1.onclick=function(){
            video.src="videospasta/13.mp4";
            video.play();
            btn1.remove();
            btn2.remove();
            player.videoPlaying=13;
        }
        btn2.onclick=function(){
            video.src="videospasta/10.mp4";
            video.play();
            btn1.remove();
            btn2.remove();
            player.videoPlaying=10;
        }
    }




    function crearBotones7(){
        var btn1=document.createElement("button");
        btn1.innerHTML= "Boton1" ;
        btn1.id="boton1";
        btn1.style.left="40%";
        btn1.style.top="90%";
        btn1.style.padding="30px 120px";
        btn1.style.opacity="0";
        btn1.style.margin= "0.4em auto";
        document.body.appendChild(btn1);

        btn1.onclick=function(){
            video.src="videospasta/1.mp4";
            video.play();
            btn1.remove();
            player.videoPlaying=1;
        }
    }
       

console.log(player.videoPlaying);
}
}