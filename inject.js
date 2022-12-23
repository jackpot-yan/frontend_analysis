console.log('运行js')
// var list = document.getElementsByClassName("card-container");
// console.log(list)
// for (var i = 0; i < list.length; i++) {
//     //为li注册鼠标进入事件
//     list[i].onmouseover = function () {
//         //设置其背景颜色为黄色
//         this.style.backgroundColor = "yellow";
//     };
//     //为li注册鼠标离开事件
//     list[i].onmouseout = function () {
//         //恢复到这个标签默认的颜色
//         this.style.backgroundColor = "";
//     };
// }

function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    //alert('x: ' + x + '\ny: ' + y);
    return {'x': x, 'y': y};
}

document.onmouseover = function (event) {
    event = getMousePos(event);
    var element = document.elementFromPoint(event.x, event.y);
    console.log(element);
    element.onmouseover = function () {
        this.style.backgroundColor = 'red';
    };
    element.parentElement.onmouseover = function () {
        this.style.backgroundColor = 'yellow'
    }
    element.onmouseout = function () {
        this.style.backgroundColor = "";
    };
    element.parentElement.onmouseover = function () {
        this.style.backgroundColor = "";
    }
}
