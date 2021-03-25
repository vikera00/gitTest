function ucFirst(str) {
    if(!str) return str
    let newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return newStr;
}

ucFirst("monkey");