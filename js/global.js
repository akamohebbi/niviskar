var editor = document.getElementById("editor");
var dialog_content = document.getElementById("dialog_content");

var front_matter = "";



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
        editor.focus();
    }, timeout);
}



/*
    dialog
*/

function dialog(title, msg, content_editable=false, width=512, on_closed=function() {}) {
    document.getElementById("dialog_title").innerText = title;

    dialog_content.innerText = msg;
    dialog_content.contentEditable = content_editable;

    document.getElementById("dialog_wrapper").style.width = width + "px";

    document.getElementById("dialog").style.display = "block";

    document.getElementById("dialog_close_btn").onclick = function() {
        document.getElementById("dialog").style.display = "none";
        on_closed();
    }
}



/*
    actions
*/

const actions = document.getElementsByClassName("action");

for (var i = 0; i < actions.length; i++) {
    actions[i].onclick = function() {
        switch(this.id) {
            case "action_fm":
                action_fm();
                break;
            
            case "action_bold":
                toast("wekpfokwepfok");
                break;
        
            case "action_about":
                action_about();
                break;

            default:
                dialog("خطای نرم افزار", "عملکرد دکمه تعریف شده نیست!", false, 256);
                break;
        }
    }
}



/*
    action about
*/

function action_about() {
    dialog("درباره نویسکار", "نویسکار یک پروژه آزاد و متن باز بوده و توسط آکام توسعه داده شده است")
}



/*
    action fm (front matter)
*/

function action_fm() {
    dialog("اطلاعات مدرک", front_matter, true, 512, function() {
        dialog_content.style.direction = "rtl";
        dialog_content.style.textAlign = "right";
    });

    dialog_content.style.direction = "ltr";
    dialog_content.style.textAlign = "left";
    dialog_content.focus();

    dialog_content.onkeydown = function() {
        front_matter = this.innerText;
    }
}
