console.log("Hello World")
let cards = document.querySelectorAll(".card")
for (let card of cards) {
    // console.log()
    card.addEventListener('mouseover', () => {
        let play = card.querySelector('.circle-div')
        play.classList.add('bring-play')
    })
    card.addEventListener('mouseout', () => {
        let play = card.querySelector('.circle-div')
        play.classList.remove('bring-play')
    })
}

function convertSecondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    // Pad the remaining seconds with a leading zero if it's less than 10
    const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    return minutes + ':' + formattedSeconds;
}

async function getSongs() {
    let songsFolder = await fetch('http://127.0.0.1:3000/Spotify/songs/')
    let text = await songsFolder.text()
    // console.log(text)
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
    // console.log(songs)
    let ul = document.querySelector('.songlist').querySelector('ul')
    for (let song of songs) {
        // console.log(song)
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
    
    // player.hidden = true;
    let playbar = document.querySelector('.playbar')
    let song_index = -1;
    await getSongs()
    let songlist = document.querySelector('.songlist').querySelectorAll('li')
    // console.log(x)
    var currentSong = new Audio();
    for(let i = 0; i < songlist.length; i++) {
        let li = songlist[i]
        let playbutton = li.querySelector('.play')
        let img = playbutton.querySelector('img')
        playbutton.addEventListener('click', () => {
            if(song_index != i) {
                if(song_index != -1) {
                    songlist[song_index].querySelector('.play').querySelector('img').src = "assests/play.svg"
                }
                currentSong.src =li.dataset.songurl
                console.log(li)
                let name = li.querySelector('.info').querySelector('div').innerHTML.trim()
                console.log(name)
                document.querySelector('.songinfo').innerHTML = name
                currentSong.play()
                player.src = "assests/pause.svg"
                img.src = "assests/pause.svg"
                playbar.classList.remove('hide')
                song_index = i
            }
            else {
                let img = playbutton.querySelector('img')
                if(currentSong.paused) {
                    currentSong.play()
                    player.src = "assests/pause.svg"
                    console.log(img)
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
    // let songbuttons = document.querySelector('.songbuttons')
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
        // console.log(currentSong.currentTime, currentSong.duration)
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
}
main()
