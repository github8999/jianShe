; (function (window) {

    initSwiper(); // 初始化swiper
    initWOW(); // 初始化wow
    toogleMenuList(); // 响应式菜单按钮点击事件
    showPductCate(); // 项目展示模块 => 分类展示
    changeShowPductCate(); // 项目展示模块 => 切换展示项目
    changeShowPductCenterCate();
    ShowPductCenterCate();
    bannerImg();

    /***
     *  这是img标签 background-size:cover 效果
     ***/
    function bannerImg(){
        window.onresize = function(){
            if(window.innerWidth>1200){
                var lengthMore = $('.slide-img').width()-window.innerWidth;
                
                $('.slide-img').css('marginLeft',(lengthMore/2*-1));
            }
            if(window.innerWidth<769){
                var lengthMore = $('.slide-img').width()-window.innerWidth;
                console.log($('.slide-img').width(),window.innerWidth);
                $('.slide-img').css('marginLeft',(lengthMore/2*-1));

            }
        };
    }

    /***
     * 产品中心分类展示
     ***/
    function changeShowPductCenterCate(){

        $('.product-center .cate-item').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            console.log($(this).data('cate'));
            ShowPductCenterCate($(this).data('cate'));
        });


    }
    function ShowPductCenterCate(curr) {
        curr = curr || 'bed';
        var productCenterData = data.productCenter;
        $('.product-center .cate-products').html('');
        productCenterData[curr].forEach(function (val, index) {
            if (index < 6) {
                $('.product-center .cate-products').append(`
                <li class="cate-product fl wow bounceInUp">
                    <a class="cate-product-hyper" href="#">
                        <p class="product-id">${val.id}</p>
                        <div class="product-desc-hover">
                            <p class="name">${val.name}</p>
                            <div class="txt">${val.desc}</div>
                        </div>
                        <img class="product-img" src="${val.img}" alt="">
                        <div class="product-cover"></div>
                        <div class="product-desc">
                            <p class="name">${val.name}</p>
                            <div class="txt">${val.desc}</div>
                        </div>
                    </a>
                </li>`);
            }
        });

    }
    /***
     * 响应式菜单按钮开关
     ***/
    function toogleMenuList() {
        $('.header-menu').click(function () {
            $('.header-menu').toggleClass('active');
            $('.menu-list').animate({ width: 'toggle' }, 350);
        });
    }

    /***
    * 初始化轮播图
    ***/
    function initSwiper() {
        var mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                paginationType: 'custom',
            },
        })
    }

    /***
    *  初始化wow
    ***/
    function initWOW() {
        new WOW().init();
    }

    /***
    * 项目展示模块 => 分类展示
    ***/
    function showPductCate(curr) {
        curr = curr || 'home';
        var showPductData = data.showPduct;
        $('.show-pduct .module-items').html('');
        showPductData[curr].forEach(function (val, index) {
            if (index < 3) {
                $('.show-pduct .module-items').append(`
                <li class="module-item fl  wow bounceInUp">
                    <div class="cover"></div>
                    <img class="product-img" src="${val.img}">
                    <div class="item-title-top">
                        <p class="btitle">${val.btitle}</p>
                        <p class="stitle">${val.stitle}</p>
                    </div>

                    <p class="item-desc">${val.desc}</p>
                    <div class="item-title-btm">
                        <p class="btitle">${val.btitle}</p>
                        <p class="stitle">${val.stitle}</p>
                    </div>

                    <a class="item-hyper" href="javaScript:;"></a>
                </li>`);
            }
        });
    }

    /***
     * 项目展示模块 => 切换展示项目
     ***/
    function changeShowPductCate() {
        $('.show-pduct .module-cate').click(function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');

            showPductCate($(this).data('cate'));
        });

    }
    

})(window); 