/**
 * Created by hcc on 2017/8/18.
 */
    $(function() {
        $(".input-close").hide();
        displayPwd();
        remember();
        showActionError();
        autoHeight_login();
        dispValidateCode();
        displayClearBtn();
        setTimeout(displayClearBtn, 200 ); //延迟显示,应对浏览器记住密码
    });

//是否显示清除按钮
function displayClearBtn(){
    if(document.getElementById("username").value != ''){
        $("#username").siblings(".input-close").show();
    }
    if(document.getElementById("password").value != ''){
        $(".ciphertext").siblings(".input-close").show();
    }
    if($("#codeLevel").val()!="" && $("#codeLevel").val()!='0'){
        if($("#validateCode").val()!=""){
            $("#validateCode").siblings(".input-close").show();
        }
    }
}

//清除input内容
$('.input-close').click(function(e){
    $(e.target).parent().find(":input").val("");
    $(e.target).hide();
    $($(e.target).parent().find(":input")).each(function(i){
        if(this.id=="ptext" || this.id=="password"){
            $("#password").val('');
            $("#ptext").val('');
        }
    });
});

//设置password字段的值
$('.txt-password').bind('input',function(){
    $('#password').val($(this).val());
});

//显隐密码切换
function displayPwd(){
    $(".tp-btn").toggle(
        function(){
            $(this).addClass("btn-on");
            var textInput = $(this).siblings(".plaintext");
            var pwdInput = $(this).siblings(".ciphertext");
            pwdInput.hide();
            textInput.val(pwdInput.val()).show().focusEnd();
        },
        function(){
            $(this).removeClass("btn-on");
            var textInput = $(this).siblings(".plaintext ");
            var pwdInput = $(this).siblings(".ciphertext");
            textInput.hide();
            pwdInput.val(textInput.val()).show().focusEnd();
        }
    );
}

//一个月免登陆切换
function remember(){
    $("#rememberMe").toggle(
        function(){
            $(this).removeClass("login-free-selected");
            $('#remember').val("false");
        },
        function(){
            $(this).addClass("login-free-selected");
            $('#remember').val("true");
        }
    );
}

//监控用户输入
$(":input").bind('input propertychange', function() {
    if($(this).val()!=""){
        $(this).siblings(".input-close").show();
    }else{
        $(this).siblings(".input-close").hide();
    }
});