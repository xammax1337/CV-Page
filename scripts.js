// Easter egg 1, background change
function backgroundChange() {

    if(document.body.style.backgroundColor === "red") {
        document.body.style.backgroundColor = "whitesmoke";
        console.log("Works");
    }
    else {
        document.body.style.backgroundColor = "red";
    }
}

// Easter egg 2, blurs the image when egg is input in the keyboard first time u enter.
const targetWord = "egg";

let input = [];

document.addEventListener('keyup', function(easterEgg)
{
    input.push(easterEgg.key.toLowerCase());
    if (input.join('') === targetWord) {
        document.documentElement.style.filter = "blur(10px)";
        input = [];
    }
});