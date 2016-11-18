/**
 * Created by ysysz on 2016/11/4.
 */

var data = [];

/**
 * 验证是否为数字
 * @param value 被验证的值
 * @returns {boolean}
 */
function is_valid(value) {
    var pattern = /^[\d\w\W]+$/;
    return pattern.test(value);
}

/**
 *
 * @param text
 * @returns {Array}
 */
function convert(text) {
    return text.trim().split(/[\s,\n、，\t]/g);
}


/**
 * 初始化函数
 */
function init() {

    var queue = document.querySelector("#queue");
    var left_in = document.querySelector("#left_in");
    var input = document.querySelector("#value1");
    var key_word = document.querySelector("#key_word");

    queue.addEventListener("click", function (e) {
        if (e.target != e.currentTarget) {
            queue.removeChild(e.target);
        }
    });

    left_in.addEventListener("click", function () {

        var value = input.value;
        var new_data = convert(value);
        data = new_data.concat(data);
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
        data = data.concat(new_data);
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
        data.shift();
    });

    var right_out = document.querySelector("#right_out");
    right_out.addEventListener("click", function () {
        queue.removeChild(queue.lastChild);
        data.pop();
    });

    var query_div = document.querySelector("#query");
    query_div.addEventListener("click",function () {
        var word = key_word.value.trim();
        render_div(word);
    })
}

function render_div(word) {

    var queue = document.querySelector("#queue");
    queue.innerHTML = "";
    var inner_str = "";
    for(var i=0;i<data.length;i++){
        if(word){
            inner_str += "<div>"+data[i].replace(word,"<span>"+word+"</span>")+"</div>";
        }
    }
    queue.innerHTML = inner_str;
}

init();