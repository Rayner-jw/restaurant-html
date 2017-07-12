
 //显示第一个菜类
	$('.content li:first .food').addClass("food1");
/*home菜式导航*/
    var $food1 = $('.food1');
    var $last = $food1;
    var $lis = $('.content li');
    $lis.on('click',function(e) {
        $last.prev().css('color', '#9d9d9d');
        $last.css('display', 'none');
        $(this).children().next().css('display', 'block');
        $(this).children().css('color', '#EEEE00');
        $last = $(this).children().next();
		$('.food').css('z-index','0');
		$('.content .nav').css('height','50px');
		e.stopPropagation();
    });
/*home菜式导航点击下拉*/
	$('.click_down').on('click',function(){
		if($('.content .nav').css('height')=='50px'){
			$('.food').css('z-index','-1');
			$('.content .nav').css('height','100px');
		}else{
			$('.food').css('z-index','0');
			$('.content .nav').css('height','50px');
		}
	});
$(document).ready(function(){
	
    /*home菜品添加*/
    $f_plus = $('.food_area a');
    $orderNum = $('.footer .badge');
    if(Number($orderNum.text())==0){

    }else{
        $orderNum.css('display','block');
    }
    $f_plus.on('click',function(){
        $('.footer .badge').text(function(index,text){
            return Number(text)+1;
        });
		localStorage.setItem('ORDERED_NUM',Number(localStorage.getItem('ORDERED_NUM'))+1);
        $('.footer .badge').css('display','block');
    });


    /*ordered数量加减*/
    $num_add = $('.food_num').next();
    $num_minus = $('.food_num').prev();
    $num_add.on('click',function(){
        /*数值*/
        $f_ordered_num = $(this).prev().val();
        $(this).prev().val(Number($f_ordered_num)+1);
        /*价格*/
        $(this).closest('td').next().text(function(index,text){
            return Number(text) + Number(text)/$f_ordered_num;
        });
		/*右下角已点数值*/
		localStorage.setItem('ORDERED_NUM',Number(localStorage.getItem('ORDERED_NUM'))+1);
		$('.footer .badge').text(localStorage.getItem('ORDERED_NUM'));
    });
    $num_minus.on('click',function(){

        if(Number($(this).next().val())-1) {
            $f_ordered_num = $(this).next().val();
            $(this).next().val(Number($f_ordered_num) - 1);
            $(this).closest('td').next().text(function(index,text){
                return Number(text) - Number(text)/$f_ordered_num;
            });
        }else{
            $(this).closest('tr').css('display','none');
        }
		/*右下角已点数值*/
		localStorage.setItem('ORDERED_NUM',Number(localStorage.getItem('ORDERED_NUM'))-1);
		$('.footer .badge').text(localStorage.getItem('ORDERED_NUM'));
    });
    /*获取桌号*/
    $('.t_num').text(localStorage.getItem('TABLE_NUM'));
});

