
console.log('hello world');


let installButton = document.createElement('button');



function checkOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches && mobileModal){
        // flexDiv.style.setProperty('flex-direction', 'column');
        // flexDiv.style.setProperty('align-items',  'center');
        // console.log('Portrait orientation');
    } else if (window.matchMedia("(orientation: landscape)").matches && mobileModal){
        // alert('Please make sure device is Vertical.')
        // console.log("landscape orientation");
    }
}