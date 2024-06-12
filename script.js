console.log("Welcome to Spotify");
//initialize variable
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterplay');
let myProgressBar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Like the way", filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName:"Coffee Breath", filePath:'songs/2.mp3', coverPath:'covers/2.jpg'},
    {songName:"Ecstacy", filePath:'songs/3.mp3', coverPath:'covers/3.jpg'},
    {songName:"Mio", filePath:'songs/4.mp3', coverPath:'covers/4.jpg'},
    {songName:"Sibbi Song", filePath:'songs/5.mp3', coverPath:'covers/5.jpg'}
   
]
songItems.forEach( (element,i)=>{
  
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;

})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

// const makeAllPause=()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-circle-play');
//         element.classList.add('fa-circle-pause');
//     })
// }


// // to pause from the list icon
//  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
// {
//     element.addEventListener('click',(e)=>{
//         let elementpause=document.getElementsByClassName('fa-circle-play');
//         if(element.targetmakeAllPlays()=elementpause){
//             // makeAllPlays(); 
//             audioElement.pause();
//         }
//     })
// })

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
         makeAllPlays();    
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
       // audioElement.src = "songs/${index+1}.mp3";
       audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();   
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

     })

})
// audioElement.play();

//handle play / click music 

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
    }
    else if(audioElement.played || audioElement.currentTime>0){
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})

//list to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeUpdate');  
//update seek bar
Progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(Progress);
    myProgressBar.value =Progress;

})

//handle seekbar
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value* audioElement.duration)/100;
})



 // next
 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0
    }
    else{
        songIndex+=1;
        
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();   
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
 })

 //previous
 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=4;
    }
    else{
        songIndex-=1;
         }
         audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();   
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
 })