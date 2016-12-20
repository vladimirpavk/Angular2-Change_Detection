function generateRandomNumber() {
    var number=parseInt(Math.random() * 100);
    //console.log("From generateRandomNumber :"+number);
    return number;
}
this.onmessage = function (val) {
    for (var x = 0; x < val.data; x++) {
         var number2=generateRandomNumber();
         //console.log("form onmessage :"+number2);
         postMessage(number2);         
    }
};