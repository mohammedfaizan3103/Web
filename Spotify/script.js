console.log("Hello World")
let songlist;
let currentSong = new Audio();

const setHeight = () => {
    let top_h = document.querySelector('.top').offsetHeight
    let left = document.querySelector('.left').offsetHeight
    document.querySelector('.library').style.height = (95 - (top_h / left) * 100) + '%'
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
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.left').style.left = 0;
})

document.querySelector('.close').addEventListener('click', () => {
    // this wont work when screen is higher than 1000 because position property is not set for it
    document.querySelector('.left').style.left = '-1000px';
})
async function getFolder() {
    let folders = await fetch("http://127.0.0.1:3000/Spotify/songs/")
    let text = await folders.text()
    let div = document.createElement('div')
    div.innerHTML = text
    let a = div.querySelectorAll('a')
    console.log(a)
    console.log(a.length)
    for (let i = 1; i < a.length; i++) {
        let e = a[i]
        let link = e['href']
        let folder = link.slice(link.indexOf('album'), link.lastIndexOf('/'))
        let content = await fetch(link)
        let text = await content.text()
        let div = document.createElement('div')
        div.innerHTML = text
        let aa = div.querySelectorAll('a')
        let album_info;
        let image;
        for (let ii of aa) {
            if (ii['href'].endsWith('json')) {
                album_info = await fetch(ii['href'])
                album_info = await album_info.json()
            }
            if (ii['href'].endsWith('jpg')) {
                image = ii['href']
            }
        }
        let cardContainer = document.querySelector('.cardContainer')
        cardContainer.innerHTML += `
                    <div class="card" data-folder="${folder}">
                        <div class="circle-div">
                            <svg class="play-button" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                        <img src="${image}" alt="">
                        <h3>${album_info.name}</h3>
                        <p>${album_info.description}</p>
                    </div>
        `
    }
}


async function getSongs(folder) {
    let songsFolder = await fetch(`http://127.0.0.1:3000/Spotify/songs/${folder}/`)
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
    ul.innerHTML = ""
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
    await getFolder()
    let cards = document.querySelectorAll(".card")
    console.log(cards)
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
    let playbar = document.querySelector('.playbar')
    let song_index = -1;
    let songbuttons = document.querySelector('.songbuttons')
    let player = songbuttons.children[1];
    document.querySelectorAll('.card').forEach(e => {
        e.addEventListener('click', async (item) => {
            let folder = item.currentTarget.dataset.folder
            await getSongs(folder)
            songlist = document.querySelector('.songlist').querySelectorAll('li')
            for (let i = 0; i < songlist.length; i++) {
                songlist[i].querySelector('.play').addEventListener('click', () => {
                    if (song_index != i) {
                        playsong(i, 0)
                    }
                    else {
                        let img = songlist[i].querySelector('.play').querySelector('img')
                        if (currentSong.paused) {
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
            playsong(0, 0)
            document.querySelector('.left').style.left = 0;
        })
    })
    const playsong = (song_in, change) => {
        if (song_index != -1) {
            songlist[song_index].querySelector('.play').querySelector('img').src = "assests/play.svg"
        }
        let li = songlist[song_in + change]
        let playbutton = li.querySelector('.play')
        let img = playbutton.querySelector('img')
        currentSong.src = li.dataset.songurl
        let name = li.querySelector('.info').querySelector('div').innerHTML.trim()
        document.querySelector('.songinfo').innerHTML = name
        currentSong.play()
        player.src = "assests/pause.svg"
        img.src = "assests/pause.svg"
        playbar.classList.remove('hide')
        song_index = song_in + change
    }



    player.addEventListener('click', () => {
        let img = songlist[song_index].querySelector('.play').querySelector('img')
        if (currentSong.paused) {
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
        document.querySelector('.circle_seek').style.left = (currentSong.currentTime / currentSong.duration) * 100 + '%'
        if (currentSong.currentTime === currentSong.duration) {
            document.querySelector('.songbuttons').children[1].src = "assests/play.svg"
            songlist[song_index].querySelector('.play').querySelector('img').src = "assests/play.svg"
        }
    })
    let seekbar = document.querySelector('.seekbar')
    seekbar.addEventListener('click', (event) => {
        let position = (event.offsetX / event.target.getBoundingClientRect().width) * 100
        document.querySelector('.circle_seek').style.left = position + "%"
        currentSong.currentTime = (position / 100) * currentSong.duration
    })
    document.querySelector('.songbuttons').children[0].addEventListener('click', () => {
        if (song_index - 1 < 0) {
            console.log('no previous song')
        }
        else {
            playsong(song_index, -1)
        }
    })
    document.querySelector('.songbuttons').children[2].addEventListener('click', () => {
        if (song_index + 1 >= songlist.length) {
            console.log('no next song')
        }
        else {
            playsong(song_index, 1)
        }
    })
    document.querySelector('.volume').querySelector('img').addEventListener('click', () => {
        let input = document.querySelector('.volume').querySelector('input').classList
        if (input.contains('hide')) {
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
