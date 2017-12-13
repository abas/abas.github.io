/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/12/01/How-To-Install-Inkscape-via-Command-Line-Linux/index.html","be20860df18da0320456e0cf92cbe1e7"],["/2017/12/05/hello-world/index.html","65a49e31815e384a79a704a3d94d5551"],["/2017/12/06/How-to-Install-Composer-via-CLI/index.html","36f024c3a4d3319f1c0cb9e41633d056"],["/2017/12/09/How-to-Install-Git/index.html","7c93b5d2245d04bf9e5daba768de788f"],["/2017/12/12/Git-Flow/index.html","8e89e236b2373c008951f8669401d230"],["/about/index.html","588f1cfd1798b984b55849605a0c52ec"],["/archives/2017/12/index.html","e534cc1cfbd7c856c2f89709b47d9333"],["/archives/2017/index.html","52c23acc1ad5ae30e596af24d804a13a"],["/archives/index.html","5a208c280e118c8a1efd032fb9f41b35"],["/asset/composer.png","327a2fe3c4969a1cad0007a84509178f"],["/asset/composer_logo.jpg","fe5ac5eecf4635e6acce79028cac963b"],["/asset/desain_kaos_github.svg","fa143a3ebd0729114482f8b54c1df93e"],["/asset/desain_kaos_sfd_2017.svg","51210379927b2cfd6c430716d4e3f0d4"],["/asset/desain_poster_c-share.svg","9ad7282ec9248f4dbacdee8e25e058c0"],["/asset/desktop.png","297aa03d189983e75248ce16de9b5c6d"],["/asset/desktop_2.png","83eb0f250302f2e76008d511de1f09bd"],["/asset/eoaU7M.jpg","076d0ad4b218bc17848ea145680ef590"],["/asset/git-bash-download.png","8c853ca40d91fd48cfb5464dd8be6e98"],["/asset/git-command.png","ac524898d2e44b305fa99785670c9b7b"],["/asset/git-design-pattern.svg","1410c76dddeb1bdda67feb7439116b9b"],["/asset/git-github.svg","dbdbf035fded0e5802f9c8d79ee54664"],["/asset/git-type.sh.png","d684c8643b6efa03943961b8da90a1e4"],["/asset/git.svg","7f930e666f005b51d63854d5a828d316"],["/asset/inkscape.svg","e111dfc75c62d781ac7a0ce11c4850d4"],["/asset/list-git-bash.png","0e06685948fadc65c3ef155a7c3162ff"],["/categories/Cross-Platform/index.html","e53ebbf9931d549eb2bf1b747e7009e7"],["/categories/Linux/Desktop/index.html","1fd16b1b141dfb7fc10226ff074447b9"],["/categories/Linux/Web/index.html","ea9ea6b5aefb5611e7764e3fd47e2010"],["/categories/Linux/index.html","e8bce527f141479fc206555033903cc4"],["/css/images/avatar.jpg","3e7a4d1895d4105e833b6b6b9300e5cb"],["/css/images/avatar.png","2bbf11f99e2eb7075cea2fa9fe7a6568"],["/css/images/avatar.svg","771ee4a484010eb327a393ff7f9a0184"],["/css/images/favicon/favicon.svg","c6a990ff200cf544a990dd287561f335"],["/css/images/logo.png","b770d93c20b516bf7d98e1e2b50f93e8"],["/css/images/thumbnail.svg","85d122360ce667889235d82fade2ceea"],["/css/style.css","c0fa3cb22322e6e7045b2ad63e9cb69a"],["/gallery/index.html","86ffefbaca10d7c63cf2ccbdfaed92d7"],["/hexo-github/badge.js","4e6e7b242c9bda1a915d03396a80bbb4"],["/hexo-github/octicons/octicons.css","6106fffe1c57ec203cd3d021ee60b2bc"],["/hexo-github/octicons/octicons.eot","9f0a2ff14cf82ade5b0d5d09fc77a484"],["/hexo-github/octicons/octicons.svg","8aa4d1a49fdf65cee44b75c58af991f4"],["/hexo-github/octicons/octicons.ttf","8cc473483ca11c160a7d021b9773e81f"],["/hexo-github/octicons/octicons.woff","5c2faa6e48106b82a0a22652110ba9d5"],["/hexo-github/style.css","b5a2d4967e975077b4f3047cdab71068"],["/index.html","25a5f093b797b2726886c8329d991292"],["/js/insight.js","6e615b3fb67f5708bed53ff3532df5b0"],["/js/main.js","41e00d5f21de3459580100bbe57ca461"],["/libs/font-awesome/css/font-awesome.css","a16730221cf9c8b1bad3dd5419edf16b"],["/libs/font-awesome/css/font-awesome.min.css","bb53ad7bffecc0014d64553e96501dce"],["/libs/font-awesome/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/libs/font-awesome/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/libs/font-awesome/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/libs/font-awesome/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/libs/font-awesome/fonts/fontawesome-webfont.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["/libs/jquery/2.1.3/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/libs/justified-gallery/jquery.justifiedGallery.min.js","7b8f9e0d4b845e90381ae044b8b5e657"],["/libs/justified-gallery/justifiedGallery.min.css","9a5e8949e0c84f864668f0205c5fafbd"],["/libs/lightgallery/css/lg-fb-comment-box.css","2ab4129c7b8cd8f3d4d0ce62e66904d6"],["/libs/lightgallery/css/lg-fb-comment-box.min.css","f216c9f755ca3131d5d8abff3eee5193"],["/libs/lightgallery/css/lg-transitions.css","c7c90f6be9108b17e459ef992e7e889b"],["/libs/lightgallery/css/lg-transitions.min.css","a3330c0ba52c1c1f912fa21966ba7079"],["/libs/lightgallery/css/lightgallery.css","fd0ae83fc66fd7b96d2066b94805a39e"],["/libs/lightgallery/css/lightgallery.min.css","2a128ed1be3f9be67ef99d92f95845fc"],["/libs/lightgallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightgallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightgallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightgallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightgallery/img/loading.gif","0aeca8b09888accfccf11976b34c4e64"],["/libs/lightgallery/img/video-play.png","4f03bd8dec67211ade8abdab39dcbf4a"],["/libs/lightgallery/img/vimeo-play.png","699d005153517ee4264615dd1e4e2b64"],["/libs/lightgallery/img/youtube-play.png","96bc9d7e27d077372cc0bc9524c500e6"],["/libs/lightgallery/js/lg-autoplay.js","eead116e849544337f98e1f909984da6"],["/libs/lightgallery/js/lg-autoplay.min.js","9cc557cce697d947b82db9c63bec1f56"],["/libs/lightgallery/js/lg-fullscreen.js","4f138d53ae7b5f8ebec5917daebe1892"],["/libs/lightgallery/js/lg-fullscreen.min.js","ad666d733183e14359ad2dc3b17ed161"],["/libs/lightgallery/js/lg-hash.js","4de75c991f347a3501fdb2fe0833b1cf"],["/libs/lightgallery/js/lg-hash.min.js","17182adfcf75dccb64391343c90586ad"],["/libs/lightgallery/js/lg-pager.js","2ddc77bc71fdd588e05ee3f27b6e187b"],["/libs/lightgallery/js/lg-pager.min.js","79ae9590a49eece30be5a7318d2836c6"],["/libs/lightgallery/js/lg-share.js","40bb22981ba549bf9086118147608b4e"],["/libs/lightgallery/js/lg-share.min.js","f38dda2f772f0cc5a143e40e0cb96eae"],["/libs/lightgallery/js/lg-thumbnail.js","02e7bfe2e732f524cd3dd6f78dec110b"],["/libs/lightgallery/js/lg-thumbnail.min.js","16d7b8599fddeb7af22cf00684ab2b25"],["/libs/lightgallery/js/lg-video.js","4e1459c4a990ca4f9fe58f385762b31a"],["/libs/lightgallery/js/lg-video.min.js","974a23bceeaada9b60c467129acfc422"],["/libs/lightgallery/js/lg-zoom.js","284a3d8af84caf362eea54eefe89b145"],["/libs/lightgallery/js/lg-zoom.min.js","280784d5d0c1cd5f74c758eb44217149"],["/libs/lightgallery/js/lightgallery.js","22c34dbc5304139b95331d24c547c5fa"],["/libs/lightgallery/js/lightgallery.min.js","d8362d715c324c128556fd285143e0af"],["/libs/open-sans/fonts/59ZRklaO5bWGqF5A9baEERJtnKITppOI_IvcXXDNrsc.woff2","5c02962e1f9a25f98cc3cab0dc1ee177"],["/libs/open-sans/fonts/K88pR3goAWT7BTt32Z01mxJtnKITppOI_IvcXXDNrsc.woff2","4b60e71334d025be8bd843acc59753e1"],["/libs/open-sans/fonts/LWCjsQkB6EMdfHrEVqA1KRJtnKITppOI_IvcXXDNrsc.woff2","f736e54388bfaad417df1b30814b6aae"],["/libs/open-sans/fonts/MTP_ySUJH_bn48VBG8sNShWV49_lSm1NYrwo-zkhivY.woff2","939e98a08836a97a66270b57e27bd8fc"],["/libs/open-sans/fonts/MTP_ySUJH_bn48VBG8sNSj0LW-43aMEzIO6XUTLjad8.woff2","f1517b1978d9eade19e14b6af80399d9"],["/libs/open-sans/fonts/MTP_ySUJH_bn48VBG8sNSpX5f-9o1vgP2EXwfjgl7AY.woff2","8f9f0586975cc324d50ef38724af51b8"],["/libs/open-sans/fonts/MTP_ySUJH_bn48VBG8sNSq-j2U0lmluP9RWlSytm3ho.woff2","aff3c03f02a0241e48428d4667537ee5"],["/libs/open-sans/fonts/MTP_ySUJH_bn48VBG8sNSqaRobkAwv3vxw3jMhVENGA.woff2","685bd861e8c8faa3050f8e4dc080d329"],["/libs/open-sans/fonts/MTP_ySUJH_bn48VBG8sNSugdm0LZdjqr5-oayXSOefg.woff2","fa907b3395c41e35cdb25dca66a58ca9"],["/libs/open-sans/fonts/MTP_ySUJH_bn48VBG8sNSv8zf_FOSsgRmwsS7Aa9k2w.woff2","ebdeb66f176f48e99a3a02a7790f6cdf"],["/libs/open-sans/fonts/RjgO7rYTmqiVp7vzi-Q5URJtnKITppOI_IvcXXDNrsc.woff2","85759f54539623a05bf2e5a3f6799daf"],["/libs/open-sans/fonts/cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2","e64cab167bbdc04807429d10873901a0"],["/libs/open-sans/fonts/u-WUoqrET9fUeobQW7jkRRJtnKITppOI_IvcXXDNrsc.woff2","921dd520c3fba714997c8b941d51dbc5"],["/libs/open-sans/fonts/xjAJXh38I15wypJXxuGMBiYE0-AqJ3nfInTTiDXDjU4.woff2","724908b2d54bc5d812d1411612bb784a"],["/libs/open-sans/fonts/xjAJXh38I15wypJXxuGMBjTOQ_MqJVwkKsUn0wKzc2I.woff2","13cab8e841c8c586e6e08eec41838f0d"],["/libs/open-sans/fonts/xjAJXh38I15wypJXxuGMBjUj_cnvWIuuBMVgbX098Mw.woff2","d8098767b8986daf4383f4adf6b2f511"],["/libs/open-sans/fonts/xjAJXh38I15wypJXxuGMBkbcKLIaa1LC45dFaAfauRA.woff2","89293e42d235a3a3588171f24b015f6b"],["/libs/open-sans/fonts/xjAJXh38I15wypJXxuGMBmo_sUJ8uO4YLWRInS22T3Y.woff2","90d60ad6db763b1d0212b21a2b0d44d7"],["/libs/open-sans/fonts/xjAJXh38I15wypJXxuGMBo4P5ICox8Kq3LLUNMylGO4.woff2","2868c329f2c9de786cbc4a5b6989ae08"],["/libs/open-sans/fonts/xjAJXh38I15wypJXxuGMBr6up8jxqWt8HVA3mDhkV_0.woff2","3eabb7718a430aa45cda7302c2151f22"],["/libs/open-sans/fonts/xozscpT2726on7jbcb_pAhJtnKITppOI_IvcXXDNrsc.woff2","c09ea514a21d4a93bc0c4a96ed503a59"],["/libs/open-sans/styles.css","663afa138d47e4cef4455370cf00ee66"],["/libs/source-code-pro/fonts/mrl8jkM18OlOQN8JLgasD9V_2ngZ8dMf8fLgjYEouxg.woff2","89f2d0bc9b0b668da7eed7b81fd13e04"],["/libs/source-code-pro/fonts/mrl8jkM18OlOQN8JLgasDy2Q8seG17bfDXYR_jUsrzg.woff2","430e7d6b50c6d66a1385d94d04937440"],["/libs/source-code-pro/styles.css","fd6b67f05e7415482cf4e038fd39efed"],["/portofolio/index.html","885c6be6653cd813eb761a6009384cd0"],["/project/index.html","471ced94219ac04cd2ccf80c0bea030a"],["/sw-register.js","2f68da07609af52fd7ca6b6d741a5584"],["/tags/Cli/index.html","975f088ce88eab55d1667bdfd3ef2a2d"],["/tags/Multimedia/index.html","a89761dea70f286d180f0e86c2c2d901"],["/tags/Pemrograman/index.html","89535fde8e95c6aa3ad1cc634b16a9b6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
