/**
 * Created by hcc on 2017/8/6.
 */
define(['require','jquery'],function (require,$) {
    //切换导航
    function changePage() {
        $(".mui-tab-item").click(function(){
            var href = $(this).attr("data-href")

            window.location.href = "index.html#/"+href;

        })
    }
    //获取页面路由，激活相应导航页面
    (function getRouter() {
        var url = window.location.href;
        var url_name = url.substr(url.indexOf("#")+2);
        $(".mui-tab-item").each(function () {
            console.log($(this).attr("data-href"))
            if(url_name === $(this).attr("data-href")){

                $(this).addClass("mui-active").siblings().removeClass("mui-active")
            }

        })
    })()


    return{
        changePage : changePage
    }
})