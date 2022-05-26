function gramophone(bandName, albumName, songName) {

    let time = (bandName.length * albumName.length) * songName.length / 2;

    let rotationTime = Math.ceil(time / 2.5);

    console.log(`The plate was rotated ${rotationTime} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')