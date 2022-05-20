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