/**
 * Created by sandyphendro on 8/7/16.
 */

'use strict';

var holder = document.querySelector(".image-holder");
var images = holder.querySelectorAll('img');
var pTag = document.querySelector('p');
var cap = pTag.querySelector('span');
var interval;

for(var i = 0; i < images.length; i++) {
    var image = images[i];
    (function(pos) {
        image.onclick = function () {
            imageClickEventHandler(this, pos);
        }
    })(i);
}

function imageClickEventHandler(image, i){
    console.log(i);
    clearInterval(interval);
    setTimeout(function () {
        clearInterval(interval);
    }, 10000);
     interval = setInterval(function () {
        pTag.style.display = 'block';
        cap.innerHTML = image.src;
        setTimeout(hidePTag, 500);
    }, 1000);
}

function hidePTag() {
    pTag.style.display = 'none';
}
