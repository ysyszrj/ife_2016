/**
 * Created by ysysz on 2016/11/4.
 */

/**
 * 验证是否为数字
 * @param value 被验证的值
 * @returns {boolean}
 */
function is_valid(value) {
    var pattern = /^\d+$/;
    return pattern.test(value);
}

/**
 *
 * @param text
 * @returns {Array}
 */
function convert(text) {
    return text.split(/[\s,\n、，\t]/g);
}


/**
 * 初始化函数
 */
function init() {

    var queue = document.querySelector("#queue");
    var left_in = document.querySelector("#left_in");
    var input = document.querySelector("#value1");

    queue.addEventListener("click", function (e) {
        if (e.target != e.currentTarget) {
            queue.removeChild(e.target);
        }
    });

    left_in.addEventListener("click", function () {

        var value = input.value;
        var new_data = convert(value);
        for (var i=new_data.length-1;i>=0;i--) {
            var item = new_data[i];
            if (is_valid(item)) {
                var child = document.createElement("div");
                child.innerText = item;
                queue.insertBefore(child, queue.firstChild);
            } else {
                alert("input number is not right");
            }
        }

    });

    var right_in = document.querySelector("#right_in");
    right_in.addEventListener("click", function () {
        var value = input.value;
        var new_data = convert(value);
        for (var i=0,nn = new_data.length;i<nn;i++) {
            var item = new_data[i];
            if (is_valid(item)) {
                var child = document.createElement("div");
                child.innerText = item;
                queue.appendChild(child);
            } else {
                alert("input number is not right");
            }
        }
    });

    var left_out = document.querySelector("#left_out");
    left_out.addEventListener("click", function () {
        queue.removeChild(queue.firstChild);
    });

    var right_out = document.querySelector("#right_out");
    right_out.addEventListener("click", function () {
        queue.removeChild(queue.lastChild);
    });

}
init();