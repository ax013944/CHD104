var str_1 = "", str_2 = "", str_3 = "", str_4 = "", str_5 = "", str_6 = "", str_7 = "";
var choose_status_1 = -1, choose_status_2 = -1, choose_status_3 = -1;

function $id(id) {
    return document.getElementById(id);
}

// 顯示遮罩和燈箱
function openLightbox() {
    $id('overlay').style.display = 'block';
    $id('lightbox').style.display = 'flex';
}

//最低長度檢查
function check_length(id, num) {
    return $id(id).value.length >= num ? 1 : -1;
}

//name
function name_check() {
    if (check_length("id", 2) === -1) {
        str_1 = "必須超過2字元";
        return -1;
    } else if (!/^[\u4e00-\u9fa5a-zA-Z0-9_ ]+$/.test($id("id").value)) {
        str_1 = "不能有非法字元";
        return -1;
    } else {
        str_1 = "";
        return 1;
    }
}

//tel
function tel_check() {
    if (!/^(\+886|0)9[0-9]{8}$/.test($id("tel").value)) {
        str_2 = "不是有效的行動電話";
        return -1;
    } else {
        str_2 = "";
        return 1;
    }
}

//email
function email_check() {
    if (check_length("email", 6) === -1) {
        str_3 = "必須超過6字元";
        return -1;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/.test($id("email").value)) {
        str_3 = "不是有效的email";
        return -1;
    } else {
        str_3 = "";
        return 1;
    }
}

//radio_i get
function radio_i(group_name) {
    let radioButtons = document.getElementsByName(group_name);

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return i;
        }
    }

    return -1;
}

function radio_move(group_name, choose_status) {
    let radioButtons = document.getElementsByName(group_name);
    let num = radio_i(group_name);
    let checK_num = Number(window[choose_status]);

    if (checK_num >= 0 && radioButtons[num].checked == radioButtons[checK_num].checked) {
        radioButtons[num].checked = false;
        window[choose_status] = Number(-1);
    } else {
        window[choose_status] = Number(num);
    }
}
//radio check
function check_radio(group_name, str) {
    let radioButtons = document.getElementsByName(group_name);

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            window[str] = "";
            // 如果找到被选中的按钮，返回 true
            return 1;
        }
    }

    // 如果没有按钮被选中，返回 false，並對str名稱的變數增加提示訊息
    if (str == "str_5") {
        window[str] = "必須勾選我同意";
    } else {
        window[str] = "必須至少選擇一個";
    }

    return -1;
}

//file name split
function getfileinfo(filestr) {
    let dotpos = filestr.lastIndexOf(".");
    let filename = filestr.substring(0, dotpos);
    let filext = filestr.substr(dotpos + 1);
    return [filename, filext];
}

//file check
function file_check() {
    var fileInput = document.getElementById('file');

    if (fileInput.files.length == 1) {
        ;

        if (getfileinfo(fileInput.files[0].name)[1] != "ppt") {
            str_7 = "上傳檔案格式不符"
            $id("file_name").innerText = "";
            return -1;
        }
        else {
            str_7 = "";
            $id("file_name").innerText = getfileinfo(fileInput.files[0].name)[0];
            return 1;
        }
    } else {
        str_7 = "請上傳ppt檔案"
        $id("file_name").innerText = "";
        return -1;
    }
}

//檢查func
function submit_check(btn) {
    let check_num = 0;
    if (btn == "submit_btn_1") {
        check_num += name_check();
        check_num += tel_check();
        check_num += email_check();
        check_num += check_radio("job_title", "str_6");
        check_num += file_check();
        check_num += check_radio("agree", "str_5");

        if (check_num == 6) {
            return 1;
        }
        else {
            return -1;
        }
    } else if (btn == "submit_btn_2") {
        check_num += name_check();
        check_num += tel_check();
        check_num += email_check();
        check_num += check_radio("school", "str_4");
        check_num += check_radio("agree", "str_5");

        if (check_num == 5) {
            return 1;
        }
        else {
            return -1;
        }
    }
}

//name 監控
document.getElementById("id").addEventListener('input', function () {
    if ($id("id").value.trim() != "") {
        name_check();
    } else {
        str_1 = "";
    }
    $id("hit_1").innerText = str_1;
});

//tel 監控
document.getElementById("tel").addEventListener('input', function () {
    if ($id("tel").value.trim() != "") {
        tel_check();
    } else {
        str_2 = "";
    }
    $id("hit_2").innerText = str_2;
});

//email 監控
document.getElementById("email").addEventListener('input', function () {
    if ($id("email").value.trim() != "") {
        email_check();
    } else {
        str_3 = "";
    }
    $id("hit_3").innerText = str_3;
});

//agree 監控
document.getElementsByName("agree")[0].addEventListener('click', function () {
    radio_move("agree", "choose_status_3");
    check_radio("agree", "str_5");
    $id("hit_5").innerText = str_5;
});

//submit join_us.html
if (window.location.pathname.split('/').pop() == "join_us.html") {
    //上傳文件監控
    document.getElementById("file").addEventListener('input', function () {
        file_check();
        $id("hit_7").innerText = str_7;
    });

    document.getElementsByName("job_title").forEach(function (radioButton) {
        radioButton.addEventListener('click', function () {
            radio_move("job_title", "choose_status_2");
            check_radio("job_title", "str_6");
            $id("hit_6").innerText = str_6;
        });
    });

    document.getElementById("submit_btn_1").addEventListener('click', function () {
        if (submit_check("submit_btn_1") == 1) {

            // 监听表单提交事件
            $id("myform").addEventListener("submit", function (event) {
                // 阻止默认的表单提交行为
                event.preventDefault();

                // 创建一个新的 FormData 对象，用于将表单数据包装起来
                const formData = new FormData(this);

                // 使用 AJAX 发送表单数据

                // 创建了一个 XMLHttpRequest 对象，用于发送 HTTP 请求。
                const xhr = new XMLHttpRequest();
                // 设置了请求的方法（POST）、请求的 URL（form.action 表示表单的 action 属性，即提交到的处理页面），以及是否异步（true 表示异步）。
                xhr.open("POST", this.action, true);
                // 为 xhr 对象的状态变化事件添加了监听器，当 xhr 对象的状态变化时，会执行内部的回调函数。

                xhr.onreadystatechange = function () {
                    // xhr.readyState=== 4&&xhr.status === 200
                    if (xhr.readyState === 4) {
                        // 请求成功，可以在这里处理返回的数据
                        // 调用 openLightbox() 函数
                        openLightbox();
                    }
                };

                // 发送 FormData
                xhr.send(formData);
            });
        }

        // 你的规则提示信息
        $id("hit_1").innerText = str_1;
        $id("hit_2").innerText = str_2;
        $id("hit_3").innerText = str_3;
        $id("hit_6").innerText = str_6;
        $id("hit_7").innerText = str_7;
        $id("hit_5").innerText = str_5;
    });
}

//submit participate.html
if (window.location.pathname.split('/').pop() == "participate.html") {

    document.getElementsByName("school").forEach(function (radioButton) {
        radioButton.addEventListener('click', function () {
            radio_move("school", "choose_status_1");
            check_radio("school", "str_4");
            $id("hit_4").innerText = str_4;
        });
    });

    document.getElementById("submit_btn_2").addEventListener('click', function () {
        if (submit_check("submit_btn_2") == 1) {
            // 监听表单提交事件
            $id("myform").addEventListener("submit", function (event) {
                // 阻止默认的表单提交行为
                event.preventDefault();

                // 创建一个新的 FormData 对象，用于将表单数据包装起来
                const formData = new FormData(this);

                // 使用 AJAX 发送表单数据

                // 创建了一个 XMLHttpRequest 对象，用于发送 HTTP 请求。
                const xhr = new XMLHttpRequest();
                // 设置了请求的方法（POST）、请求的 URL（form.action 表示表单的 action 属性，即提交到的处理页面），以及是否异步（true 表示异步）。
                xhr.open("POST", this.action, true);
                // 为 xhr 对象的状态变化事件添加了监听器，当 xhr 对象的状态变化时，会执行内部的回调函数。

                xhr.onreadystatechange = function () {
                    // xhr.readyState=== 4&&xhr.status === 200
                    if (xhr.readyState === 4) {
                        // 请求成功，可以在这里处理返回的数据
                        // 调用 openLightbox() 函数
                        openLightbox();
                    }
                };

                // 发送 FormData
                xhr.send(formData);
            });
        }

        // 你的规则提示信息
        $id("hit_1").innerText = str_1;
        $id("hit_2").innerText = str_2;
        $id("hit_3").innerText = str_3;
        $id("hit_4").innerText = str_4;
        $id("hit_5").innerText = str_5;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // 清除 localStorage
    localStorage.clear();
});