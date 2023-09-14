var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var contador4 = 0;

function like(buttonNumber) {
    if (buttonNumber === 1) {
        contador1++;
        document.getElementById("likeCount-1").innerText = contador1;
    } else if (buttonNumber === 2) {
        contador2++;
        document.getElementById("likeCount-2").innerText = contador2;
    } else if (buttonNumber === 3) {
        contador3++;
        document.getElementById("likeCount-3").innerText = contador3;
    } else if (buttonNumber === 4) {
        contador4++;
        document.getElementById("likeCount-4").innerText = contador4;
    }
}