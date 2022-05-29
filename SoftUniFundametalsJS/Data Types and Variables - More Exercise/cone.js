function cone(radius, height) {

    const volume = (1/3) * Math.PI * (radius * radius) * height; //πr(r + √(r2 + h2))
    const area = radius * Math.PI * (radius + Math.sqrt(radius * radius + height * height));

    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${area.toFixed(4)}`)
}
cone(3, 5)
cone(3.3, 7.8)