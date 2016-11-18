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


function sort(list, queue) {
    var nodes = queue.children;
    var node_arr = [].slice.call(nodes);

    function change_node(node, value) {
        node.style.height = value + "px";
        node.innerText = value;
        node.style.marginTop = (100 - value) + "px";
    }

    function swap(i, j) {
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
        change_node(node_arr[i], list[i]);
        change_node(node_arr[j], list[j]);
    }

    function range_color(start, end) {
        var nn = node_arr.length;
        for (var i = 0; i < nn; i++) {
            if (i < start || i > end) {
                node_arr[i].backgroundColor = "rad";
            } else {
                node_arr[i].style.backgroundColor = "green";
            }
        }
    }


    var duration = 1000;

    function quick_sort(start, end) {
        //渲染颜色
        if(start>=end){
            return;
        }
        range_color(start, end);
        // var cmp = list[end];
        var loc = start;
        nodes[end].style.backgroundColor = "blue";
        function cmp(node_i, end) {
            if (node_i >= end) {
                nodes[node_i].style.backgroundColor = "red";
                // setTimeout(swap(loc,end),1000);
                swap(loc, end);
                setTimeout(function () {
                    quick_sort(start,loc-1);
                },duration);
                setTimeout(function () {
                    quick_sort(loc+1,end)
                },duration);
                return;
            }
            if (list[node_i] < list[end]) {
                swap(node_i, loc);
                loc++;
            }
            nodes[node_i].style.backgroundColor = "red";
            setTimeout(function () {
                cmp(node_i + 1, end);
            }, duration);
        }

        setTimeout(function () {
            cmp(start, end);
        }, duration);

    }
    quick_sort(0, list.length-1);
}


function get_child_nodes(value) {
    var child = document.createElement("div");
    child.innerText = value;
    child.style.height = value + "px";
    child.style.marginTop = (100 - value) + "px";
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
    var sort_btn = document.querySelector("#sort");
    var random_btn = document.querySelector("#random");

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
        var child = get_child_nodes(value);
        if (input_valid(value) && num_count(list.length)) {
            queue.insertBefore(child, queue.firstChild);
        }
        list.unshift(value);
    });

    var right_in = document.querySelector("#right_in");
    right_in.addEventListener("click", function () {
        var value = input.value;
        var child = get_child_nodes(value);
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

    sort_btn.addEventListener("click", function () {
        sort(list, queue);
    });

    random_btn.addEventListener("click", function () {
        queue.innerHTML = "";
        list.length = 0;
        for (var i = 0; i < 10; i++) {
            var num = 10 + Math.random() * 90;
            queue.appendChild(get_child_nodes(num));
            list.push(num);
        }

    })

}
init();