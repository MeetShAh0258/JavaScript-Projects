let toastBox = document.getElementById("toastBox");

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted!';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again!';

function showToast(message) {
    let toast = document.createElement('div');
    toast.classList.add('toast');

    toast.innerHTML = message;
    toastBox.appendChild(toast);

    if(message.includes("error")) {
        toast.classList.add("error");
    }
    if(message.includes("Invalid")) {
        toast.classList.add("invalid");
    }

    setTimeout(() => {
        toast.remove("");
    }, 6000);
}