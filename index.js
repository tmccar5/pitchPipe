$(document).ready(function() {
    //A toggle click
   var soundA = document.getElementById("Apitch");
   var soundBb = document.getElementById("Bbpitch");
   var soundB = document.getElementById("Bpitch");
   var soundC = document.getElementById("Cpitch");
   var soundDb = document.getElementById("Dbpitch");
   var soundD = document.getElementById("Dpitch");
   var soundEb = document.getElementById("Ebpitch");
   var soundE = document.getElementById("Epitch");
   var soundF = document.getElementById("Fpitch");
   var soundGb = document.getElementById("Gbpitch");
   var soundG = document.getElementById("Gpitch");
   var soundAb = document.getElementById("Abpitch");
   
   $("#A").click(function(){
      soundA.play();
   });
   $("#A").dblclick(function(){
      soundA.pause();
   });

     $("#Bb").click(function(){
      soundBb.play();
   });
   $("#Bb").dblclick(function(){
      soundBb.pause();
   });
 
     $("#B").click(function(){
      soundB.play();
   });
   $("#B").dblclick(function(){
      soundB.pause();
   });
    $("#C").click(function(){
      soundC.play();
   });
   $("#C").dblclick(function(){
      soundC.pause();
   });
    
    $("#Db").click(function(){
      soundDb.play();
   });
   $("#Db").dblclick(function(){
      soundDb.pause();
   });

     $("#D").click(function(){
      soundD.play();
   });
   $("#D").dblclick(function(){
      soundD.pause();
   });

   $("#Eb").click(function(){
      soundD.play();
   });
   $("#Eb").dblclick(function(){
      soundD.pause();
   });
   
   $("#E").click(function(){
      soundE.play();
   });
   $("#E").dblclick(function(){
      soundE.pause();
   });

   $("#F").click(function(){
      soundF.play();
   });
   $("#F").dblclick(function(){
      soundF.pause();
   });

   $("#Gb").click(function(){
      soundGb.play();
   });
   $("#Gb").dblclick(function(){
      soundGb.pause();
   });

   $("#G").click(function(){
      soundG.play();
   });
   $("#G").dblclick(function(){
      soundG.pause();
   });

    $("#Ab").click(function(){
      soundAb.play();
   });
   $("#Ab").dblclick(function(){
      soundAb.pause();
   });
   $("#stopall").click(function(){
      soundA.pause();
      soundBb.pause();
      soundB.pause();
      soundC.pause();
      soundDb.pause();
      soundD.pause();
      // soundEb.pause();  for some reason it won't work with Eb??? very bizarre
      soundE.pause();
      soundF.pause();
      soundGb.pause();
      soundG.pause();
      soundAb.pause();
});


 });












    // audioA = new Audio();
    // audioA.src = "A.wav";
    // audioA.loop = true;
    // playbtn = document.getElementById("A");
    // playbtn.addEventListener("click", playPauseA);
    // function playPauseA(){
    //   if(audioA.paused) {
    //     audioA.play();
    //   }
    //   else {
    //     audioA.pause();
    // //   }
    // // }
    // //Bb toggle click
    // audioBb = new Audio();
    // audioBb.src = "Bb.wav";
    // audioBb.loop = true;
    // playbtn = document.getElementById("Bb");
    // playbtn.addEventListener("click", playPauseBb);
    // function playPauseBb(){
    //   if(audioBb.paused) {
    //     audioBb.play();
    //   }
    //   else {
    //     audioBb.pause();
    //   }
    // }
    //  //B toggle click
    // audioB = new Audio();
    // audioB.src = "B.wav";
    // audioB.loop = true;
    // playbtn = document.getElementById("B");
    // playbtn.addEventListener("click", playPauseB);
    // function playPauseB(){
    //   if(audioB.paused) {
    //     audioB.play();
    //   }
    //   else {
    //     audioB.pause();
    //   }
    // }
    // //C toggle click
    // audioC = new Audio();
    // audioC.src = "C.wav";
    // audioC.loop = true;
    // playbtn = document.getElementById("C");
    // playbtn.addEventListener("click", playPauseC);
    // function playPauseC(){
    //   if(audioC.paused) {
    //     audioC.play();
    //   }
    //   else {
    //     audioC.pause();
    //   }
    // }
    // //Db toggle click
    // audioDb = new Audio();
    // audioDb.src = "Db.wav";
    // audioDb.loop = true;
    // playbtn = document.getElementById("Db");
    // playbtn.addEventListener("click", playPauseDb);
    // function playPauseDb(){
    //   if(audioDb.paused) {
    //     audioDb.play();
    //   }
    //   else {
    //     audioDb.pause();
    //   }
    // }
    // //D toggle click
    // audioD = new Audio();
    // audioD.src = "D.wav";
    // audioD.loop = true;
    // playbtn = document.getElementById("D");
    // playbtn.addEventListener("click", playPauseD);
    // function playPauseD(){
    //   if(audioD.paused) {
    //     audioD.play();
    //   }
    //   else {
    //     audioD.pause();
    //   }
    // }
    // //Eb toggle click
    // audioEb = new Audio();
    // audioEb.src = "Eb.wav";
    // audioEb.loop = true;
    // playbtn = document.getElementById("Eb");
    // playbtn.addEventListener("click", playPauseEb);
    // function playPauseEb(){
    //   if(audioEb.paused) {
    //     audioEb.play();
    //   }
    //   else {
    //     audioEb.pause();
    //   }
    // }
    //   //E toggle click
    // audioE = new Audio();
    // audioE.src = "E.wav";
    // audioE.loop = true;
    // playbtn = document.getElementById("E");
    // playbtn.addEventListener("click", playPauseE);
    // function playPauseE(){
    //   if(audioE.paused) {
    //     audioE.play();
    //   }
    //   else {
    //     audioE.pause();
    //   }
    // }
    //   //F toggle click
    // audioF = new Audio();
    // audioF.src = "F.wav";
    // audioF.loop = true;
    // playbtn = document.getElementById("F");
    // playbtn.addEventListener("click", playPauseF);
    // function playPauseF(){
    //   if(audioF.paused) {
    //     audioF.play();
    //   }
    //   else {
    //     audioF.pause();
    //   }
    // }
    //   //Gb toggle click
    // audioGb = new Audio();
    // audioGb.src = "Gb.wav";
    // audioGb.loop = true;
    // playbtn = document.getElementById("Gb");
    // playbtn.addEventListener("click", playPauseGb);
    // function playPauseGb(){
    //   if(audioGb.paused) {
    //     audioGb.play();
    //   }
    //   else {
    //     audioGb.pause();
    //   }
    // }
    //   //G toggle click
    // audioG = new Audio();
    // audioG.src = "G.wav";
    // audioG.loop = true;
    // playbtn = document.getElementById("G");
    // playbtn.addEventListener("click", playPauseG);
    // function playPauseG(){
    //   if(audioG.paused) {
    //     audioG.play();
    //   }
    //   else {
    //     audioG.pause();
    //   }
    // }
    //   //Ab toggle click
    // audioAb = new Audio();
    // audioAb.src = "Ab.wav";
    // audioAb.loop = true;
    // playbtn = document.getElementById("Ab");
    // playbtn.addEventListener("click", playPauseAb);
    // function playPauseAb(){
    //   if(audioAb.paused) {
    //     audioAb.play();
    //   }
    //   else {
    //     audioAb.pause();
    //   }
    // }

// $("#stopall").click(function(){
//   audioA.pause();
//   audioBb.pause();
//   audioB.pause();
//   audioC.pause();
//   audioDb.pause();
//   audioD.pause();
//   audioEb.pause();
//   audioE.pause();
//   audioF.pause();
//   audioGb.pause();
//   audioG.pause();
//   audioAb.pause();
// });



// // name spacing
// // json object
// // object methods
// // do src="A.wav" in the HTML file!!!
// // look up (this).val
// // stirng interpolations source -""year".wav" get value out of button




//   }
//   window.addEventListener("load", initAudioPlayer);
