$$.ready(function(){
	var myDate = new Date();
    var nowYear = myDate.getFullYear();
    var footerContent="Copyright "+nowYear+" South China Normal University. All Rights Reserved/华南师范大学 版权所有";
    $("#div_footer_copy_content").html(footerContent);
})
