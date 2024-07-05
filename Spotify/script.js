console.log("Hello World")
let cards = document.querySelectorAll(".card")
for (let card of cards) {
    card.addEventListener('mouseover', () => {
        let play = card.querySelector('.circle-div')
        play.classList.add('bring-play')
    })
    card.addEventListener('mouseout', () => {
        let play = card.querySelector('.circle-div')
        play.classList.remove('bring-play')
    })
}
const setHeight = () => {
    let top_h = document.querySelector('.top').offsetHeight
    let left = document.querySelector('.left').offsetHeight
    document.querySelector('.library').style.height = (95 -  (top_h / left) * 100) + '%'
}
setHeight()
window.addEventListener('resize', setHeight)
function convertSecondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    // Pad the remaining seconds with a leading zero if it's less than 10
    const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    return minutes + ':' + formattedSeconds;
}
document.querySelector('.hamburger').addEventListener('click', () =>  {
    document.querySelector('.left').style.left = 0;
})

document.querySelector('.close').addEventListener('click', () => {
    // this wont work when screen is higher than 1000 because position property is not set for it
    document.querySelector('.left').style.left = '-1000px';
}) 

async function getSongs() {
    let songsFolder = await fetch('http://127.0.0.1:3000/Spotify/songs/')
    let text = await songsFolder.text()
    let div = document.createElement('div')
    div.innerHTML = text
    div.id = 'songs-folder'
    let a = div.querySelectorAll('a')
    let songs = []
    for (let i of a) {
        let link = i['href']
        if (link.endsWith('mp3')) {
            songs.push(link)
        }
    }
    let ul = document.querySelector('.songlist').querySelector('ul')
    for (let song of songs) {
        ul.innerHTML = ul.innerHTML + `
                        <li data-songurl = "${song}">
                            <div class="info flex">
                                <img class="invert" src="assests/music.svg" alt="">
                                <div>
                                ${song.slice(song.lastIndexOf('20') + 2, song.lastIndexOf('_'))}
                                </div>
                            </div>
                            <div class="play pointer">
                                <img class="invert" src="assests/play.svg" alt="">
                            </div>
                        </li>`
    }

}

async function main() {
    let playbar = document.querySelector('.playbar')
    let song_index = -1;
    const playsong = (song_in, change) => {
        if(song_index != -1) {
            songlist[song_index].querySelector('.play').querySelector('img').src = "assests/play.svg"
        }
        let li = songlist[song_in + change]
        let playbutton = li.querySelector('.play')
        let img = playbutton.querySelector('img')
        currentSong.src =li.dataset.songurl
        let name = li.querySelector('.info').querySelector('div').innerHTML.trim()
        document.querySelector('.songinfo').innerHTML = name
        currentSong.play()
        player.src = "assests/pause.svg"
        img.src = "assests/pause.svg"
        playbar.classList.remove('hide')
        song_index = song_in + change
    }
    await getSongs()
    let songlist = document.querySelector('.songlist').querySelectorAll('li')
    var currentSong = new Audio();
    for(let i = 0; i < songlist.length; i++) {
        songlist[i].querySelector('.play').addEventListener('click', () => {
            if(song_index != i) {
                playsong(i, 0)
            }
            else {
                let img = songlist[i].querySelector('.play').querySelector('img')
                console.log(songlist[i].querySelector('.play').querySelector('img'))
                if(currentSong.paused) {
                    currentSong.play()
                    player.src = "assests/pause.svg"
                    img.src = "assests/pause.svg"
                }
                else {
                    currentSong.pause()
                    player.src = "assests/play.svg"
                    img.src = "assests/play.svg"
                }
            }
        })
    }
    let songbuttons = document.querySelector('.songbuttons')
    let player = songbuttons.children[1];
    player.addEventListener('click', () => {
        let img = songlist[song_index].querySelector('.play').querySelector('img')
        if(currentSong.paused) {
            currentSong.play()
            player.src = "assests/pause.svg"
            img.src = "assests/pause.svg"
        }
        else {
            currentSong.pause()
            player.src = "assests/play.svg"
            img.src = "assests/play.svg"
        }
    })
    currentSong.addEventListener('timeupdate', () => {
        let currentTime = convertSecondsToMinutes(currentSong.currentTime)
        let duration = convertSecondsToMinutes(currentSong.duration)
        document.querySelector('.songtime').innerHTML = `${currentTime}/${duration}`
        document.querySelector('.circle_seek').style.left = (currentSong.currentTime/currentSong.duration) * 100 + '%'
        if(currentSong.currentTime === currentSong.duration) {
            document.querySelector('.songbuttons').children[1].src = "assests/play.svg"
            songlist[song_index].querySelector('.play').querySelector('img').src = "assests/play.svg"
        }
    })
    let seekbar = document.querySelector('.seekbar') 
    seekbar.addEventListener('click', (event) => {
        let position = (event.offsetX/event.target.getBoundingClientRect().width) * 100
        document.querySelector('.circle_seek').style.left = position + "%"
        currentSong.currentTime = (position/100) * currentSong.duration
    })
    document.querySelector('.songbuttons').children[0].addEventListener('click', () => {
        if(song_index - 1 < 0) {
            console.log('no previous song')
        }
        else {
            playsong(song_index, -1)
        }
    }) 
    document.querySelector('.songbuttons').children[2].addEventListener('click', () => {
        if(song_index + 1 >= songlist.length) {
            console.log('no next song')
        }
        else {
            playsong(song_index, 1)
        }
    }) 
    document.querySelector('.volume').querySelector('img').addEventListener('click', () => {
        let input = document.querySelector('.volume').querySelector('input').classList
        if(input.contains('hide')) {
            input.remove('hide')
        }
        else {
            input.add('hide')
        }
    })
    document.querySelector('.volume').querySelector('input').addEventListener('change', (event) => {
        currentSong.volume = event.target.value / 100
    })
}

main()
