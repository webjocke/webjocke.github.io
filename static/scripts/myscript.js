

//
// Making the background color fade
//

var start = 36;
var stop = 45;
var up = true;

function myLoop () {
   setTimeout(function () {
        document.getElementsByTagName("body")[0].style.backgroundColor = 'hsl(174,100%,'+i+'%)'
        up? i+=0.1 : i-=0.1;
        if (i > stop || i < start) {
            up = !up;
        }
        myLoop();
   }, 80)
}

var i = start;
myLoop(); 