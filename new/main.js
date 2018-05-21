
console.log("Whyy you loooking at the console output??")

element = document.getElementById("me_image")

showing_strokes = true

function change_image() {
    if (showing_strokes == false) {
        element.src="images/me_stroke.png"
        showing_strokes = true
    } else {
        element.src="images/me.png"
        showing_strokes = false
        setTimeout(function() {
            change_image()
        }, 400);
    }
}

setInterval(function() {
    change_image()
}, 10000);
