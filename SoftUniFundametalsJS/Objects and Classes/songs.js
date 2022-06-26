function songs(arr) {

    class Song {
        constructor(playlist, name, time) {
            this.playlist = playlist,
                this.name = name,
                this.time = time,
                this.print = () => console.log(this.name);
        };
    };

    const songNum = arr.shift();
    const desiredPlaylist = arr.pop();
    let songs = [];

    for (let i = 0; i < songNum; i++) {
        let currentInput = arr[i];
        let currentArr = currentInput.split('_');
        let currentSong = new Song(currentArr[0], currentArr[1], currentArr[2]);
        songs.push(currentSong);
    };

    if (desiredPlaylist === 'all') {
        songs.forEach(song => song.print());
    } else {
        songs.filter(song => song.playlist === desiredPlaylist)
        .forEach(song => song.print())
    };
};
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
