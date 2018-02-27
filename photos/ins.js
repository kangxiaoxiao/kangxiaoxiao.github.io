/**
 * Created by Administrator on 2018/2/27 0027.
 */
$.get("./data.json").then(function(data){
    console.log(data)
    render(data);
})
var render = function render(res) {
    var ulTmpl = "";
    for (var j = 0, len2 = res.length; j < len2; j++) {
        var data = res[j];
        var liTmpl = "";

        var imgLink = 'blob/master/photos/images/' + data;
        var imgName =data;

       /* var minSrc = '/img/photo/' + data.id + '.min.jpg';
        var src = '/img/photo/' + data.id + '.jpg';
        var type = 'image';
        var wrapText = data.caption || {};
        var realText = wrapText.text || "么么哒~~";*/

        /*liTmpl += '<figure class="thumb" itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject">\
                <a href="' + src + '" itemprop="contentUrl" data-size="640x640" data-type="' + type + '" data-target=".jpg">\
                  <img class="reward-img" data-type="' + type + '" data-src="' + minSrc + '" src="/photos/'+ minSrc +'" itemprop="thumbnail" onload="lzld(this)">\
                  <h1 class="year">'+ getDate(data.created_time) +'</h1>\
                </a>\
                <figcaption style="display:none" itemprop="caption description">' + realText + '</figcaption>\
            </figure>';*/

        liTmpl += '\
                <a href="' + imgLink + '" itemprop="contentUrl" data-size="640x640" data-target=".jpg">\
                  <img class="reward-img" src="/photos/'+ imgLink +'">\
                  <h1>'+imgName +'</h1>\
                </a>\
               \
            ';

        ulTmpl = ulTmpl +  liTmpl;
    }

    console.log(liTmpl);
    console.log($(".img-box-ul").html());
    $('.img-box-ul').html('<div class="photos" itemscope="" itemtype="http://schema.org/ImageGallery">' + ulTmpl + '</div>') ;
};


