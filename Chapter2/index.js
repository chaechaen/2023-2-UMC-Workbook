function validateName() {
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const nameSuccess = document.getElementById("nameSuccess");
    const nameValue = name.value; // 사용자가 입력한 값 가져오기

    if (nameValue === "") {
        nameError.classList.remove("hide"); // 에러 문구 숨기지 않음
        nameSuccess.classList.add("hide"); // 성공 문구 숨김
    }
    else {
        nameError.classList.add("hide"); // 에러 문구 숨김
        nameSuccess.classList.remove("hide"); // 성공 문구 숨기지 않음
    }
}
// 이름 입력란에서 포커스를 잃을 때
document.getElementById("name").addEventListener("blur", function() {
    validateName(); // 이름 유효성 검사 수행
});

function validateNickname() {
const nickname = document.getElementById("nickname");
const nicknameError = document.getElementById("nicknameError");
const nicknameSuccess = document.getElementById("nicknameSuccess");
const nicknameValue = nickname.value;

    if (nicknameValue.length >= 2 && nicknameValue.length <= 5) {
        nicknameError.classList.add("hide");
        nicknameSuccess.classList.remove("hide");
    }
    else {
        nicknameError.classList.remove("hide");
        nicknameSuccess.classList.add("hide");
    }
}

function validateEmail() {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailSuccess = document.getElementById("emailSuccess");
    const emailValue = email.value;

    const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (emailReg.test(emailValue)) {
        emailError.classList.add("hide");
        emailSuccess.classList.remove("hide");
    }
    else {
        emailError.classList.remove("hide");
        emailSuccess.classList.add("hide");
    }
}

function validatePassword() {
    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const passwordSuccess = document.getElementById("passwordSuccess");
    const passwordValue = password.value;

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (passwordRegex.test(passwordValue)) {
        passwordError.classList.add("hide");
        passwordSuccess.classList.remove("hide");
    }
    else {
        passwordError.classList.remove("hide");
        passwordSuccess.classList.add("hide");
    }
}

function validateConfirm() {
    const password = document.getElementById("password");
    const passwordValue = password.value;
    const confirm = document.getElementById("confirm");
    const confirmError = document.getElementById("confirmError");
    const confirmSuccess = document.getElementById("confirmSuccess");
    const confirmValue = confirm.value;

    if (confirmValue === passwordValue) {
        confirmError.classList.add("hide");
        confirmSuccess.classList.remove("hide");
    }
    else {
        confirmError.classList.remove("hide");
        confirmSuccess.classList.add("hide");
    }
}


document.getElementById("name").addEventListener("input", function() {
    validateName();
});
document.getElementById("nickname").addEventListener("input", function() {
    validateNickname();
});
document.getElementById("email").addEventListener("input", function() {
    validateEmail();
});
document.getElementById("password").addEventListener("input", function() {
    validatePassword();
});
document.getElementById("confirm").addEventListener("input", function() {
    validateConfirm();
});

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};


