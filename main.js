let background1 = document.getElementById("background1"),
    background2 = document.getElementById("background2"),
    background3 = document.getElementById("background3"),
    background4 = document.getElementById("background4"),
    background5 = document.getElementById("background5"),
    background6 = document.getElementById("background6"),
    background7 = document.getElementById("background7"),
    background8 = document.getElementById("background8"),
    no1Btn = document.getElementById("no1"),
    no2Btn = document.getElementById("no2"),
    no3Btn = document.getElementById("no3"),
    no4Btn = document.getElementById("no4"),
    no5Btn = document.getElementById("no5"),
    no6Btn = document.getElementById("no6"),
    no7Btn = document.getElementById("no7"),
    no8Btn = document.getElementById("no8"),
    closing1 = document.getElementsByClassName("close")[0];
closing2 = document.getElementsByClassName("close")[1];
closing3 = document.getElementsByClassName("close")[2];
closing4 = document.getElementsByClassName("close")[3];
closing5 = document.getElementsByClassName("close")[4];
closing6 = document.getElementsByClassName("close")[5];
closing7 = document.getElementsByClassName("close")[6];
closing8 = document.getElementsByClassName("close")[7];

no1Btn.onclick = function () {
    background1.style.display = "block";
}
no2Btn.onclick = function () {
    background2.style.display = "block";
}
no3Btn.onclick = function () {
    background3.style.display = "block";
}
no4Btn.onclick = function () {
    background4.style.display = "block";
}
no5Btn.onclick = function () {
    background5.style.display = "block";
}
no6Btn.onclick = function () {
    background6.style.display = "block";
}
no7Btn.onclick = function () {
    background7.style.display = "block";
}
no8Btn.onclick = function () {
    background8.style.display = "block";
}

closing1.onclick = function () {
    background1.style.display = "none";
}
closing2.onclick = function () {
    background2.style.display = "none";
}
closing3.onclick = function () {
    background3.style.display = "none";
}
closing4.onclick = function () {
    background4.style.display = "none";
}
closing5.onclick = function () {
    background5.style.display = "none";
}
closing6.onclick = function () {
    background6.style.display = "none";
}
closing7.onclick = function () {
    background7.style.display = "none";
}
closing8.onclick = function () {
    background8.style.display = "none";
}



window.onclick = function (event) {
    if (event.target == background1) {
        background1.style.display = "none";
    }
    if (event.target == background2) {
        background2.style.display = "none";
    }
    if (event.target == background3) {
        background3.style.display = "none";
    }
    if (event.target == background4) {
        background4.style.display = "none";
    }
    if (event.target == background5) {
        background5.style.display = "none";
    }
    if (event.target == background6) {
        background6.style.display = "none";
    }
    if (event.target == background7) {
        background7.style.display = "none";
    }
    if (event.target == background8) {
        background8.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var videoLinks = document.querySelectorAll('.video-link');
    for (var i = 0; i < videoLinks.length; i++) {
        videoLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            var videoIframe = document.createElement('iframe');
            videoIframe.setAttribute('src', this.getAttribute('href'));
            videoIframe.classList.add('video-iframe');
            var videoOverlay = document.createElement('div');
            videoOverlay.classList.add('video-overlay');
            var videoPlayIcon = document.createElement('i');
            videoPlayIcon.classList.add('fas', 'fa-play');
            videoOverlay.appendChild(videoPlayIcon);
            this.parentNode.appendChild(videoOverlay);
            this.parentNode.appendChild(videoIframe);
        });
    }
});




