var question_headers = document.querySelectorAll(".question-header");
question_headers.forEach(question_header => {
    question_header.onclick = () => {
        var attachedQuestionBody = question_header.parentElement.querySelector(".question-body");
        if (attachedQuestionBody.className == "question-body qb-inactive") {
            attachedQuestionBody.className = "question-body qb-active";
            question_header.querySelector(".dropdown-btn").className = "dropdown-btn dd-btn-active"
        } else {
            attachedQuestionBody.className = "question-body qb-inactive";
            question_header.querySelector(".dropdown-btn").className = "dropdown-btn"
        }


    }
});

var hamburgerBtn = document.querySelector(".hamburger");
hamburgerBtn.onclick = () => {
    var mobileNavBar = document.querySelector(".nav-mobile");
    console.log(mobileNavBar);

    if (mobileNavBar.className == "nav-mobile") {
        mobileNavBar.classList.add("nvm-active");
        document.body.classList.add("stop-scroll");
    } else {
        mobileNavBar.classList.remove("nvm-active")
        document.body.classList.remove("stop-scroll");
    }
}

const openDlOl = () => {
    var downloadOverlay = document.getElementById('download-overlay');

    downloadOverlay.classList.remove('invisible');
    document.body.classList.add('stop-scroll')
    document.querySelector("main").style.filter = "contrast(50%) brightness(110%)";
}

const closeDlOl = () => {
    var downloadOverlay = document.getElementById('download-overlay');

    downloadOverlay.classList.add('invisible')
    document.body.classList.remove('stop-scroll')
    document.querySelector("main").style.filter = "";
}

const toggleDlOl = () => {
    var downloadOverlay = document.getElementById('download-overlay');

    if (downloadOverlay.classList.contains('invisible')) {
        openDlOl();
    } else {
        closeDlOl();
    }
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
            console.log(btn);
            btn.onclick = () => {
                toggleDlOl();
            }

            document.querySelector("#close-download").onclick = () => closeDlOl();
        });
    }
}