/**
 * Created by hcc on 2017/8/17.
 */
window.onload = function(){
    mui.init({
        swipeBack: true //启用右滑关闭功能
    });
    var slider = mui("#slider");
    slider.slider({
        interval: 5000
    });
}