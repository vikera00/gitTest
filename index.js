function ucFirst(str) {
    if(!str) return str
    let newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return newStr;
}

ucFirst("monkey");


function checkSpam(str) {
    let lowStr = str.toLowerCase();

    return lowStr.includes("viagra") || lowStr.includes("xxx")
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );