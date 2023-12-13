function iframe_change(btn_id) {
    if (btn_id == 'btn_nouth') {
        document.getElementById('call_tel').innerText = "電話:02-0000000";
        document.getElementById('call_address').innerText = "地址:台北市信義區OO路OO巷OO號3F";
        document.getElementById('call_iframe').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28937.993425568162!2d121.19206371562498!3d24.957635500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823ea50c732a5%3A0x1b5e6ee66e9fec49!2z57ev6IKyVGliYU1l6ZmE6Kit5Lit5aOi6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1700481215188!5m2!1szh-TW!2stw";
        document.getElementById('walk_func').innerText = "搭乘板南線到達信義安和站，";
        document.getElementById('walk_func_2').innerText = "走出2號出口後往前直行300公尺，";
    }
    else if (btn_id == 'btn_south') {
        document.getElementById('call_tel').innerText = "電話:07-0000000";
        document.getElementById('call_address').innerText = "地址:高雄市左營區中華路123號";
        document.getElementById('call_iframe').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4676872269783!2d121.54067797642479!3d25.052132837559075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab90d642cdc1%3A0x1459df8556710135!2z57ev6IKyVGliYU1l5Y-w5YyXSmF2YeWwsealremkiuaIkOePrQ!5e0!3m2!1szh-TW!2stw!4v1702435392405!5m2!1szh-TW!2stw";
        document.getElementById('walk_func').innerText = "搭乘捷運到達左營站，";
        document.getElementById('walk_func_2').innerText = "走出3號出口後往前直行200公尺，";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // 清除 localStorage
    localStorage.clear();
});