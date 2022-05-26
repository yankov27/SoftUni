function foreignLanguages(currentCountry) {

    if(currentCountry === "England" || currentCountry === "USA") {
        console.log(`English`);
    } else if(currentCountry === "Spain" || currentCountry === "Argentina" || currentCountry === `Mexico`) {
        console.log(`Spanish`);
    } else {
        console.log(`unknown`);
    }

}
foreignLanguages("Bulgaria")