/**
 * Created by ysysz on 2016/5/22.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

var city_input = document.querySelector("#aqi-city-input");
var aqi_input = document.querySelector("#aqi-value-input");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city_name = city_input.value.trim();
    var pattern_city_name = /^[A-Za-z\u4E00-\u9FA5]+$/;
    if(!pattern_city_name.test(city_name)){
        alert("城市名字不正确，只能输入中文或者英文");
        return;
    }
    var pattern_aqi=/^[0-9]+$/;
    //还可以直接用\d
    var city_aqi = aqi_input.value.trim();
    if(!pattern_aqi.test(city_aqi)){
        alert("城市的分数只能是数字!")
        return;
    }
    // console.log(aqiData);
    aqiData[city_name]=parseInt(city_aqi);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table_content="<tr> <td>城市</td><td>空气质量</td><td>操作</td> </tr>";
    for(var city_name in aqiData){
        table_content+= "<tr> <td>"+city_name+"</td><td>"+aqiData[city_name]+'</td><td><button data-city="'+city_name+'">删除</button></td> </tr>';
    }
    document.querySelector("#aqi-table").innerHTML=table_content;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(e) {
    if(e.target.nodeName.toLowerCase()==="button"){
        delete aqiData[e.target.dataset.city];
    }
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.querySelector("#add-btn").onclick=addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    document.querySelector("#aqi-table").onclick=delBtnHandle;
}

init();