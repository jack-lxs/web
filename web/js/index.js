$.fn.lun =function(option){
    //定义变量 接收传递进来的数据
    var data = option.data;

    //多少张图片
    var len = data.length;

    //图片字符串
    var pic_html ="";

    //定义导航点的字符串 //先定义后使用
    var point_html = "";

    //循环
    for(var i =0;i<len;i++){
        //图片拼接
        pic_html +='<li><a href="'+data[i].url+'"><img src="'+data[i].src+'" alt=""></a></li>';
        
        //导航点拼接
        point_html +='<li></li>';
    }
    //再拼接一张轮播图再最后面 
    pic_html +='<li><a href="'+data[0].url+'"><img src="'+data[0].src+'" alt=""></a></li>';
    
    //渲染字符串
    //$(this) ===$('container')
    $(this).find("ul").html(pic_html);
    $(this).find("ol").html(point_html);
    $(this).find("ol").children().eq(0).addClass("active");
  

    //定义索引值
    var index = 0;
    var key = 0;

    var width =$(this).find("ul").children().eq(0).width();
    // console.log(width)
    //定义定时器
    var timer = null;

    var $ul = $(this).find("ul");
    var $ol = $(this).find("ol");
    // console.log($ul)
    
    var autoPlay =function(){
        // console.log("111")
        index ++;
        key++;
        // console.log(index) 
        // console.log(len)
        if(index > len){
            index = 1;
            $ul.css("marginLeft",0);
        }
        if(key>len-1){
            key = 0;
            
        }
        //动画设置ul标签的位置
        $ul.animate({marginLeft:-(width*index)});

        //设置导航点
       
        $ol.children().eq(key).addClass("active");
        $ol.children().eq(key).siblings().removeClass("active");
    }

     timer = setInterval(autoPlay,1500);
 
       //鼠标移入，停止轮播， 鼠标移出，继续轮播

       $(this).hover(function(){
            clearInterval(timer);
           
       },function(){
            clearInterval(timer);
            //继续定时器
            timer = setInterval(autoPlay,1500);
       })
   
       //导航点切换轮播图
       $(".propagation ol").delegate('li','click',function(){  //事件委托

            var currentIndex = $(this).index();

            index = currentIndex;
            key = currentIndex;
            //动画设置ul标签的位置
            $ul.animate({marginLeft:-(width*index)});

            //设置导航点
            $ol.children().eq(key).addClass("active");
            $ol.children().eq(key).siblings().removeClass("active");
       })

       //左边按钮
       $(".btn-prev").click(function(){
            index --;
            if(index < 0){
                index = len-1;
                $ul.css("marginLeft",-(len*width));
            }
            //动画设置ul标签的位置
            $ul.animate({marginLeft:-(width*index)});
            
            key --;
            key < 0 ? key = len -1 : key;
             //设置导航点
             $ol.children().eq(key).addClass("active");
             $ol.children().eq(key).siblings().removeClass("active");

       })

       //右边按钮
       $(".btn-next").click(function(){
        index ++
        if(index > len){
            index = 1;
            $ul.css("marginLeft",0);
        }
        //动画设置ul标签的位置
        $ul.animate({marginLeft:-(width*index)});
        
        key ++;
        key > len-1 ? key = 0 : key;
         //设置导航点
         $ol.children().eq(key).addClass("active");
         $ol.children().eq(key).siblings().removeClass("active");

   })
}