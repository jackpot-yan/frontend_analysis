console.log('运行js')
// let list = document.getElementsByClassName("card-container");
// console.log(list)
// for (let i = 0; i < list.length; i++) {
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
    let e = event || window.event;
    let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    let x = e.pageX || e.clientX + scrollX;
    let y = e.pageY || e.clientY + scrollY;
    //alert('x: ' + x + '\ny: ' + y);
    return {'x': x, 'y': y};
}

document.onmouseover = function (event) {
    event = getMousePos(event);
    let element = document.elementFromPoint(event.x, event.y);
    console.log(element);
    element.onmouseover = function () {
        element.style.backgroundColor = '#FF8888';
    };
    element.parentElement.onmouseover = function () {
        element.parentElement.style.backgroundColor = '#FFDD55'
    }
    element.onmouseout = function () {
        element.style.backgroundColor = "";
    };
    element.parentElement.onmouseout = function () {
        element.parentElement.style.backgroundColor = "";
    }
}
