// Exercise: Managing a Playlist

function managePlaylist(Playlist, newSong) {
    Playlist.shift()
    Playlist.unshift(newSong)
    return Playlist
}

const initialPlaylist = ['Smells Like Teen Spirit', 'Enter Sandman', 'The Beautiful People', 'Losing My Religion']

const newSongToAdd = 'The Unforgiven'

const updatePlaylist = managePlaylist(initialPlaylist, newSongToAdd)

console.log('Initial Playlist: ', initialPlaylist)
console.log('New song to add: ', newSongToAdd)
console.log('Updated Playlist: ', updatePlaylist)