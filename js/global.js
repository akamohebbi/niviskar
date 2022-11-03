var editor = document.getElementById("editor");



/*
    on loaded
*/

window.onload = function() {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";

        setTimeout(() => {
            document.getElementById("wrapper").style.display = "block";

            editor.style.top = document.getElementById("toolbar").offsetHeight + "px";
            editor.focus();
        }, 250);
    }, 1500);
}



/*
    toast
*/

function toast(msg, timeout=3500) {
    document.getElementById("toast").style.display = "block";
    document.getElementById("toast_msg").innerText = msg;

    setTimeout(() => {
        document.getElementById("toast").style.display = "none";
    }, timeout);
}



/*
    dialog
*/

function dialog(title, msg, content_editable=false) {
    document.getElementById("dialog_title").innerText = title;

    document.getElementById("dialog_content").innerText = msg;
    document.getElementById("dialog_content").contenteditable = content_editable;
    
    document.getElementById("dialog").style.display = "block";

    document.getElementById("dialog_close_btn").onclick = function() {
        document.getElementById("dialog").style.display = "none";
    }
}

setTimeout(() => {
    dialog("fweiojfiowef", "fwejfwejfopwejfopwejfpoewjpfojwepofjwepofjwopejfpewojfpowejfpowejf", true)
}, 3500);