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

const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = audio/${index}.mp3;
        poster_master_play.src =img/${index}.jpg;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[${index-1}].style.background = "rgb(105, 105, 170, .1)";
    })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = 0${sec}
    }
    currentEnd.innerText = ${min}:${sec};

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = 0${sec1}
    }
    currentStart.innerText = ${min1}:${sec1};

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = ${seekbar}%;
    dot.style.left = ${seekbar}%;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = ${vol_a}%;
    vol_dot.style.left = ${vol_a}%;
    music.volume = vol_a/100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = audio/${index}.mp3;
    poster_master_play.src =img/${index}.jpg;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(${index}).classList.remove('bi-play-fill');
    document.getElementById(${index}).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[${index-1}].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = audio/${index}.mp3;
    poster_master_play.src =img/${index}.jpg;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(${index}).classList.remove('bi-play-fill');
    document.getElementById(${index}).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[${index-1}].style.background = "rgb(105, 105, 170, .1)";
    
})

