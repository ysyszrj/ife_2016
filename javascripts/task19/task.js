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
    if (pattern.test(value)) {
        var num = Number(value);
        if (num >= 10 && num <= 100) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

/**
 * 验证并在前端提示
 * @param val
 */
function input_valid(val) {
    var label_value = document.querySelector("#label_value")
    if (is_valid(val)) {
        label_value.innerText = "Right";
        return true;
    } else {
        label_value.innerText = "Not True";
        return false;
    }
}

/**
 *
 */
function num_count(num) {
    if (num > 60) {
        alert("Too much number!!");
        return false;
    } else {
        return true;
    }
}


function get_child_nodes(value) {
    var child = document.createElement("div");
    child.innerText = value;
    child.style.height = value+"px";
    child.style.marginTop = (100-value)+"px";
    return child;
}


/**
 * 初始化函数
 */
function init() {

    var list = [];

    var queue = document.querySelector("#queue");
    var left_in = document.querySelector("#left_in");
    var input = document.querySelector("#value");

    queue.addEventListener("click", function (e) {
        if (e.target != e.currentTarget) {
            var index = [].indexOf.call(queue.children, e.target);
            queue.removeChild(e.target);
            list.splice(index, 1);
        }

    });

    input.addEventListener("change", function (e) {
        var val = e.target.value;
        input_valid(val);
    });

    left_in.addEventListener("click", function () {
        var value = input.value;
        var child=get_child_nodes(value);
        if (input_valid(value) && num_count(list.length)) {
            queue.insertBefore(child, queue.firstChild);
        }
        list.unshift(value);
    });

    var right_in = document.querySelector("#right_in");
    right_in.addEventListener("click", function () {
        var value = input.value;
        var child=get_child_nodes(value);
        if (input_valid(value) && num_count(list.length)) {
            queue.insertBefore(child, queue.firstChild);
        }
        list.push(value);
    });

    var left_out = document.querySelector("#left_out");
    left_out.addEventListener("click", function () {
        queue.removeChild(queue.firstChild);
        list.shift();
    });

    var right_out = document.querySelector("#right_out");
    right_out.addEventListener("click", function () {
        queue.removeChild(queue.lastChild);
        list.pop();
    });


}
init();