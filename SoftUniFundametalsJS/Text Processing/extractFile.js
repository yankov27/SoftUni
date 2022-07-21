function extractFile(data) {

    let pathArr = data.split('\\');
    let fileNameArr = pathArr[pathArr.length - 1].split('.');

    let fileExtension = fileNameArr.pop();
    let fileName = fileNameArr.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.cat.pptx')