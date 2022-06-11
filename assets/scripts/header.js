var question_headers = document.querySelectorAll(".question-header");
question_headers.forEach(question_header => {
    question_header.onclick = () => {
        var attachedQuestionBody = question_header.parentElement.querySelector(".question-body");

        attachedQuestionBody.classList.toggle("qb-inactive");
        attachedQuestionBody.classList.toggle("qb-active");
        question_header.querySelector(".dropdown-btn").classList.toggle("dd-btn-active");
    }
});

var hamburgerBtn = document.querySelector(".hamburger");
hamburgerBtn.onclick = () => {
    var mobileNavBar = document.querySelector(".nav-mobile");

    mobileNavBar.classList.toggle("nvm-active");
    document.body.classList.toggle("stop-scroll");
}

const toggleDlOl = () => {
    var downloadOverlay = document.getElementById('download-overlay');

    downloadOverlay.classList.toggle("invisible");
    document.body.classList.toggle("stop-scroll");
    document.querySelector("main").classList.toggle("overlayed");
}

var downloadBtns = document.querySelectorAll("header a.btn-wbg");
document.body.onload = () => {
    if( /Android/i.test(navigator.userAgent) ) {
        downloadBtns.forEach(btn => {
            btn.href = "https://play.google.com/";
        });
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        downloadBtns.forEach(btn => {
            btn.href = "https://apps.apple.com/";
        });
    }    
    else {
        downloadBtns.forEach(btn => {
            btn.onclick = () => {
                toggleDlOl();
            }

        });
        document.querySelector("#close-download").onclick = () => toggleDlOl();
    }
}