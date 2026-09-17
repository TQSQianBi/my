const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default
const types = require("@babel/types")
const generator = require("@babel/generator").default
const myTool = require("./myTool.js");
const {is} = require("@babel/traverse/lib/path/introspection");

console.time("处理完毕，耗时");
//NOTE: ob混淆的大数组和调用函数的定义
function _0x2af0() {
    var _0x54db18 = ['hide', 'Ресурс\x20изображения\x20не\x20удалось\x20загрузить', 'DES', 'PrguR', 'HtwQI', 'pbpyq', 'azQIv', 'pdDnz', 'qKFXS', 'getElementByClassName', 'store', 'ZwRPu', 'bHXNd', 'sHbsn', 'slide_fail', 'ZNsvg', 'keyboard', 'EFALM', 'zRfJL', 'qpKZD', 'nPhwG', 'boolean', 'rghTF', 'KnmsK', './smLoad', 'yLxWJ', 'xyfYF', 'wqHnE', 'sCqTt', 'NcOZm', 'fIsRi', 'JSON', 'PQyhT', 'BBeyx', 'CTZng', 'insensitiveEl', 'intervalTimer', 'TSQuw', 'JS-SDK\x20রিসোর্স\x20লোডিং\x20ব্যর্থ\x20হয়েছে৷', 'Lkupz', 'LbGYr', 'xwwmA', 'SCxGp', 'trueHeight', 'Kegagalan\x20memuat\x20Javascript', 'IxubC', 'bmqoU', 'छवि\x20लोड\x20हो\x20रहा\x20है', 'zbeDT', 'removeChild', 'errorTips', 'contentType', 'cAtcx', 'FzFju', 'PaFEc', 'DnSOo', 'ctFDk', 'QLXky', 'FPZhr', 'removeEvent', '/ca/v2/fverify', 'bekeJ', 'document', 'fxzGO', 'HRjuA', 'mCdET', 'sTfdh', 'ewsAK', 'startHandler', '_closeCallback', 'vPbWF', 'RzhMG', 'EEDUS', 'MOmBh', 'Ресурс\x20CSS\x20не\x20удалось\x20загрузить', 'cIimx', 'gUmyj', 'LJzcr', '<i\x20class=\x27shumei_success_wrong\x27></i><span>Gagal</span>', 'TwITA', 'fpKeyboardHandler', 'Luhiy', 'ACKGY', 'successColor', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'KCTlk', 'shumei_captcha_slide_btn', 'nbhwa', 'irBSc', 'mfDwC', 'scrollLeft', '5|1|6|4|3|0|2', 'CSS\x20ریسورس\x20لوڈ\x20ہونے\x20میں\x20ناکام', 'spceX', 'VsTlu', 'richiesta\x20di\x20rete\x20anomala', 'tVepf', 'logError', 'hauYz', 'CEfJO', 'getElementsByClassName', 'iAMIN', 'qHKBc', 'var\x20god\x20klicka', 'visdz', 'substr', 'UyUKm', 'KEePx', 'shumei_captcha_img_loaded_wrapper', '<div\x20class=\x22shumei_captcha_insensitive_tips_wrapper\x22>', 'ugzno', 'IjEkE', '3|4|2|1|0', 'pnrVe', 'shumei_captcha_img_wrapper', 'gpYcN', 'DCRDW', 'isBoolean', 'ajaxRequest', 'min', 'anormal\x20ağ\x20isteği', 'XQiOh', 'channel', 'outHandler', 'sxiJa', 'TudMK', 'Bấm\x20để\x20xác\x20minh', 'mouseMoveX', 'KwaEX', 'Lcmbs', 'dxrCG', 'uNPsr', 'return', 'ছবি\x20লোড\x20হচ্ছে', 'getTime', 'bUMcr', 'json', '../../modules/es7.symbol.async-iterator', 'buildTpl', 'fpMousemoveHandler', 'WQVYC', 'getConsoleBywindowSize', 'vBtRh', 'dZhtR', 'TYIoI', 'color', 'QYakX', 'SEND_VERIFY', 'mntlJ', 'BVGwJ', 'set', 'ITSlL', '4|0|3|6|1|2|5', '순서대로\x20클릭해주세요', 'Undefined', 'AfOVS', 'getMainDom', 'slideEl', 'OgKCc', 'shumei_captcha_loaded_img_bg', 'TvBrg', 'lwLur', 'SCaWx', 'imageEl', 'oJXQp', 'kokgC', 'IcfWB', '<div\x20class=\x22title\x22>', '<a\x20href=\x22###\x22\x20class=\x22shumei_captcha_reload_btn\x22>', 'Szymz', 'KbYdi', 'SjxzV', 'maxTouchPoints', 'براہ\x20کرم\x20نیٹ\x20ورک\x20کو\x20ریفریش\x20کریں\x20اور\x20دوبارہ\x20کوشش\x20کریں۔', 'retryCount', 'CLFik', 'fpMouseRightClickY', 'JiGRW', 'JS-SDK\x20resursladdning\x20misslyckades', 'beforeResizeWidth', 'FRgKU', 'Bild\x20wird\x20geladen', 'hKcsJ', 'oKBWU', 'mousemoveDataTimer', 'dJWei', 'kklWE', 'KEY', 'FDnLm', 'babel-runtime/helpers/typeof', '4POCsPT', 'UiodB', './smLanguage', 'process', 'GwCpK', 'jNSmP', 'Math', 'oecBs', 'bYyhY', 'ETsCP', 'auYuZ', 'SByiS', 'response', 'all', 'UCmUe', 'uczjR', 'amwUv', 'op-symbols', 'getIteratorMethod', 'qPCAQ', 'nGKyK', 'SgTJs', 'rInhI', './_shared', 'Нажмите,\x20чтобы\x20завершить\x20проверку', 'cmKBk', 'imageLoadedFgEl', 'bYMJd', 'clearClassStatus', 'fVerifyUrlV2', 'EsxVQ', 'Bsvoc', 'HcPbc', 'Cliquez\x20s\x27il\x20vous\x20plait', 'uaDtd', 'resetForm', 'कॉन्फ़िगरेशन\x20पैरामीटर\x20अपवाद\x20प्राप्त\x20करें', 'Ncgmz', '0|1|5|2|7|6|3|4|8', 'bupQg', 'WJxRG', 'IeLON', 'yvHgA', 'NiqYU', 'offsetParent', 'yuCKn', 'zwwwB', 'wzpEN', 'JPYMK', 'ohGnM', 'SLfov', 'wTsdh', 'sxHnn', 'pageX', 'bfVxU', '__defineGetter__', 'iJzOf', 'LjolG', './_iter-create', 'hhvtT', 'MCNGe', 'sKhHz', '1.1.3', 'iaPNz', 'wSiEu', 'bindEvent', 'yswZF', 'imageFreshBtnEl', 'cXbVI', './_has', 'hHNOb', 'Klicka\x20för\x20att\x20slutföra\x20verifieringen', 'Array', 'auto', 'YOEPV', 'Symbol.', 'onClose', '图片加载中...', 'CIwGI', 'logUrl', 'WaAkB', 'DJVou', 'OjJYw', '請按順序點擊', 'lteXS', 'imageLoadedBgWrapperEl', 'ZYaqD', 'QMKOq', 'ネットワーク障害、再試行してください', 'iaMTT', 'ZCIzy', 'La\x20red\x20no\x20es\x20fuerte\x20|\x20Haz\x20clic\x20para\x20intentarlo\x20de\x20nuevo', 'slideBtnEl', 'base64Encode', 'fontWeight', '6|4|2|0|1|5|3', 'sshummei', 'YZKjP', 'sqWyO', 'parseerror', 'IMAGE_LOAD_SUCCESS', 'closeBtnEl', 'uDDBf', 'CSS\x20kaynağı\x20yüklenemedi', '../../modules/web.dom.iterable', 'kZSjN', 'IOxSu', 'getLanguage', 'mouseLeftClick', 'exports', './_iter-detect', 'UPTZy', 'ClcxR', 'Lỗi\x20mạng\x20|\x20Nhấp\x20để\x20thử\x20lại', 'Clique\x20para\x20concluir\x20a\x20verificação', 'bodZj', '../../modules/es6.object.to-string', 'debug', '©\x202019\x20Denis\x20Pushkarev\x20(zloirock.ru)', 'BKjrj', 'XWolk', 'Boiad', 'UQSar', 'UzCwK', 'เครือข่ายขัดข้อง|คลิกเพื่อลองอีกครั้ง', 'CKidr', 'ElNBw', 'wjnUc', 'TAwIJ', 'ALHVg', 'ক্রমানুসারে\x20ক্লিক\x20করুন', 'lvNIE', 'mouseEndX', 'xQiHh', '52px', 'pUhcG', 'product', './_iterators', 'Null', 'mXhhG', 'FqMKq', 'getSlideDefaultHtml', 'aiUNE', 'FeSXu', 'hQBYN', 'IgFHL', 'yNYxE', 'call', 'sVFJi', 'CKXNZ', 'NmeGO', 'FzTFi', 'mATxh', 'dc0687b6', '24|23|19|6|18|7|14|5|3|13|17|20|26|12|2|4|10|22|8|21|9|25|0|11|16|1|15', 'click', '\x22\x20class=\x22shumei_captcha_img_loadding_wrapper\x22>', 'नेटवर्क\x20मजबूत\x20नहीं\x20है\x20|\x20पुनः\x20प्रयास\x20करने\x20के\x20लिए\x20क्लिक\x20करें', 'pageY', 'diiFi', 'BLgab', '<div\x20class=\x22shumei_catpcha_header_wrapper\x22\x20id=\x22', 'AFCgK', 'dzXHl', 'ishumei.com', 'getUUID', 'Dixgx', 'captchaEl', 'suAsT', 'NPLFf', 'NcLuj', 'QzkVW', 'hBliK', 'crossOrigin', 'ndSdA', 'REFRESH', 'qWlDx', 'IIEUz', 'wSiLy', 'hWqqF', 'eNANX', 'ScDpn', 'appendTo参数异常', 'VaGDf', 'ZkBzO', 'content', 'endTime', 'auto_slide', 'aztGH', 'Nabigo\x20ang\x20pag-load\x20ng\x20css', 'iXdDE', 'UXVKh', '2|4|3|1|0', 'BQVuB', 'refresh', 'jgFRu', 'rXVan', 'Hkbmo', 'knGJU', 'uiYGT', 'La\x20rete\x20non\x20è\x20forte\x20|\x20Fai\x20clic\x20per\x20riprovare', 'select_fail', 'bcYfW', '<div\x20class=\x22shumei_catpcha_footer_wrapper\x22>', 'ukZOh', 'LiMfx', 'fpMousemoveY', 'resim\x20yükleme', 'wrifr', '0|3|4|1|2', 'wiJiG', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>Vérification\x20réussie</span>', ':&nbsp;&nbsp;\x20<img\x20src=\x22', './_property-desc', 'sendConf', 'zMTpx', '\x22\x20class=\x22shumei_captcha_img_loaded_fg_wrapper\x22>', 'IpQTS', 'readyState', 'icon_select', 'Det\x20gick\x20inte\x20att\x20ladda\x20CSS-resursen', 'IErqO', 'AdguV', 'FUINT', 'MBFlg', 'string', '2NhqxJn', 'uluHb', 'LSmUs', 'getSlidePopupHtml', '자바스크립트\x20로드\x20실패', 'getDate', 'setAttribute', 'eTgBM', 'YtMkx', 'ApQla', 'cyJiB', 'LgEYO', 'gQGrO', 'detail', 'isExtensible', 'cnOls', 'ULiFV', '22oJjdJf', 'WNrMZ', '__fxdriver_unwrapped', 'Symbol(', 'eqcdh', '27e4b9b2', 'fJcpX', 'Memuatkan\x20imej', 'OhuBO', '5|0|3|4|2|1', 'cellectFullPageData', 'initFreshEvent', 'ZGJkh', './_to-object', 'imfec', 'GIWsM', 'NeUWw', 'BlnMd', 'status', 'OKQZb', '\x22\x20class=\x22shumei_captcha_network_fail_wrapper\x22>', 'LNoXa', 'qkECD', 'preventDefaultHandler', 'egZWk', 'HDcYd', '42px', '../../modules/es6.symbol', 'drzEp', 'yVEEp', 'hfaZP', 'onormal\x20nätverksbegäran', 'maskEl', '7|1|0|6|8|5|3|9|2|4', 'getSafeParams', 'GfnQu', 'mCqtG', 'nQDnV', 'fUHDV', 'disabled', 'Hvgey', 'rMAfH', 'IGrcu', 'nDtLO', 'PASS', 'createElement', 'uPNYO', 'mouseout', 'Пожалуйста,\x20обновите\x20сеть\x20и\x20повторите\x20попытку.', 'Det\x20aktuella\x20nätverket\x20är\x20inte\x20bra.\x20Uppdatera\x20och\x20försök\x20igen', '\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'resetPosition', 'floatOutHandler', '1|5|6|3|2|0|4', 'xXClb', 'loadImage', 'Dtvbu', 'BackCompat', 'CcqQB', '4|1|2|0|5|3', 'wVIOL', 'VKyYK', 'UOSOw', 'CNRcD', 'oPhJk', 'FyANS', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>যাচাইকরণ\x20সফল\x20হয়েছে৷</span>', '/exception', 'kZymp', 'moeEM', 'lütfen\x20tıklayın', 'VmZrz', './_iter-define', 'EXxgX', 'CuYSF', 'PEdOr', '\x22\x20class=\x22shumei_captcha_img_loaded_bg_wrapper\x22>', '%;left:', 'imageLoadSuccess', '\x27,\x20sizingMethod=\x27crop\x27)', 'lerro', 'YqDSI', 'tSGkG', 'Pemuatan\x20gambar', 'pageYOffset', 'zQXvc', 'YKLCL', 'XFlBY', 'isJsFormat', '\x22\x20class=\x22icon_select_img\x22/>', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>Thành\x20công</span>', 'organization', 'GET', 'wjQdc', 'QQGWx', 'initEvent', 'script', '<i\x20class=\x27shumei_success_wrong\x27></i><span>失敗した</span>', 'PmUBZ', './_dom-create', '<span\x20class=\x22shumei_captcha_network_timeout\x22>', './img/pixel.gif', 'rRGcs', 'HYkNw', 'mouseEndY', 'opqHu', 'symbols', 'then', 'La\x20red\x20actual\x20no\x20es\x20buena,\x20actualice\x20y\x20vuelva\x20a\x20intentarlo', 'YAigK', 'dsBiY', 'XQeHi', 'yZgLQ', '网络不给力|点击重试', '</span>', 'UEDNQ', '/pr/v1.0.3/img/bg-loading.png', 'Lỗi\x20mạng,\x20hãy\x20thử\x20lại', 'WFMpq', 'oLISK', 'IDtjP', 'kHRil', 'pupxq', 'getRootDom', 'ejdsK', 'lJLnd', 'تصویری\x20وسیلہ\x20لوڈ\x20ہونے\x20میں\x20ناکام', 'BTHMQ', 'CUXYd', 'trackerDomain', 'VCvjC', 'showTipWhenMove', 'Object', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', '<i\x20class=\x27shumei_success_wrong\x27></i><span>La\x20autenticación\x20falló,\x20vuelva\x20a\x20autenticarse</span>', 'jLMcQ', 'rDADs', 'WXFKq', 'MoGbc', '<i\x20class=\x27shumei_success_wrong\x27></i><span>Nabigo</span>', '3|1|0|6|4|5|2', 'EZDXt', 'ObxIF', 'answer_content', 'UqdoG', 'wNMIn', 'ocQxz', 'dLjjn', 'QPAFD', 'border', 'dioIp', 'KHDcl', 'aogwn', 'registerData', 'CiPJy', 'TOycL', 'inputEls', 'smGetElByClassName', 'SERVER_ERROR', 'DNxIf', 'czLkZ', 'gRZHD', 'เครือข่ายขัดข้อง\x20โปรดลองอีกครั้ง', 'qqDVb', 'A\x20rede\x20não\x20é\x20forte\x20|\x20Clique\x20para\x20tentar\x20novamente', 'fAmPM', 'none', 'HvDGv', 'eqMuu', 'AMlny', 'select_success', 'MgIdA', 'object', 'oDvMO', 'core-js/library/fn/object/define-property', 'oKNXK', '<i\x20class=\x27shumei_success_wrong\x27></i><span>Thất\x20bại</span>', 'qhAbJ', '2016180AYWGqS', 'undefined', 'body', 'LeoZl', 'symbol', 'chargement\x20des\x20images', 'shumei_hide', 'mBdim', 'useBrowserLang', 'OmLFt', 'EoVLd', 'xWjnb', 'rrHaU', 'f1751e5d', 'registCaptcha', 'eVWyt', 'TpVWi', 'UfldF', 'параметр\x20недействителен', 'Nabigo\x20ang\x20network,\x20Subukang\x20muli', 'VlwVw', 'IOrrb', 'aSPEn', 'Klicken\x20Sie\x20hier,\x20um\x20die\x20Überprüfung\x20abzuschließen', '39|5|4|7|35|24|13|12|32|36|29|25|8|30|21|31|38|33|19|20|27|1|14|0|17|40|15|37|2|3|16|22|10|6|11|26|23|9|28|34|18', 'सीएसएस\x20संसाधन\x20लोड\x20करने\x20में\x20विफल', 'फिर\x20से\x20लॉगिन\x20करने\x20के\x20लिए', 'concat', 'wnouL', 'hvZxH', 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables', 'jZGer', './_object-dp', 'hrPiR', 'vOhLS', 'tKAvl', 'insensitive_default', 'load', 'Txzbi', 'PzFUQ', 'XRxVP', 'Lỗi\x20tải\x20Javascript', 'WKkKr', 'checkApi', 'web', 'Lỗi\x20mạng', 'gyhXi', 'jGyeC', 'IqwHq', 'zwrKT', 'bindForm', 'SXIHT', 'CJHLh', './_fails', 'Không\x20tải\x20được\x20hình\x20ảnh', 'tSudO', 'vscnu', 'QObject', '7|6|1|0|4|2|3|5', 'DYIUK', 'getRegisterData', 'keys', 'pure', 'getAttribute', 'XJgxo', '<i\x20class=\x27shumei_success_wrong\x27></i><span>La\x20vérification\x20a\x20échoué.\x20Merci\x20d\x27essayer\x20de\x20nouveau</span>', 'SiFgd', 'zhAiv', 'FontFace', 'ENixm', 'KEcNJ', 'HlYFI', 'CLFaS', 'YfgXc', 'bMABO', 'MaVcK', 'qExBh', 'vnfIM', 'seq_select', 'rVpur', 'withCredentials', 'fixProductSuccessStatus', 'Silakan\x20klik\x20untuk\x20memesan', 'sUSVJ', 'Kegagalan\x20jaringan|Klik\x20untuk\x20mencoba\x20lagi', 'resetSuccessCallback', 'VuxyC', './_object-gopd', 'qYTYt', 'NSblD', 'Hfliz', './_wks-ext', 'low', 'gdcaG', 'Owqcs', 'core-js/library/fn/symbol', 'HzcKw', 'gJnei', 'Klik\x20untuk\x20pengesahan', '\x22\x20/>', 'VVccE', 'Click\x20to\x20verification', 'QbjHM', 'zLXvc', 'RXkZQ', 'DclRz', '\x22\x20class=\x22close-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22sm-iconfont\x20iconguanbi\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', '../modules/es6.string.iterator', 'VSHXw', 'onReady', 'iqtrS', 'IdJow', 'аномальный\x20сетевой\x20запрос', 'updateAnswerHtml', 'Can\x27t\x20call\x20method\x20on\x20\x20', 'qNyKW', 'gHXPt', 'loadCss', 'getBoundingClientRect', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>Berhasil</span>', 'Klik\x20untuk\x20verifikasi', 'vySxr', 'ondragstart', 'shumei_captcha_form_result', 'CSS\x20로드\x20실패', 'HdZlx', 'endMove', '\x22\x20class=\x22shumei_captcha_slide_btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22shumei_captcha_slide_btn_icon\x20sm-iconfont\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'userAgent', 'closeHandler', 'dUfNk', 'Cấu\x20hình\x20tải\x20không\x20thành\x20công', 'insensitive_disabled', 'rRGyh', 'QlEwg', 'QkqZO', 'QbQfB', './_to-length', 'slideWidth', 'oDgBU', 'KvGrD', 'hover', 'ina', '/pr/v1.0.3/img/icon-default.png', 'obAVh', 'EThfu', 'button', 'captcha', 'dnpxF', './es6.array.iterator', 'shumei_captcha_footer_refresh_btn', '%;\x22\x20data-index=\x22', 'zfJzV', 'KrYkm', 'String', 'Conyv', 'SmyoG', 'Oyifs', 'ltGyV', 'mnmxw', 'sfCHa', 'REGISTER_SUCCESS', 'VZrPX', 'ksuqH', 'lwJim', 'xqSbc', 'ZnuPV', 'vVmcQ', '<i\x20id=\x22', 'WZBwW', 'hjtGJ', 'XgLfc', 'el\x20parámetro\x20no\x20es\x20válido', 'saveEventList', 'fpMouseRightClickX', 'OjqEY', 'STLhK', 'width:参数不合法', 'yPRcx', 'Obter\x20exceção\x20de\x20parâmetro\x20de\x20configuração', 'IMAGE_LOAD_ERROR', 'loadScript', 'pwltG', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>Verifieringen\x20lyckades</span>', 'UorEd', 'DXSuL', 'success', 'OYdOW', '\x22\x20class=\x22shumei_captcha_slide_process\x22></div>', 'filter', 'mouse', 'wks', '请依次点击', 'VPkeY', 'riked', 'XqFNZ', '3721368Bycsym', 'panelEl', 'lhcIS', 'tIemm', '469ad7e2', 'ajhZc', 'appId', 'SLcqj', 'EgeRp', 'অস্বাভাবিক\x20নেটওয়ার্ক\x20অনুরোধ', 'virtual', 'bycmk', '8|5|6|1|0|7|4|3|2', 'pYuMO', 'TcNMN', 'OfLCf', 'lISgc', 'shumei_success_right', 'LYQnW', 'EbpbK', '../pkg/smObject', '参数不合法', 'FiQmA', 'janLm', 'Hpicf', '__nightmare', '\x20\x20\x20\x20\x20\x20\x20\x20', 'CGVcR', 'normalizePath', '확인하려면\x20클릭', 'Qoggc', 'create', 'xiCRI', 'mlGLf', 'lIHVw', 'nUNbC', 'UELxY', 'FPgKR', 'MQchb', 'smuLw', 'setImageUrl', 'imageLoadingEl', 'yDYSv', 'wOOHR', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\x27', 'style', 'fixConfig', 'MkZpy', 'AIJRh', 'mousemove', 'OsQjh', '8fd456b4', '<i\x20class=\x27shumei_success_wrong\x27></i><span>প্রমাণীকরণ\x20ব্যর্থ\x20হয়েছে,\x20অনুগ্রহ\x20করে\x20পুনরায়\x20প্রমাণীকরণ\x20করুন৷</span>', 'lang', 'OjJwm', 'Si\x20prega\x20di\x20fare\x20clic', 'HLibq', 'XsULl', 'Falló\x20la\x20carga\x20de\x20recursos\x20de\x20JS-SDK', 'PnmRl', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>Succeeded</span>', 'getPrototypeOf', 'loading', '../../modules/es7.symbol.observable', 'BWaez', 'runBotDetection', 'iqzYF', 'font/font.css', './_to-primitive', 'kjUVD', 'CoxJr', 'ojmXc', 'Can\x27t\x20convert\x20object\x20to\x20primitive\x20value', 'touchend', 'cToeY', 'returnValue', 'छवि\x20संसाधन\x20लोड\x20करने\x20में\x20विफल', '无感验证码,暂不支持:', 'WtNxp', 'KaWzS', '/ca/v1/conf', 'insensitiveTipsTextEl', 'background', 'insensitive', '點擊完成驗證', 'zFtuD', 'wrnIo', 'callSelenium', '이미지\x20로딩', 'etQik', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>成功</span>', 'dESUR', './core.get-iterator-method', 'TZyLF', 'shumei_captcha_slide_wrapper', 'popup', 'Nabigo\x20ang\x20pag-load\x20ng\x20larawan', 'nkZju', 'bitte\x20klicken', 'rlXgv', 'open', 'IXykq', 'CMrXi', 'saveMouseData', 'UNvcE', 'test', 'MunTi', 'INIT', 'mQJuP', 'Bitte\x20klicken\x20Sie\x20in\x20der\x20Reihenfolge', 'DBtFb', 'wAnkR', 'oURaG', '0|8|12|2|3|6|9|1|5|7|11|10|4', '<i\x20class=\x27shumei_success_wrong\x27></i><span>Autenticazione\x20non\x20riuscita,\x20autentica\x20nuovamente</span>', '2|0|4|3|1', 'fhRTN', '../pkg/smLoad', 'versions', 'networkFailEl', 'SaSlJ', 'वर्तमान\x20नेटवर्क\x20अच्छा\x20नहीं\x20है,\x20कृपया\x20ताज़ा\x20करें\x20और\x20पुनः\x20प्रयास\x20करें', 'FfYNe', 'aktualisieren\x20Sie\x20das\x20Netzwerk\x20erneut', 'UOIDI', '3|0|2|1|4', 'XZmsn', 'Image\x20load\x20failure', 'Rvkig', 'getSeconds', 'driver', './_enum-keys', '<font>', '_config', 'SjRXL', 'preventExtensions', 'insensitiveMode', 'YetEg', 'Falha\x20no\x20carregamento\x20do\x20recurso\x20JS-SDK', 'cargando\x20imagen', 'SbqmK', 'splice', 'DZVIw', 'getMouseAction', '圖片資源加載失敗', 'GqVsl', 'aKYNo', 'isWidthInvalid', './_descriptors', 'pYlyP', 'appendChild', 'done', '\x20is\x20not\x20a\x20function!', '_hidden', '8|7|3|6|4|1|2|5|0|9', 'OKAdc', 'RoRGb', 'external', 'GAZzV', 'GpLhr', 'bnItG', 'pgZNj', 'lDDuE', 'bNgTd', '\x22\x20class=\x22shumei_captcha_img_wrapper\x22>', 'fpMouseClickHandler', '0|4|21|2|12|5|3|20|6|16|7|13|10|17|8|9|15|1|14|18|19|11', 'doFAC', '\x22\x20class=\x22shumei_captcha\x20shumei_captcha_wrapper\x20product-', 'bkGCX', 'La\x20rete\x20attuale\x20non\x20è\x20buona,\x20aggiorna\x20e\x20riprova', '\x22\x20class=\x22shumei_captcha\x20shumei_captcha_popup_wrapper\x20shumei_hide\x22>', 'CoDZH', 'jLclS', '3507EWNCOb', 'Si\x20prega\x20di\x20fare\x20clic\x20in\x20ordine', 'vPGQq', 'RouXk', 'image', 'FChCk', 'floatOverHandler', 'NAtDL', 'CTCWD', 'hXdHX', 'El\x20recurso\x20CSS\x20no\x20se\x20pudo\x20cargar', 'MmhAV', 'ZSccb', 'bEMFT', './_shared-key', 'getAutoSlidePopupHtml', 'CSS资源加载失败', 'SIysO', './smConstants', 'shumei_captcha_reload_btn', './_wks', 'UTQXy', 'registerUrl', 'BoupI', 'insensitiveHandler', 'Stkdt', '\x22\x20class=\x22shumei_captcha_slide_wrapper\x22>', 'hrRgV', 'lEfGr', 'RycMc', 'Rfusk', 'noBnz', '<i\x20class=\x27shumei_success_wrong\x27></i><span>توثیق\x20ناکام\x20ہوگئی،\x20براہ\x20کرم\x20دوبارہ\x20تصدیق\x20کریں۔</span>', 'Xtkbi', 'NuXRJ', 'Arguments', 'sSgcU', 'Kxtbk', 'ojUxj', 'El\x20recurso\x20de\x20imagen\x20no\x20se\x20pudo\x20cargar', 'requestId', 'Kegagalan\x20memuat\x20CSS', 'TIvlR', 'pSnmH', '1|2|0|4|3', 'HXhdr', 'length', '1|11|9|3|0|8|4|12|2|5|10|6|7', './_html', 'กำลังโหลดรูปภาพ', 'global', 'onError', 'SDKVER', '4|2|3|0|1', 'qCsSi', './_meta', 'sfbhZ', '../core-js/symbol/iterator', 'Parameter\x20ist\x20ungültig', 'rojDI', 'ViSWY', 'headerTitle', 'VGvkF', 'le\x20paramètre\x20est\x20invalide', 'core-js/library/fn/get-iterator', 'bFoqj', 'rLFyB', 'moveHandler', 'vrILm', 'RhFjO', 'nmUHP', 'cache_', '圖片加載中...', 'network', 'mousedown', 'zh-hk', 'showCaptcha', 'XDmCB', 'FjMxf', '__webdriver_script_fn', 'AwfJf', '2|4|5|3|1|0', 'loadImages', 'sJilr', '4|3|2|0|1|5', 'excuteCallback', './smEncrypt', '/pr/v1.0.3/img/bg-network@2x.png', 'pePih', 'ScJYa', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>Überprüfung\x20erfolgreich</span>', 'RRWfK', 'Config\x20load\x20failure', 'fixSize', 'eEAYL', 'initDom', 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf', 'Kegagalan\x20rangkaian,\x20Cuba\x20lagi', 'keyboardData', 'HCtwD', 'WDWVL', 'براہ\x20کرم\x20کلک\x20کریں۔', 'MBArX', 'parâmetro\x20é\x20inválido', 'CakyW', 'xinYw', 'LElPF', 'solicitud\x20de\x20red\x20anormal', 'selectHandler', '/pr/v1.0.3/img/icon-cry.png', 'pCyTb', 'Lütfen\x20sırayla\x20tıklayın', 'uSCsj', 'brgDz', '<div\x20class=\x22shumei_captcha_insensitive_content\x22>', 'xOpTU', 'sKqoI', 'failBorder', 'meta', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>Verificación\x20exitosa</span>', 'cnIoO', 'customData', 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', 'saveFullPageData', 'clientHeight', 'ZOEmt', 'setCustomFont', 'shumei_captcha_img_loaded_bg_wrapper', 'rDHxt', 'oIGPT', './_redefine', 'START_MOVE', 'Ttmrs', 'setDomStyle', 'callee', 'SpPYx', 'iframe', 'rgXNW', 'CuSGN', 'moYra', 'AnKDI', 'KnDRN', 'next', 'insensitive_success', 'mouseRightClickData', 'paNro', 'cKEhs', 'rYYbn', 'SgBgL', 'smGetElById', 'NpaMm', 'className', 'RwXNq', 'Impossibile\x20caricare\x20la\x20risorsa\x20CSS', 'UmGfl', 'BzdHy', 'apply', 'qfIGH', 'async', 'xXjwS', 'jiwSs', 'ONfQZ', 'gJVpX', 'การกำหนดค่าล้มเหลวในการโหลด', 'DAtFG', 'UYcmk', '<div\x20class=\x22shumei_captcha_insensitive_icon\x22></div>', './_uid', 'zunVD', 'ScPvK', 'captchaUuid', 'pvoTe', 'sycwd', 'default', 'bbgeW', 'startMove', 'xFbfg', 'yIdRo', '網絡不給力|點擊重試', 'JEqIh', 'lQxEw', '9693185VwEKfK', 'ltjYs', 'frontResourceLoaded', 'Vui\x20lòng\x20bấm\x20vào\x20để\x20đặt\x20hàng', 'ネットワーク障害|クリックして再試行', 'TVQuz', 'btqGh', '/pr/v1.0.3/img/icon-fail@2x.png', 'QpLTK', 'eHvie', 'Naglo-load\x20ng\x20larawan', 'xLWfd', 'setRootDom', 'scrollTop', 'yZgNt', 'загрузка\x20изображения', 'FbMHD', './_global', 'PiUMJ', 'cXHUZ', 'DbMOW', 'FynQE', 'GSdjl', 'TPsgi', 'javascript:', 'nkiKD', 'IUCNP', '<div\x20class=\x22shumei_captcha\x22>', 'chjHG', 'TRfwP', '../../modules/es6.array.from', 'console', '/pr/v1.0.3/img/icon-move@2x.png', 'protocol', 'YCsMk', 'XxoJI', 'sIILc', 'iwgiB', 'Pagkabigo\x20sa\x20network|I-click\x20upang\x20subukang\x20muli', 'contentWindow', 'fZJAZ', 'customFont', 'gtmcP', 'Param\x20tidak\x20valid', 'zvQfP', 'IzRMm', 'YfVXK', 'parse', 'EOIoV', 'WabnH', 'bFMoX', 'smStringify', 'qgQId', 'Kegagalan\x20memuat\x20konfigurasi', 'slide_disabled', '1|9|5|8|10|3|0|7|11|2|6|4', 'iSdeA', 'setRegisterData', 'lyJMm', 'URmGQ', '/ca/v1/register', 'CjTdl', '<input\x20class=\x22shumei_captcha_input_rid\x22\x20type=\x22hidden\x22\x20name=\x22rid\x22\x20value=\x22', './_is-object', 'JEtwU', 'JIWtu', './_is-array-iter', 'JsYKY', 'Fgdsb', 'nuSNm', 'getIterator', 'MaFNc', 'getSelectPopupHtml', 'shumei_captcha_insensitive_tips', 'LPcpl', 'changePannelStatus', 'domains', 'WcFJB', 'bvVfP', 'sHywd', 'OivFO', 'tblFq', 'eCuIV', '2.6.10', 'nBNOk', 'fIdQa', 'xIhRZ', 'WajTk', 'सत्यापन\x20पूरा\x20करने\x20के\x20लिए\x20क्लिक\x20करें', 'Nätverket\x20är\x20inte\x20starkt\x20|\x20Klicka\x20för\x20att\x20försöka\x20igen', 'fpMouseLeftClickY', 'PrRyz', '当前网络不佳,\x20请刷新重试', '<i\x20class=\x27shumei_success_wrong\x27></i><span>验证失败,请重新验证</span>', 'JTIgm', 'xjGNB', 'imageLoaded', 'jHJak', 'byJGM', 'असामान्य\x20नेटवर्क\x20अनुरोध', 'MdeZe', 'TNJRK', 'error', 'innerHTML', 'wugdm', 'name', '<i\x20class=\x27shumei_success_wrong\x27></i><span>Falha\x20na\x20autenticação.\x20Autentique\x20novamente</span>', 'تصدیق\x20مکمل\x20کرنے\x20کے\x20لیے\x20کلک\x20کریں۔', './_hide', 'Network\x20failure', '#13CBB9', 'parametre\x20geçersiz', '\x22\x20class=\x22shumei_captcha_img_loaded_wrapper\x20shumei_hide\x22>', 'float', 'ToKlW', '/ca/v1/log', 'ewWNP', 'aIDFT', 'uMENY', 'forEach', 'iCfiT', 'rAGMN', 'GQdyl', '\x22\x20class=\x22shumei_captcha_footer_refresh_btn\x22></div>', './smObject', 'JUNjS', 'প্যারামিটার\x20অবৈধ', 'etYbW', 'tracker.fengkongcloud.com', '1|2|0|5|3|4', 'IiceV', 'qOYCv', 'HJNhC', 'OPfEs', 'YSfSi', 'AMtSG', 'data', 'display', 'aqVBV', 'yLJrS', 'oEZXV', 'فشل\x20تحميل\x20JavaScript', 'slice', 'Gbvfx', 'tNHdr', 'rIjkX', 'url(', '弹出层式验证码初始化失败', 'rwkTo', 'imagesLoaded', 'FDjkH', '_captcha', 'NGllh', 'eval', 'Gvqyo', 'FgVOB', 'defineProperties', '\x22\x20class=\x22shumei_captcha_slide_tips\x22>', 'ljmJO', 'DeHjk', 'sendRequest', 'QcfBc', 'HDOKt', 'lwrnb', 'TuSZh', 'zdrkR', 'XrvKB', '../../modules/_core', 'wdjYR', 'sLfFE', 'DjMcW', 'FqmXH', 'twDTj', '2|0|4|1|3', 'dRfQl', 'saAgj', 'touchstart', 'touches', 'KcNqr', '잘못된\x20매개변수', 'dCNcT', 'oVTLS', '<iclass=shumei_success_wrong></i><span>فشل</span>', 'চিত্র\x20সম্পদ\x20লোড\x20করতে\x20ব্যর্থ\x20হয়েছে', 'mouseover', '\x22\x20class=\x22shumei_captcha_slide_tips_wrapper\x22>', 'lkkUp', 'vmnhh', 'KLPqq', '<i\x20class=\x27shumei_success_wrong\x27></i><span>Ошибка\x20аутентификации,\x20повторите\x20аутентификацию</span>', 'فشل\x20تحميل\x20الصورة', 'isString', '\x22\x20class=\x22refresh-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22sm-iconfont\x20iconshuaxin\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'addEventListener', 'asyncIterator', './_object-create', 'RziKK', '請按成語順序點擊', 'nRybK', 'CzgGS', 'floatImagePosition', 'aTDQA', 'babel-runtime/helpers/defineProperty', 'normalizeDomain', 'aKHSM', 'vcMRc', 'constructor', 'innerWidth', 'AMoNB', 'url', 'xrXvP', 'Tnbhk', 'closePopup', '\x20is\x20not\x20an\x20object!', 'EzuhJ', './_wks-define', 'ahVmC', 'JEvjp', 'etuqj', 'TGxAA', 'gUSAG', '__key', 'riskLevel', 'UwGcw', 'hLFZU', 'toPrimitive', 'dygsd', 'opQZs', 'uZlmY', 'hwpVV', 'defineProperty', 'MdlXu', 'wqveH', '禁用验证码失败', 'qiCNi', 'QqBiN', 'tKXkf', 'verify', 'JYkZZ', 'sloQM', 'jKtvF', 'lJbaT', '5|8|3|1|2|4|6|7|0', 'mWljY', 'LnrgY', 'babel-runtime/core-js/json/stringify', 'wlsdN', 'Nhzak', 'zyqXG', 'jwlxn', 'toStringTag', 'QDnFg', 'Fpcsu', 'yLTRR', 'null', 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,', 'max', 'JfQMj', '10026830VBJyHb', 'VBfrO', 'bZvPq', '請依次點擊', 'checkResult', 'BBxfQ', './_iter-call', 'dfaTt', 'WFFMS', 'bOway', 'TiwFE', 'XMLHttpRequest', 'changeRefreshBtnStatus', 'wOyha', 'nywtg', 'LQUTV', 'JuxcY', 'Schlechtes\x20Netzwerk\x20|\x20Bitte\x20versuchen\x20Sie\x20es\x20erneut', 'pDApI', 'ontouchstart', 'SMCaptcha', 'host', 'xltAe', './_object-gops', 'mmldl', '順番にクリックしてください', 'pQNoG', 'UdkWp', '__esModule', '<i\x20class=\x27shumei_success_wrong\x27></i><span>Doğrulama\x20başarısız.\x20Lütfen\x20tekrar\x20deneyiniz</span>', 'neMix', 'http://', 'EtadF', 'tuDsy', 'style.min.css', 'offsetTop', '__driver_unwrapped', 'Csvwn', 'LcaBo', 'JWMyy', 'Kegagalan\x20pemuatan\x20imej', 'IYvRt', 'euTVG', 'LZWBU', 'ASWnw', 'rXdqx', 'RrXNG', 'shumei_captcha_loaded_img_fg', 'Symbol\x20is\x20not\x20a\x20constructor!', 'Por\x20favor\x20haga\x20clic\x20en\x20orden', './_to-absolute-index', 'IVHgK', '0|3|1|6|5|2|10|4|9|7|8|11', 'anormale\x20Netzwerkanfrage', 'letvY', 'message', 'jNlAw', 'WqJnp', 'rMlCg', 'YYFGG', 'observable', 'voGpo', 'QPRMd', '\x22\x20class=\x22shumei_captcha_insensitive_wrapper\x20insensitive_disabled\x22>', './_ctx', 'errMsg', 'YEeFw', '獲取配置參數異常', '/pr/v1.0.3/img/icon-fail.png', 'IsThS', 'sskDt', 'shumei_captcha_slide_tips', 'values', 'NeMcE', '6|16|12|15|14|18|7|1|19|9|17|2|10|20|3|4|22|23|21|8|0|13|5|11', 'LvLTL', 'ネットワーク障害', 'ZzxqS', '\x22\x20class=\x22shumei_captcha_loaded_img_bg\x22\x20/>', 'code', 'OSlXn', '../modules/web.dom.iterable', 'fXhKo', 'bEfem', 'getMinutes', 'خطأ\x20في\x20الشبكة', '/ca/v1/type_captcha', 'qtyst', 'nqegX', 'stylesheet', 'value', 'Symbol', 'floatOutTimer', 'preventDefault', 'GEobh', 'input', 'findChild', './_set-to-string-tag', 'HSxyg', '3|2|15|13|17|4|7|6|16|14|11|12|9|5|8|0|10|1', 'touchcancel', 'YXmwk', 'NVKRj', 'charset', 'ONNJU', 'oejbx', 'advance', '<div\x20id=\x22', 'XulHP', 'WkvuM', 'tFaQO', 'Kegagalan\x20memuat\x20gambar', 'getOwnPropertyDescriptor', '获取配置参数异常', 'htmlNetwork', '/pr/v1.0.3/img/icon-refresh@2x.png', 'uZfTp', 'QLZPz', 'clientY', 'aGMFj', 'BDqek', 'core-js/library/fn/array/from', 'OtUVV', 'OKtBE', 'pMLwR', '<i\x20class=\x27shumei_success_wrong\x27></i><span>驗證失敗,請重新驗證</span>', 'RufMC', 'fSKzW', 'pHGaM', '/style.min.css', 'RQwii', '</a>', 'elnyT', 'Hämta\x20undantag\x20för\x20konfigurationsparameter', 'slideTipsEl', 'jqMUN', 'parametro\x20non\x20è\x20valido', 'rvOao', 'RJeTP', 'qydEA', 'OiOnk', 'endHandler', 'DBRGe', '网络请求异常', 'setCustomStyle', '_currentStatus', 'mGvWn', 'text', '1|3|0|5|10|6|2|4|8|7|9', 'Cannot\x20find\x20module\x20\x27', 'csNjN', 'img', 'shumei_captcha_footer_close_btn', 'oFNXj', 'gSuZx', 'xxmLG', 'XAZNp', 'trueWidth', 'WwNww', 'AIkvy', 'uiHdZ', 'XDomainRequest', 'QCrfs', 'TpbfU', 'VlygJ', 'browserLanguage', 'mtrAL', 'qhcsG', 'shumei_captcha_insensitive_wrapper', 'getElementByTagName', 'IlfHc', 'BJIQh', 'YOArY', '__webdriver_evaluate', 'mdNjC', 'eMQgi', ':&nbsp;&nbsp;', 'yRkJd', 'beAmK', 'JKlso', 'push', 'IOJWQ', './_an-object', 'pzSvY', '0|6|4|2|3|5|1', 'MuawS', 'fyeaG', 'UDdQP', 'zrEqG', 'PgcFN', 'charAt', 'PponM', 'KscQE', 'oLosW', 'REJECT', 'dBPDf', 'oqPxk', 'toUpperCase', 'WXRwA', 'wStZY', '/pr/v1.0.3/img/icon-disabled.png', 'lrcDB', 'CmfiB', '/pr/v1.0.3/img/icon-success@2x.png', 'OtgHD', 'method', 'qVQdw', 'JDnUd', 'naNTj', 'bbQoj', './_cof', 'TSrSB', 'getHours', 'TbxTk', 'gUUBK', 'nTSdd', 'kSeDd', 'qOFck', '\x22\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i>', 'YWhwt', 'ftoXY', 'getOwnPropertyNames', 'registerApiInvalid', 'Falha\x20ao\x20carregar\x20o\x20recurso\x20de\x20imagem', 'GRNsU', 'GmBrg', 'kHvxk', 'Por\x20favor\x20haz\x20click', '2|0|3|4|5|1', 'UiImZ', 'mOmrf', 'NgZxe', 'mOSbt', 'src', 'getElementsByTagName', 'usYUH', 'eeJjC', 'Obtenir\x20l\x27exception\x20du\x20paramètre\x20de\x20configuration', '3|1|5|4|2|6|0', 'maskBindClose', 'IlhNC', 'pesDK', 'YvfJN', 'aZjye', 'GaTxp', 'SrhJG', 'SGldS', 'iyQso', 'FUWoy', 'qzPGw', 'pNBnW', 'BmUdD', 'RqPvt', 'failColor', 'isNumber', 'detachEvent', './_enum-bug-keys', 'qieQW', '<i\x20class=\x27shumei_success_wrong\x27></i><span>Autentiseringen\x20misslyckades,\x20vänligen\x20autentisera\x20igen</span>', 'कृपया\x20क्रम\x20में\x20क्लिक\x20करें', 'uVyOQ', '_formDom', 'qsbNB', 'CToLl', 'uhZNH', 'dwrwT', 'IHgFN', 'hasOwnProperty', 'WsPVQ', 'mode', '[object\x20Object]', 'stringify', 'GMHYO', 'dSOTh', 'xFYMD', 'return\x20this', 'yuJvO', 'hurYw', 'QAfbt', '7|9|16|1|5|8|15|0|6|13|3|17|14|10|12|4|18|11|2', 'PlMob', 'mousemoveData', 'nBHUt', 'pqgUV', 'UmHPA', '_isMoving', 'clientX', 'WPxBG', '5|0|1|2|3|4', 'getDefaultHtml', 'HgbbT', 'Qdnhn', 'select', 'cvgrh', 'sBCCN', 'uctXd', 'RCrux', 'CxzVc', '2|5|4|0|6|1|3', 'BrwnE', '/pr/v1.0.3/img/bg-default@2x.png', 'WSvlk', 'ySFIf', 'jjKqO', 'ERfKu', 'pDNnQ', 'IzWKA', '_phantom', 'post', 'SsSlo', 'CAIlT', 'zyGqU', 'Tbbbz', 'CyeoL', 'NxeRG', 'HpjDM', 'Txjle', 'WXwpM', 'wpIMj', 'Css\x20tải\x20không\x20thành\x20công', 'common', 'WAQSK', 'TECsW', 'FSehe', 'DgLOY', 'documentElement', 'SUaMM', 'responseType', 'background-position', 'getInsensitiveCaTypeApi', 'ostype', 'LnvyM', 'ifOCI', 'toLowerCase', 'xOvbo', 'JMkTk', 'choKr', 'substring', 'tUItF', 'iXfey', 'getFullPageData', 'wFMoh', 'CQIzm', 'xVOyN', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>성공</span>', 'charCodeAt', 'cLYPV', 'cHDzr', 'uLtFS', 'babel-runtime/core-js/get-iterator', 'ZygkO', 'iXNTb', 'zmMdx', 'LOG_ACTION', ',\x20</font>', 'hideRefreshOnImage', 'NMafY', 'getCurrentTime', 'LAKnl', 'dMAZu', 'EUnqE', 'ZwCDs', 'iMwII', 'ZOERe', '6|7|5|4|1|3|2|0', 'VjmOg', './_is-array', 'valueOf', 'css', '3|0|2|4|1', '<i\x20class=\x27shumei_success_wrong\x27></i><span>ล้มเหลว</span>', '3|4|5|1|2|0', 'afterFail', 'mQQBD', 'HyVIe', 'PZfeg', 'removeClass', 'niPQH', 'RZwKH', 'Kegagalan\x20rangkaian|Klik\x20untuk\x20mencuba\x20semula', '_buildErrorHtml', '_selenium', 'Ottieni\x20l\x27eccezione\x20del\x20parametro\x20di\x20configurazione', 'ekrku', '../core-js/object/define-property', './_defined', '\x20is\x20not\x20a\x20symbol!', 'disableCaptcha', 'Сеть\x20слабая\x20|\x20Нажмите,\x20чтобы\x20повторить\x20попытку', 'insensitive_fail', 'ZrlaM', 'jNWha', 'HcnmA', 'rDurF', 'fil', 'NEED', 'ojrSu', './_array-includes', 'en-ph', '參數不合法', '../pkg/smImagesConf', 'KvwtE', '1|4|2|0|3', 'qFEgY', 'nANUQ', 'NWHLh', 'cDEJJ', 'apuFV', '0px', 'Sgtya', 'web_pc', 'ACCGJ', 'HHOnd', 'gomUF', '__webdriver_script_func', '3|0|2|1|4|5', 'eRPLp', '5|1|3|6|0|4|2', 'tgkrX', 'stYuy', 'PDsDR', '<i\x20class=\x27shumei_success_wrong\x27></i><span>gagal</span>', 'Haga\x20clic\x20para\x20completar\x20la\x20verificación', 'BNikd', 'EVivU', '__userConf', 'WrEbC', 'tracer', 'smDebounce', 'navigator', 'shumei_captcha_mask', 'JiaWX', 'blockWidth', 'کنفیگریشن\x20پیرامیٹر\x20کی\x20رعایت\x20حاصل\x20کریں۔', 'currentStyle', 'zh-cn', 'bind', 'mKvnx', 'rRVEK', 'fXWEz', 'I-click\x20para\x20mag-verify', 'kxIaq', 'LmpKz', 'UtPxf', 'AZRHD', '186', 'HcxAo', '/pr/v1.0.3/img/bg-network.png', '\x22\x20class=\x22shumei_captcha_fail_refresh_btn\x22></i>', '\x22\x20class=\x22shumei_captcha_img_load_error_wrapper\x20shumei_hide\x22>', 'shumei_captcha_slide_process', 'DkMLp', './_object-gopn-ext', 'znSMf', 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,', '_errorCallback', 'stopPropagation', 'APVuG', 'qIPLa', 'selectData', 'Javascriptの読み込みに失敗しました', 'getSelectDefaultHtml', 'isArray', 'QCnlQ', '3|0|4|1|2', 'imageLoadErrorEl', 'entries', 'shumei_show', '1701066e', './_export', 'ptLqu', 'TrAAh', '/script', 'left', './_object-keys', '100%', 'rckYz', 'nnLSC', 'nRcVE', 'replace', 'fEuEB', 'utuRk', 'vytvZ', 'backgroundImage', 'BURey', 'qHYvd', 'mIOxq', 'Ervqx', 'VSFCp', 'xfpVD', 'VOzZa', 'bottom', 'Ausnahme\x20für\x20Konfigurationsparameter\x20abrufen', 'mTzQu', 'shumei_captcha_slide_tips_wrapper', 'slide', 'bEyTt', '11|8|3|1|9|7|10|12|6|2|5|0|4', 'khnXD', 'rootDom', 'Obtener\x20excepción\x20de\x20parámetro\x20de\x20configuración', 'zyuhr', 'fCTKx', 'setRequestHeader', '5|6|2|0|1|3|4', 'gpQtc', 'KfsTT', 'pFPUZ', '_obj', 'NZJBO', 'whRpx', 'Network\x20failure|Click\x20to\x20retry', 'AhDIA', 'Das\x20Laden\x20der\x20JS-SDK-Ressource\x20ist\x20fehlgeschlagen', 'mys', '\x20\x20تصویر\x20لوڈ\x20ہو\x20رہا\x20ہے', '6|8|5|9|7|3|2|4|1|0', 'JS-SDK資源加載失敗', 'cQLBC', 'pEiAO', 'pHFck', 'JTPxt', 'IMAGE_LOADED', 'zJWQS', 'isPc', 'vRexy', 'MpyZj', 'zAylH', 'kshux', 'bild\x20laddas', 'log', 'hasClass', '</div>', 'rrHwZ', 'shumei_captcha_popup_wrapper', 'EwxFB', 'ASHoZ', 'fpMouseLeftClickX', 'embed', 'wHPKd', 'atJOR', '/pr/v1.0.3/img/icon-disabled@2x.png', 'mouseup', 'VERIFY_FAIL', 'dlRXD', 'Gvfcb', 'mouseLeftClickData', 'KFlYm', 'pEiVq', 'onSuccess', 'اضغط\x20للتحقق', '../../modules/es6.string.iterator', './smStringify', 'Det\x20gick\x20inte\x20att\x20ladda\x20bildresursen', 'qJpZH', 'Mevcut\x20ağ\x20iyi\x20değil,\x20lütfen\x20yenileyin\x20ve\x20tekrar\x20deneyin', 'zqoMe', 'RVJZq', 'wPdQM', '3|1|0|4|2', 'KmzLD', 'SjlMx', 'slide_success', 'RazPR', 'IcJsH', 'RGotZ', 'imkOO', 'DEFAULT_LANG', 'LWKyq', 'Пожалуйста,\x20нажмите', 'isRegisterInvalid', 'onerror', 'nXTLJ', 'zzYgk', 'GBmNg', 'selectPlaceholder', '/pr/v1.0.3/img/bg-default.png', 'from', 'complete', '네트워크\x20오류|다시\x20시도하려면\x20클릭하세요.', 'Kegagalan\x20beban\x20konfigurasi', '0|1|3|2|7|5|6|4', 'MZPXS', 'overHandler', 'Bbglr', '10|17|16|27|15|13|4|20|12|24|23|14|5|25|22|6|11|2|3|7|26|18|19|0|1|9|21|8', 'zIfyK', 'Jwhju', 'getMousePos', 'WobHM', 'apiConf', 'jVSHR', './_string-at', 'KNBnJ', 'ZVklT', 'CyByf', 'KgAPe', 'jEkvY', 'oobqN', 'DataTimer', 'appVersion', 'get', 'yeWsS', 'tOBio', 'changeImageStatus', 'onreadystatechange', 'uIOhP', 'TzQtV', 'liVpX', 'clientWidth', 'getResult', 'anonymous', 'UIQny', 'uaLNM', 'cUtpY', 'whGlD', 'oJhqv', 'OxWtU', 'shumei_captcha_img_loadding_wrapper', '\x22\x20class=\x22shumei_captcha_img_refresh_btn\x22></div>', 'qlPwR', 'propertyIsEnumerable', 'oOkOm', 'FxLmL', '394186ojjAMU', 'ViIBS', 'eUDpx', 'YNyUl', 'reset', 'vOkdt', 'hookTest', 'TvuOP', 'CfciS', 'jnCUq', 'fonts', 'RbHbQ', 'captchaTypeDomains', 'GXFSs', 'clearEvent', 'xZqQX', '9bdc51cc', 'ddAxi', 'onReadyType', 'cndPT', '_each', 'Javascript\x20load\x20failure', 'hWUgA', 'IEkQx', 'top', '<div\x20class=\x22shumei_captcha_answer\x22\x20style=\x22top:', 'imageLoadedBgEl', 'lbcTe', 'removeEventListener', 'qwmAl', 'DAjPa', './_object-keys-internal', 'FIREFOX', 'confSuccess', 'kzVqv', 'QMbYR', 'CSS資源加載失敗', 'fYjmf', 'RrKqt', 'BkGFC', '10680WQKEde', 'normalizeQuery', '4|2|1|3|0', 'অনুগ্রহ\x20করে\x20নেটওয়ার্ক\x20রিফ্রেশ\x20করুন\x20এবং\x20আবার\x20চেষ্টা\x20করুন৷', './_iter-step', 'smiav', 'MODULE_NOT_FOUND', 'fGMdG', 'toLocaleLowerCase', './_library', 'logDisabled', 'PKvkl', 'กรุณากดสั่งซื้อ', 'FgCVo', '../core-js/symbol', 'NZoxW', 'onInit', '请按成语顺序点击', 'GCNKJ', '/pr/v', 'UYzdo', 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678', 'jIxzs', 'YsHZW', 'captchaType', 'mouseMoveY', 'CWdUO', 'checkConsoleIsOpenHandler', 'stSyK', 'END_MOVE', 'dwMxm', 'JoWYa', 'getInsensitiveDefaultHtml', '../core-js/array/from', 'keyboadStatus', 'web_mobile', 'QojWZ', 'vvoTJ', 'IOhYV', '<img\x20id=\x22', 'Firebug', 'NnbJq', 'mMNQW', 'fpMousemoveX', 'qimse', 'lkphm', 'slideTipsTextEl', 'getAutoSlideDefaultHtml', 'LkiCq', 'FmYgn', 'Не\x20удалось\x20загрузить\x20ресурсы\x20JS-SDK', 'hMvRw', 'prototype', 'PWAcQ', '0|3|4|2|1', 'wJsmz', 'act.os', 'send', '../../modules/es6.object.define-property', 'initSMCaptcha', 'BjqHG', 'responseText', 'पैरामीटर\x20अमान्य\x20है', 'babel-runtime/helpers/toConsumableArray', 'autaI', 'yNCeu', 'outerHeight', 'callback', 'sJGUG', 'width', 'PYbnN', 'shumei_captcha_form_result\x20shumei_hide', 'seaxa', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>ที่ประสบความสำเร็จ</span>', 'tipsMessage', 'XwCAm', 'mouseStartX', 'UWIcq', 'LhLpH', 'EOqnU', 'zuyIm', 'hagbg', 'base64Decode', 'removeElement', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>تصدیق\x20کامیاب\x20ہو\x20گئی۔</span>', './_create-property', 'BADAc', 'POST', 'Falha\x20ao\x20carregar\x20o\x20recurso\x20CSS', 'DXiYU', '3|5|10|6|8|0|4|7|9|2|1', 'sBtXd', 'FuEdG', 'JPFBP', 'sJVZz', 'awdXf', 'VPKpJ', 'kyMfm', 'IEPMh', '4|2|5|3|1|0', 'fhLIy', 'spatial_select', 'فشل\x20تحميل\x20CSS', 'OyESS', 'UlphI', 'gwAOv', 'kbJOl', '14|8|4|7|5|2|10|16|1|13|12|6|11|0|15|9|3', 'shumei_catpcha_header_wrapper', './smConfig', '\x22\x20class=\x22close-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22sm-iconfont\x20iconguanbi\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'footFreshBtnEl', 'XfQsX', 'uWfdI', 'SMadH', 'edtDD', 'YmxTq', './_ie8-dom-define', 'qvxuu', 'indexOf', 'oZgtW', 'mgAxi', 'shumei_captcha_img_refresh_btn', 'uHZMJ', './_to-integer', 'fgEl', 'fromCharCode', 'WzpWX', 'OFamn', 'Bildressource\x20konnte\x20nicht\x20geladen\x20werden', 'vmOGD', 'event', 'OcMmv', '네트워크\x20오류,\x20다시\x20시도하십시오.', 'init', '_Selenium_IDE_Recorder', 'TwnlD', 'sCsxR', 'JMZrt', 'WdoHt', 'พารามิเตอร์ไม่ถูกต้อง', 'qxrJz', 'imULA', 'KszNV', 'brqzU', 'KNAba', '\x22\x20class=\x22shumei_captcha_footer_close_btn\x22></div>', '_successCallback', 'uIudh', 'Pagkabigo\x20sa\x20network', 'WYJxd', 'httDD', 'xvntL', '\x20Iterator', 'getJSONP', 'rem', 'SaLhD', 'updateTplStatus', 'JAVaR', 'ufHQL', 'floor', 'zSpVH', 'nIxmn', 'TAfZx', 'MUWRG', 'WwMyg', 'swRgI', 'pSZer', 'coPli', 'JgtHK', 'فشل\x20تحميل\x20الإعدادات', 'selectPosData', 'zRNox', 'EpURf', 'pGTvj', 'isInitialized', 'VLbIB', 'ffPRV', 'Cannot\x20call\x20a\x20class\x20as\x20a\x20function', 'https', 'oEWLL', 'glSak', 'GGwaP', 'order', 'attachEvent', 'UvyaM', 'DWmZo', 'fontFamily', 'eRfTv', 'uxsAP', 'mouseStartY', 'MdWZo', 'VweZh', 'AxUxg', 'nyrvq', 'NBLHg', './_to-iobject', './_classof', 'bexQO', 'Sequentum', 'IE_PROTO', 'Doğrulamayı\x20tamamlamak\x20için\x20tıklayın', 'KfhdQ', 'JeqUd', 'getPopupHtml', 'setImgUrl', 'SnsEU', 'sOmnz', 'hyydq', 'language', 'ODSQI', 'getMonth', 'iterator', 'slideProcessEl', 'YKHSr', '4|3|2|1|6|5|0', 'split', 'addClass', 'MARor', 'XoiZK', '_readyCallback', 'Tham\x20số\x20không\x20hợp\x20lệ', 'خطأ\x20في\x20الشبكة،\x20يرجى\x20المحاولة\x20مرة\x20أخرى', '9985812hAayah', 'qwUiO', '\x20mode-', 'McWPq', 'Aghge', 'vvwut', 'url(\x27./img/pixel.gif\x27)', 'يرجى\x20الضغط\x20بالترتيب', 'Por\x20favor\x20clique\x20em\x20ordem', 'webdriver', 'type', 'AUGfb', 'trueUnit', 'TrvDU', 'JS-SDK\x20وسائل\x20کی\x20لوڈنگ\x20ناکام\x20ہو\x20گئی۔', 'uuid', 'Yapılandırma\x20parametresi\x20istisnasını\x20al', 'XYTmO', 'HCcJV', 'oLxpF', 'tJfoG', 'HGuGj', 'TMATv', '图片资源加载失败', '이미지\x20로드\x20실패', 'tGjUX', './smUtils', 'Tkwyc', '77e12c2d', 'nschF', 'avVyG', '/pr/v1.0.3/img/bg-loading@2x.png', 'Rqknj', 'isNativeFunction', '/pr/v1.0.3/img/icon-cry@2x.png', 'hGTNt', 'aIirP', 'dZuwv', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>驗證成功</span>', 'djwcL', 'Kewla', 'jsbSi', 'keyup', 'show', 'MZTze', 'cIiRE', 'Ağ\x20güçlü\x20değil\x20|\x20Tekrar\x20denemek\x20için\x20tıklayın', 'YCvlj', 'VERSION', '<span>', 'EAhMh', 'CXJmO', 'https://', 'shumei_captcha_wrapper', './_object-gopn', 'CaLMF', 'Caricamento\x20delle\x20risorse\x20JS-SDK\x20non\x20riuscito', 'VgTBP', 'toString', '重置失败', 'Smyeq', 'rdriP', 'MbsRZ', 'JHuCF', 'smThrottle', 'successBackground', 'cnHMZ', 'mUOpm', 'isObject', 'cvrlY', 'wkDoR', 'XOKTT', 'rgZTp', 'lFZtA', 'OlTIT', 'NMpYJ', 'sxBKF', '/pr/v1.0.3/img/icon-default@2x.png', 'join', 'ক্লিক\x20করুন', '_data', 'xRSAJ', 'ajFAT', 'DKexl', 'bUkek', '@@iterator', 'KJqoa', 'FBBEX', 'symbol-registry', 'โหลดภาพล้มเหลว', 'EENsP', 'core-js/library/fn/json/stringify', '6|2|5|3|0|1|4', 'GSbYF', 'guQZd', 'mCwWS', 'onload', 'HLIbV', 'shumei_', 'TNafR', 'DhAlY', 'RHkNk', 'outerWidth', 'sJBSN', 'number', 'yGTxS', 'KXojl', 'sdkver', '4|1|5|2|7|8|0|3|6', 'fixSuccessSize', 'qQHYl', 'Получить\x20исключение\x20параметра\x20конфигурации', 'pass', 'OlOmn', 'setFirstRootDom', 'tAPvE', 'SMSdk', 'initOnceEvent', 'xtNGo', 'PmSIb', 'qZBZn', 'lhmuG', 'AYcsE', 'kAOum', 'Le\x20réseau\x20n\x27est\x20pas\x20fort\x20|\x20Cliquez\x20pour\x20réessayer', 'fgqyW', 'osULV', 'sliderPlaceholder', 'IKsoD', 'refreshHandler', 'maxRetryCount', 'MYPQC', 'taWHB', 'نیٹ\x20ورک\x20مضبوط\x20نہیں\x20ہے\x20دوبارہ\x20کوشش\x20کرنے\x20کے\x20لیے\x20کلک\x20کریں۔\x20', 'makeURL', 'FLUri', '4|3|0|6|2|5|1', 'Clpev', 'uipvN', 'getEncryptContent', 'ZnRAp', 'ytIPP', 'UqNXc', '/pr/v1.0.3/img/icon-popup-refresh@2x.png', 'ugkoZ', 'slide_hover', 'HDPel', 'close', 'vlwJr', 'xauMW', 'Network\x20failure,\x20Try\x20again', './_object-pie', 'WaYSe', 'eKlWw', 'mouseRightClickDataTimer', '../pkg/smLangMessage', 'kdWIO', 'PaoFx', 'YtSGs', 'Di-wasto\x20ang\x20mga\x20param', 'MNNmn', 'search', 'div', 'YxPYw', 'TniRk', './smLangMessage', 'tilnn', 'hWVfQ', 'Veuillez\x20cliquer\x20dans\x20l\x27ordre', 'IlDAm', 'bkiTA', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>验证成功</span>', 'rxvPO', 'lOPlj', 'insensitiveHandlerCallback', 'smGetIdString', './_object-dps', 'Le\x20réseau\x20actuel\x20n\x27est\x20pas\x20bon,\x20veuillez\x20actualiser\x20et\x20réessayer', 'match', 'FPeCB', 'shumei_captcha_input_rid', 'EcWDH', 'lUNde', 'Accessors\x20not\x20supported!', 'iconfontEls', 'startRequestTime', 'ixNDf', 'LSimH', 'insensitiveProduct', 'eRomd', 'XHdVA', 'shvzP', 'LIYgg', '\x22\x20class=\x22shumei_captcha\x20shumei_captcha_mask\x20shumei_hide\x22></div>', 'jHSLk', 'ntTeD', 'vXGdS', 'SLgBr', 'rid', 'SfeqA', 'babel-runtime/helpers/classCallCheck', 'startTime', 'CSS\x20সংস্থান\x20লোড\x20করতে\x20ব্যর্থ\x20হয়েছে৷', 'bEfAN', 'kSioF', 'getOs', 'XrLbm', 'WYmjj', 'dxYEg', 'YJddL', '3|0|1|4|5|2', 'chrome', 'getValidate', 'OkMyq', 'TQHPl', 'function', 'xFebs', 'rhLrf', 'srIhZ', 'JS-SDK资源加载失败', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>Verificação\x20bem-sucedida</span>', 'setResult', 'failBackground', 'EcVjX', 'gTTmm', 'ulKXG', 'براہ\x20کرم\x20ترتیب\x20میں\x20کلک\x20کریں۔', 'JNmxA', 'no-network', 'getElementById', 'QuDSI', 'SoHBD', 'mouseData', 'sort', 'PLVQT', 'lgtxv', 'Пожалуйста,\x20нажмите,\x20чтобы\x20заказать', 'bTXOR', 'egAAt', 'HKikA', 'pNOnN', 'fixProduct', 'write', 'requête\x20réseau\x20anormale', 'appendTo', 'JDJaW', 'extend', '<i\x20class=\x27sm-iconfont\x20iconchenggong1\x27></i><span>सत्यापन\x20सफल\x20हुआ</span>', 'xsEzl', 'Lhacs', 'OBIQe', 'fVMwE', './_core', 'add', 'solicitação\x20de\x20rede\x20anormal', 'fVerifyUrl', '<iclass=sm-iconfonticonchenggong1></i><span>تم\x20بنجاح</span>', 'wABwq', 'mbKOY', 'GZumQ', 'imageLoadedEl', 'UUVso', 'REOIy', 'RGdaw', 'link', 'parentNode', '/ca/v1/fverify', 'Impossibile\x20caricare\x20la\x20risorsa\x20immagine', 'Échec\x20du\x20chargement\x20des\x20ressources\x20JS-SDK', 'GJAzg', 'random', '画像の読み込みに失敗しました', '646a202e', 'KgesB', 'KwYoP', 'wsWyJ', 'shumei_captcha_img_load_error_wrapper', 'fail', 'boxShadow', 'tha'];
    _0x2af0 = function() {
        return _0x54db18;
    }
    ;
    return _0x2af0();
}
function _0x49fd(_0x4faec5, _0x3504e4) {
    var _0x424204 = _0x2af0();
    return _0x49fd = function(_0x4b590a, _0x1d7e50) {
        _0x4b590a = _0x4b590a - (-0x1265 + 0x7 * -0x1 + 0x13fe);
        var _0x5aafb0 = _0x424204[_0x4b590a];
        return _0x5aafb0;
    }
    ,
    _0x49fd(_0x4faec5, _0x3504e4);
}
(function(_0x7f50e4, _0xbf4999) {
    var _0x448a35 = _0x49fd
      , _0x42b73c = _0x7f50e4();
    while (!![]) {
        try {
            var _0x1049b7 = parseInt(_0x448a35(0x7c3)) / (0x1 * -0x15b + -0x1048 + 0x11a4) + -parseInt(_0x448a35(0xb82)) / (0x1111 + 0xd6c + 0xa29 * -0x3) * (parseInt(_0x448a35(0x2ee)) / (-0x2 * 0xff4 + 0x51d + 0x1ace)) + -parseInt(_0x448a35(0xaa0)) / (0x139e + 0xce3 + -0x1 * 0x207d) * (-parseInt(_0x448a35(0x451)) / (0x1d3f + 0x18a2 + -0x9 * 0x5fc)) + -parseInt(_0x448a35(0x8ca)) / (0x38 * -0x2 + -0x302 + -0x3 * -0x128) + -parseInt(_0x448a35(0x39c)) / (0x1 * -0x1b1 + 0x15a6 + -0x13ee) * (parseInt(_0x448a35(0x7eb)) / (-0x12c8 + -0xa45 + 0x1d15)) + parseInt(_0x448a35(0x22a)) / (-0x1 * -0x5dc + 0x163e + -0x1c11) + parseInt(_0x448a35(0x553)) / (-0x228b * -0x1 + 0x14d9 + -0x2 * 0x1bad) * (parseInt(_0x448a35(0xb93)) / (0xdb3 + 0xcdd + -0x1a85));
            if (_0x1049b7 === _0xbf4999)
                break;
            else
                _0x42b73c['push'](_0x42b73c['shift']());
        } catch (_0x5e6de5) {
            _0x42b73c['push'](_0x42b73c['shift']());
        }
    }
}(_0x2af0, 0xd5530 * 0x1 + 0x68bc1 * 0x1 + -0x7 * 0xaf4f))
//获取ast
var ast = myTool.getAst();
//简单字符串还原
myTool.simplifyLiteral(ast)
//常量合并
myTool.calcPartBinaryExpression(ast)

//NOTE: ob核心还原
var obCallFunctionName = "_0x49fd"
//引用还原函数的替换
const restoreFunctionReplace = {
    FunctionDeclaration(path){
        //基础定义与判断
        let node = path.node
        if(node.id.name !== obCallFunctionName) return

        //找到引用处并替换
        let binding = path.scope.getBinding(obCallFunctionName)
        if (!binding) return;
        for (let referencePath of binding.referencePaths){
            let findPath = referencePath.findParent(p=>types.isVariableDeclarator(p.node))
            if (!findPath) continue;
            //判断是不是 var _0xfb8bcd = _0x4d68 等号后面是不是obCallFunctionName 不是就返回 且前面的不能是
            if(!types.isIdentifier(findPath.node.init) || findPath.node.init.name !== obCallFunctionName) continue
            //找 replaceIdName 引用的地方并替换为 obCallFunctionName
            let replaceIdName = findPath.node.id.name
            let replaceBinding = findPath.scope.getBinding(replaceIdName)
            if(!replaceBinding) continue
            replaceBinding.scope.rename(replaceIdName, obCallFunctionName)
            findPath.remove() //删除掉 因为会产生 obCallFunctionName=obCallFunctionName 导致无限循环,也可以在前面加个判断解决
            isBreak = false
        }
    }
}
let isBreak
while(true){
    isBreak = true
    traverse(ast,restoreFunctionReplace)
    ast = myTool.reAst(ast)
    if(isBreak) break
}

//还原大数组调用
const restoreObCall = {
    FunctionDeclaration(path){
        let node = path.node
        if(node.id.name !== obCallFunctionName) return
        let binding = path.scope.getBinding(obCallFunctionName)
        if(!binding) return;
        for(let referencePath of binding.referencePaths){
            let findPath = referencePath.findParent(p=>types.isCallExpression(p.node))
            if(!findPath) continue;
            if(!findPath.node.arguments || findPath.node.arguments.length!==1||!types.isNumericLiteral(findPath.node.arguments[0])) continue
            let findPathValue = eval(findPath.toString())
            // console.log(`${findPath.toString()}替换为${findPathValue}`)
            findPath.replaceInline(types.valueToNode(findPathValue))
        }
    }
}
traverse(ast,restoreObCall)
//NOTE:其他还原

//还原对象调用
const getGlobalObjectDict = {
    VariableDeclarator(path){
        //判断是不是定义的对象
        if(!path.node.init||!types.isObjectExpression(path.node.init)) return
        let binding = path.scope.getBinding(path.node.id.name)
        if(!binding) return;
        if(!binding.constructor) return;
        //获取属性名称和值的node存储到全局变量中 每一个对象应当是独一无二的
        var objectName = path.node.id.name
        if (globalObjectDict[objectName]) console.log(`已经存储过了${objectName}`)
        if(!globalObjectDict[objectName]) globalObjectDict[objectName] = {}
        for(let propertyNode of path.node.init.properties){
            let objectKeyName = propertyNode.key.value
            let objectValueNode = propertyNode.value
            globalObjectDict[objectName][objectKeyName] = objectValueNode
        }
    }
}
const objectCallRestoreString = {
    MemberExpression(path){
        //判断是否在全局对象中 不在return 在的话取出来
        var memberName = path.node.object.name
        var propertyName = path.node.property.value
        if(!globalObjectDict[memberName]||!globalObjectDict[memberName][propertyName]) return;
        var objectValueNode = globalObjectDict[memberName][propertyName]
        //字符串
        if(types.isStringLiteral(objectValueNode)){
            //不可以是赋值表达式左边的
            if(types.isAssignmentExpression(path.parentPath.node) && path.node === path.parentPath.node.left) return;
            console.log(`替换${path.toString()} --> ${generator(objectValueNode).code}`)
            path.replaceInline(objectValueNode)
        }
    }
}
const objectCallRestoreFunction = {
    MemberExpression(path) {
        //判断是否在全局对象中 不在return 在的话取出来
        var memberName = path.node.object.name
        var propertyName = path.node.property.value
        if (!globalObjectDict[memberName] || !globalObjectDict[memberName][propertyName]) return;
        var objectValueNode = globalObjectDict[memberName][propertyName]
        //函数 父节点必须是call
        if(!types.isCallExpression(path.parentPath)) return;

        if(types.isFunctionExpression(objectValueNode)){
            var paramsNodeList = objectValueNode.params
            var argsNodeList = path.parentPath.node.arguments
            //实参必须是 字符串 id 数字等简单节点
            for(let argNode of argsNodeList){
                if(!types.isIdentifier(argNode)&&!types.isStringLiteral(argNode)&&!types.isNumericLiteral(argNode)&&!types.isMemberExpression(argNode)&&!types.isUnaryExpression(argNode)&&!types.isBinaryExpression(argNode)&&!types.isCallExpression(argNode)&&!types.isAssignmentExpression(argNode)&&!types.isObjectExpression(argNode)&&!types.isThisExpression(argNode)){
                    return;
                }
            }

            //必须只有一行,必须是return
            if(objectValueNode.body.body.length!==1 || !types.isReturnStatement(objectValueNode.body.body[0])) return;
            if(!path.parentPath.container) return; // 父节点不能被破坏
            console.log(`准备还原: ${path.toString()}`)
            if(path.toString() === '_0x34beb1["ikbXP"]') debugger


            //基于return的argument做新的ast
            var functionBodyNode = objectValueNode.body.body[0].argument
            var astFromFunctionBodyNode = types.program([types.expressionStatement(myTool.deepCloneNode(functionBodyNode))])

            //先把形参替换为 argument+index的形式，防止function aaa(d,t){return d+t}类似的情况
            const replaceParams = {
                Identifier(replacePath) {
                    for (let index = 0; index < paramsNodeList.length; index++) {
                        let paramNode = paramsNodeList[index]
                        if (paramNode.name === replacePath.node.name) {
                            replacePath.node.name = "argument" + index
                        }
                    }
                }
            }
            traverse(astFromFunctionBodyNode, replaceParams)

            //再把argument+index 替换为实参
            const replaceArguments = {
                Identifier(replacePath) {
                    for (let index = 0; index < argsNodeList.length; index++) {
                        let argNode = argsNodeList[index]
                        if (replacePath.node.name === 'argument' + index) {
                            replacePath.replaceInline(argNode)
                        }
                    }
                }
            }
            traverse(astFromFunctionBodyNode, replaceArguments)
            //原来调用的地方替换为可执行的
            path.parentPath.replaceInline(astFromFunctionBodyNode.body[0])
        }
    }
}

var globalObjectDict = {}
ast = myTool.reAst(ast)
traverse(ast,getGlobalObjectDict)
traverse(ast,objectCallRestoreString)

ast = myTool.reAst(ast)
globalObjectDict = {}
traverse(ast,getGlobalObjectDict)
traverse(ast,objectCallRestoreString)

ast = myTool.reAst(ast)
globalObjectDict = {}
traverse(ast,getGlobalObjectDict)
traverse(ast,objectCallRestoreString)

globalObjectDict = {}
ast = myTool.reAst(ast)
traverse(ast,getGlobalObjectDict)
traverse(ast,objectCallRestoreFunction)

globalObjectDict = {}
ast = myTool.reAst(ast)
traverse(ast,getGlobalObjectDict)
traverse(ast,objectCallRestoreFunction)
console.log("--------对象还原完毕,进行控制流还原--------")
ast = myTool.reAst(ast)
//简单字符串还原
myTool.simplifyLiteral(ast)
//常量折叠
myTool.constantFolding(ast)
ast = myTool.reAst(ast)
//控制流还原
//控制流还原
const whileSwitchRestore = {
    VariableDeclarator(path){
        if(!path.node.init) return
        let init = path.node.init
        if(!types.isCallExpression(init)||!init.callee||!types.isMemberExpression(init.callee)||!init.callee.property||!types.isStringLiteral(init.callee.property)||init.callee.property.value !== "split") return
        let binding = path.scope.getBinding(path.node.id.name)
        if(!binding) return //存疑 是否判断 binding.constant
        for(let referencePath of binding.referencePaths){
            let findPath = referencePath.findParent(p => types.isMemberExpression(p.node))
            if(!findPath) continue
            if(!types.isSwitchStatement(findPath.parentPath.node)) continue
            console.log(`准备还原: ${path.toString()}`)
            var switchStatementPath = findPath.parentPath
            //
            var switchOrderList = eval(path.toString())
            var orderList = []
            var casePathList = switchStatementPath.get("cases")
            for(let order of switchOrderList){
                for(let casePath of casePathList){
                    let testValue = casePath.node.test.value
                    let consequentPathList = casePath.get("consequent")
                    if(types.isContinueStatement(consequentPathList[consequentPathList.length-1])||types.isBreakStatement(consequentPathList[consequentPathList.length-1])) consequentPathList.pop()
                    if(testValue!==order) continue
                    orderList = orderList.concat(consequentPathList)
                }
            }
            for(let orderPath of orderList){
                switchStatementPath.insertBefore(orderPath.node)
            }
            switchStatementPath.remove()
        }
    }
}
traverse(ast,whileSwitchRestore)
//去掉while-true
const removeWhileTrue = {
    WhileStatement(path){
        if(!types.isBooleanLiteral(path.node.test)||!path.node.test.value)return
        var whileBodyPathList = path.get("body.body")
        if(types.isBreakStatement(whileBodyPathList[whileBodyPathList.length-1])){
            whileBodyPathList.pop()
        }else {
            return;
        }
        for(let bodyPath of whileBodyPathList){
            path.insertBefore(bodyPath.node)
        }
        path.remove()
    }
}
traverse(ast,removeWhileTrue)
ast = myTool.reAst(ast)
console.log("--------控制流还原完毕--------")
//去除无用代码
myTool.removeUselessCode(ast)
// 写入文件
myTool.writeFile(ast);
console.timeEnd("处理完毕，耗时");
