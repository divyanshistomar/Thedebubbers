const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:`Aaoge jab tum  <br>
        <div class="subtitle">Jab we met</div>`,
        poster: "tumsehi.jpg"
    },
    {
        id:'2',
        songName:`Tere Bina <br>
        <div class="subtitle">Guru</div>`,
        poster: "terebina.jpg"
    },
    
   {
        id:"3",
        songName: ` Ajab si <br><div class="subtitle"> Om shanti Om</div>`,
        poster: "ajab.jpg",
    },
    {
        id:"4",
        songName: Apna bana le<br><div class="subtitle">Bhediya</div>,
        poster: "apnabana.jpg",
    },
    {
        id:"5",
        songName: Tum Hi Ho <br><div class="subtitle">Aashiqui 2</div>,
        poster: "tumhiho.jpg",
    },
    {
        id:"6",
        songName: Satranga <br><div class="subtitle">Animal</div>,
        poster: "satranga.jpg",
    },
    {
        id:"7",
        songName: Tainu Khabar nahi<br><div class="subtitle">Munjya</div>,
        poster: "tenukhabar.jpg",
    },
    {
        id:"8",
        songName: Agar Tum Saath Ho <br><div class="subtitle">Tamashaa</div>,
        poster: "7.jpg",
    },
    {
        id:"9",
        songName: Tum se hi <br><div class="subtitle">Jab We Met</div>,
        poster: "tumsehi.jpg",
    },
    {
        id:"10",
        songName: O Mahi <br><div class="subtitle">Dunki </div>,
        poster: "omahi.jpg",
    },
    {
        id:"11",
        songName: Jo tum mere ho <br><div class="subtitle">Anuv Jain</div>,
        poster: "jotum.jpg",
    },
    {
        id:"12",
        songName: Kabira <br><div class="subtitle">Yeh Jawani Hai Deewani</div>,
        poster: "kabira.jpg",
    },
    {
        id:"13",
        songName: Raabta <br><div class="subtitle">Agent Vinod</div>,
        poster: "agent.jpg",
    },
    {
        id:"14",
        songName: Hawayein <br><div class="subtitle">Jab Harry Met Sejal</div>,
        poster: "hawa.jpg",
    },
    {
        id:"15",
        songName: Channa Mereya <br><div class="subtitle">Ae Dil Hai Mushkil</div>,
        poster: "channa.jpg",
    },
    
]
Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
