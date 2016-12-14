function generateRandomNumber() {
    return parseInt(Math.random() * 100);
}
this.onmessage = function (val) {
    for (var x = 0; x < val.data; x++) {
         postMessage(generateRandomNumber());
    }
};