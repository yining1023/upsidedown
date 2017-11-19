
let enabled = false;
let reloadOnce = false;

let toggle = function() {
    if (enabled) {
        document.getElementById('p5Sketch').remove();
        document.getElementById('p5Js').remove();

        let canvas = document.getElementById('defaultCanvas0');
        if (canvas) {
            console.log('removing canvas');
            canvas.parentNode.removeChild(canvas);
        }
        if (!reloadOnce) {
            reload = true;
            location.reload();
        }
    } else {
        // inject p5.js
        let p5Js = document.createElement('script');
        p5Js.id = "p5Js";
        p5Js.type = "text/javascript";
        p5Js.src = chrome.extension.getURL('p5.js');
        let head = document.getElementsByTagName('head')[0];
        head.insertBefore(p5Js, head.childNodes[0]);
        console.log("injected p5.js");

        // inject sketch.js
        let s = document.createElement('script');
        s.id = "p5Sketch";
        s.type = "text/javascript";
        s.src = chrome.extension.getURL('sketch.js');
        head.insertBefore(s, head.childNodes[1]);
        console.log("injected p5 sketch.js");
    }
    enabled = !enabled;
};

chrome.extension.onMessage.addListener((msg) => {
    if (msg.action === 'toggle') {
        toggle();
    }
});