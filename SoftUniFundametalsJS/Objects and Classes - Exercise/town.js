function town(arr) {

    for(let townInfo of arr) {
        let [town, latitude, longitude] = townInfo.split(' | ');

        let townObj = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(townObj);
    };
};
town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])