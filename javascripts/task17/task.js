// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}

function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = '';
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day",
    selector: null
};

/**
 * 渲染图表
 */
function renderChart() {
    var width = pageState.selector.getBoundingClientRect().width;
    var height = pageState.selector.getBoundingClientRect().height;
    var fragment = document.createDocumentFragment();

    var data = chartData[pageState.nowSelectCity][pageState.nowGraTime];
    var items = Object.keys(data);
    var max_value = 500;
    var nn = items.length;
    var grid = width / nn;
    var bar_w = grid * 0.8;
    var padding = grid * 0.1;
    for (var key in data) {
        var value = data[key]/max_value*height;
        var ele = document.createElement("div");
        ele.style.height = value;
        ele.style.width = bar_w;
        ele.style.marginLeft = padding;
        ele.style.marginRight = padding;
        ele.style.marginTop = height - value;
        ele.classList.add("bar");
        fragment.appendChild(ele);
    }
    pageState.selector.innerHTML = "";
    pageState.selector.appendChild(fragment);

    // pageState.selector.

    console.log("renderChart " + pageState.nowGraTime + " " + pageState.nowSelectCity);
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
    // 确定是否选项发生了变化
    var type = event.target.value;
    if (event.target.tagName.toLowerCase() === "input") {
        if (type !== pageState.nowGraTime) {
            // 设置对应数据
            pageState.nowGraTime = type;
            renderChart();
            // 调用图表渲染函数
        }
    }

}

/**
 * select发生变化时的处理函数
 */
function citySelectChange(e) {
    // 确定是否选项发生了变化
    var city_type = e.target.selectedOptions[0].innerHTML;
    if (city_type !== pageState.nowSelectCity) {
        // 设置对应数据
        pageState.nowSelectCity = city_type;
    }
    renderChart();
    // 调用图表渲染函数
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    var form_gra = document.querySelector("#form-gra-time");
    form_gra.addEventListener("click", graTimeChange, true);
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    var city_choice = document.querySelector("#city-select");
    city_choice.innerHTML = "";
    for (var ele in aqiSourceData) {
        if (pageState.nowSelectCity === -1) {
            pageState.nowSelectCity = ele;
        }
        city_choice.innerHTML += "<option>" + ele + "</option>";
    }
    // 给select设置事件，当选项发生变化时调用函数citySelectChange
    city_choice.addEventListener("change", citySelectChange, true);
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    // 处理好的数据存到 chartData 中
    //时间，数据大小么

    pageState["selector"] = document.querySelector(".aqi-chart-wrap");
    var week_base = new Date("2015-12-29");

    for (var city in aqiSourceData) {
        chartData[city] = {};
        var city_info = aqiSourceData[city];
        chartData[city]["day"] = city_info;
        chartData[city]["week"] = {};
        chartData[city]["month"] = {};
        var days = Object.keys(city_info);
        days.sort();
        var gap = 604800000;
        var nn = days.length;
        var week_day_count = 0;
        var week_sum = 0;
        var month_day_count = 0;
        var month_sum = 0;
        var tag_month = days[0].slice(0, 7);
        var tag_week = Math.floor((new Date(days[0]) - week_base) / gap);
        for (var i = 0; i < nn; i++) {
            var cur_date = days[i];
            var cur_num = city_info[cur_date];
            var cur_month = days[i].slice(0, 7);
            var duration = new Date(days[i]) - week_base;
            var week_stamp = Math.floor(duration / gap);
            if (week_stamp === tag_week) {
                week_sum += cur_num;
                week_day_count++;
            } else {
                chartData[city]["week"][tag_week] = week_sum / week_day_count;
                week_sum = cur_num;
                week_day_count = 1;
                tag_week = week_stamp;
            }
            if (cur_month === tag_month) {
                month_sum += cur_num;
                month_day_count++;
            } else {
                chartData[city]["month"][tag_month] =  month_sum / month_day_count;
                month_sum = cur_num;
                month_day_count = 1;
                tag_month = cur_month;
            }
        }
        chartData[city]["week"][tag_week] = week_sum / week_day_count;
        chartData[city]["month"][tag_month] = month_sum / month_day_count;
    }
}

/**
 * 初始化函数
 */
function init() {
    initGraTimeForm();
    initCitySelector();
    initAqiChartData();
    renderChart();
}

init();