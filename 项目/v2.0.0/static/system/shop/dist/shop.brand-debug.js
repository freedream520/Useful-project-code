define("static/system/shop/2.0.0/shop.brand-debug", [ "static/global/common/2.0.0/lazyload-debug" ], function(require, exports, module) {
    var shop_brand;
    require("static/global/common/2.0.0/lazyload-debug.js")($);
    // 图片懒加载
    $.lazy_init();
    /*$('.products-outer').on('mouseenter', function(){
		
		var _this = $(this);
		
		CATE.Methods.isGetGoodsInfo(_this, CATE.Methods.getGoodsImage);
		
		CATE.Events.listSelectedAttr(_this);
		
	});
	
	CATE.Events.clickAddCartButton('.add-cart-button');
	
	CATE.Events.clickFavoriteButton('[data-class="favorite"]', '.products-outer');*/
    module.exports = shop_brand;
});
