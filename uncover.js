var pageindex = 0;
var fullscreen = false;

// disable scrollbar
document.body.style.overflow = 'hidden';

// remove arrow key scrolling and add shortcuts
window.addEventListener("keydown", function (e) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
    if (e.code === "ArrowUp") {
        pageindex--;
        try {
            let page = document.body.children[pageindex];
            if (page.tagName === "SLIDE") {
                page.scrollIntoView();
            } else pageindex++;
        } catch {
            pageindex++;
        }
    } else if (e.code === "ArrowDown") {
        pageindex++;
        try {
            let page = document.body.children[pageindex];
                if (page.tagName === "SLIDE") {
                page.scrollIntoView();
            } else pageindex--;
        } catch {
            pageindex--;
        }
    } else if (e.code === "KeyF") {
        if (fullscreen) closeFullscreen();
        else openFullscreen();
        fullscreen = !fullscreen;
    }

}, false);

var head = document.getElementsByTagName('HEAD')[0];

// add styles
var css = document.createElement('style');
css.type = 'text/css';
css.innerHTML = `
html {
    scroll-behavior: smooth;
}
body {
    background-color: #fefaef;
    color: #646669;
    font-family: 'Roboto Mono';
}
slide {
    display: block;
    height: 100vh;
    box-sizing: border-box; /* include padding in box height*/
    padding: 50px;
}
row {
    display: flex;
    flex-direction: row;
}
column {
    display: flex;
    flex-direction: column;
}
bt {
    display: inline;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    padding: 10px;
    background-color: #646669;
    border-radius: 8px;
    border: none;
    color: #fefaef;
    font-size: 25px;
    font-family: 'Roboto Mono';
}
p {
    color: #646669;
    font-size: 25px;
}
bt a {
  color: #fefaef;
  text-decoration: none;
}
h1 {
    display: inline;
    color: #646669;
    font-size: 50px;
    font-weight: bold;
}
hs {
    display: block;
    height: 50px;
}
vs {
    display: block;
    width: 50px;
}
`
head.appendChild(css);

// add font
var font = document.createElement('link');
font.href= "https://fonts.googleapis.com/css?family=Roboto Mono";
font.rel = "stylesheet";
head.appendChild(font);

// process hs & vs
var hspaces = document.getElementsByTagName('hs');
for (var i=0; i<hspaces.length; i++) {
    hspaces[i].style.width = hspaces[i].innerHTML + "px";
    hspaces[i].innerHTML = "";
}
var vspaces = document.getElementsByTagName('vs');
for (var i=0; i<vspaces.length; i++) {
    vspaces[i].style.height = vspaces[i].innerHTML + "px";
    vspaces[i].innerHTML = "";
}

// fullscreen functions
function openFullscreen() {
    elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}