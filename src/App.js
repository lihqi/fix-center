import React, { useEffect } from "react";
import "./App.css";
let $ = window.$;
let arr = [];
let len = 13;
for (let i = 0; i < len; i++) {
    arr.push(i);
}
let fixCenter = function() {
    let el = $(".fix-center");
    el.find(".fix-item").remove();
    let wrapWidth = el.width();
    let elChildren = el.children();
    let len = elChildren.length;
    let item = $(elChildren[0]);
    let itemWidth = item.width();
    let itemHeight = item.height();
    let itemMarginTop = parseInt(item.css("marginTop"), 10);
    let itemMarginLeft = parseInt(item.css("marginLeft"), 10);
    let boxWidth = itemWidth + itemMarginLeft;
    let boxHeight = itemHeight + itemMarginTop;
    // 每一行有几个
    let size = Math.floor(wrapWidth / boxWidth);
    // 最后一行有几个
    let lastRowSize = len % size;
    if (lastRowSize) {
        // 需要添加多少个
        let needAdd = size - lastRowSize;
        let fixBox =
            '<div class="fix-item" style="width:' +
            boxWidth +
            "px;height:" +
            boxHeight +
            'px;display: inline-block;visibility: hidden;"></div>';
        let fixDom = "";
        for (let j = 0; j < needAdd; j++) {
            fixDom += fixBox;
        }
        el.append(fixDom);
    }
};
$(window).resize(function(e) {
    fixCenter();
});
function App() {
    useEffect(() => {
        fixCenter();
    });
    return (
        <div className="App">
            <div className="wrap">
                <div className="wrap-content fix-center">
                    {arr.map(item => (
                        <div className="card" key={item}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
