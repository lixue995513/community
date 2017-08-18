/**
 * Created by hcc on 2017/8/1.
 */
window.onload = function(){
    $(".file").on("change","input[type='file']",function(){

        var filePath=$(this).val();

        if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
            $(this).next(".fileerrorTip").html("").hide();
            var arr=filePath.split('\\');
            var fileName=arr[arr.length-1];
            $(this).prev(".showFileName").html("文件已上传");
        }else{

            $(this).prev(".showFileName").html("").hide();
            $(this).next(".fileerrorTip").html("文件上传错误").show();
            return false
        }
    });

}