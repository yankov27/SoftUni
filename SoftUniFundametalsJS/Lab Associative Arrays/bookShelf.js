function bookShelf(data) {

    let obj = {};

    for (let line of data) {
        if (line.includes(' -> ')) {
            let [id, genre] = line.split(' -> ');

            if (!obj.hasOwnProperty(id)) {
                obj[id] = { [genre]: [] };
            };
        } else {
            let [bookInfo, genre] = line.split(', ');
            for (let key in obj) {
                if (obj[key].hasOwnProperty(genre)) {
                    obj[key][genre].push(bookInfo);
                };
            };
        };
    };

    let sorted = Object.keys(obj).sort((a, b) => Object.entries(obj[b])[0][1].length - Object.entries(obj[a])[0][1].length);

    for(let id of sorted) {
        console.log(`${id} ${Object.keys(obj[id])}: ${Object.values(obj[id])[0].length}`);
        Object.values(obj[id]).forEach(values => {
            values.sort((a, b) => a.localeCompare(b)).forEach(v => {
                console.log(`--> ${v}`);
            });
        });
    };
};
bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])