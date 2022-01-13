var pageindex = 0;

// disable scrollbar
document.body.style.overflow = 'hidden';

// remove arrow key scrolling and
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
    if(e.code === "ArrowUp") {
        pageindex--;
        try {
            let page = document.body.children[pageindex];
            if (page.className === "page") {
                page.scrollIntoView();
            } else pageindex ++;
        } catch {pageindex ++;}
    } else if (e.code === "ArrowDown") {
        pageindex++;
        try {
            let page = document.body.children[pageindex];
            if (page.className === "page") {
                page.scrollIntoView();
            } else pageindex --;
        } catch {pageindex --;}
    }
}, false);

// add page stylesheet
var link = document.createElement('style');
link.type = 'text/css';
link.innerHTML = `
html {
    scroll-behavior: smooth;
}
body {
    background-color: #fefaef;
}
.page {
    height: 100vh;
    box-sizing: border-box; /* include padding in box height*/
    /*border: 4px solid #646669;*/
    padding: 50px;
}
.button {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor:pointer;
    padding: 10px;
    background-color: #646669;
    border-radius: 8px;
    font-family: robotoMonoMedium, monospace;
    color: #fefaef;
}
text {
    color: #646669;
    font-size: 25px;
    font-family: robotoMonoMedium, monospace;
}
header {
    color: #646669;
    font-size: 40px;
    font-family: robotoMonoMedium, monospace;
}
`
document.getElementsByTagName('HEAD')[0].appendChild(link);
