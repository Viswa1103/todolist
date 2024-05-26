const input = document.getElementById("input-box");
const listcontainer = document.querySelector(".listcontainer");

function Addtask() {
    if (input.value === '') {
        alert("You must enter the message");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    savedata()
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        savedata()
    }
}, false);

function savedata() {
    console.log(listcontainer.innerHTML)
    localStorage.setItem("data", listcontainer.innerHTML)
}

function showtask() {
    listcontainer.innerHTML = localStorage.getItem("data", '')
}
showtask()


