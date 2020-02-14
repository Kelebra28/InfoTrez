$(function () {

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?#&]" + name + "=([^&#]*)", "i"),
            results = regex.exec(location.href);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var showPrompt = getParameterByName("cp");
    var aid = getParameterByName("aid");
    var whitelistedAids = [
        '80801338', '80801230', '80801331', '80801101', '80801205', '80801356', '80801103', '80801300', '80801297',
        '80801123', '80801153', '80801215', '80801094', '80801162', '80801072', '80801207', '80801206',
        '80801370', '80801129', '80801181',
        '80801235', '80801250', '80801298', '80801208', '80801276', '80801035', '80801332', '80801117', '80801365',
        '80801272', '80801221', '80801373', '80801070', '80801247', '80801375', '80801273', '80801391', '80801227',
        '80801192', '80801302', '80801155', '80801084', '80801329', '80801034', '80801043', '80801107', '80801158',
        '80801152', '80801095', '80801096', '80801073', '80801136', '80801242', '80801267', '80801351', '80801046',
        '80801371', '80801133', '80801294', '80801251', '80801051',
        "80861035", "80861051", "80861140", "80861036", "80861046", "80861047", "80801370", "80801129", "80801181",
        "80861049", "80801172", "80801240", "80801180", "80861041", "80801140", "80801102", "80801040", "80801390", "80801054", "80861048", "80801069",
        "80801207", "80861032", "80801141", "80861039", "80801299", "80801048"
    ];

    var showPromptForAid = (whitelistedAids.indexOf(aid) > -1);
    if (showPrompt == "true" || showPromptForAid == true) {
        (function () {
            var cookieName = "FirstEncounterNotification";

            function setCookie(name, value, days) {
                var expires = "";
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + (value || "") + expires + "; path=/";
            }

            function getCookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }

            if (getCookie(cookieName)) {
                return;
            }

            var infoBase = getParameterByName("affid");
            if (infoBase) {
                infoBase = decodeURIComponent(infoBase);
                var tempStr = infoBase.substring(5, infoBase.length - 20);
                infoObj = JSON.parse(window.atob(tempStr));
                var cc = localStorage.getItem("cc");
                if (cc != infoObj.g.toLowerCase()) {
                    cc = infoObj.g.toLowerCase();
                    localStorage.setItem("cc", cc);
                }

                var geos = [
                    'ad', 'al', 'at', 'az', 'be', 'bg', 'by', 'ch', 'cy', 'cz', 'de', 'dk', 'ee', 'es', 'fi', 'fr',
                    'ge', 'gr', 'hr', 'hu', 'ie', 'is', 'it', 'kz', 'li', 'lt', 'lu', 'lv', 'mc', 'me', 'mk', 'mt',
                    'nl', 'no', 'pl', 'pt', 'ro', 'rs', 'se', 'si', 'sk', 'sm', 'tr', 'ua'
                ];
                if (geos.indexOf(cc.toLowerCase()) == -1) {
                    return;
                }
            }

            var notificationText =
                    "We use cookies for security and analytics purposes. By continuing to use our site, you accept our use of cookies, revised Privacy Policy and End User License Agreement.",
                notificationDiv = document.createElement('div'),
                closeButton = document.createElement('span');
            notificationDiv.style.cssText =
                "display: block; text-align: left; font-size:12px; position:absolute; bottom: 120px; left:27.5%; width:45%; color: #848484; padding: 20px 25px; background: rgb(255,255,255); background: linear-gradient(0deg, rgba(255,255,255,0.5410539215686274) 0%, rgba(242,238,238,1) 100%);";
            notificationDiv.innerText = notificationText;
            closeButton.innerText = "X";
            closeButton.style.cssText =
                "z-index:999; color: #696969; display:block; cursor: pointer; position:absolute; top:-18px; right:0;"
            closeButton.addEventListener("click",
                function (e) {
                    notificationDiv.parentNode.removeChild(notificationDiv);
                },
                false);
            notificationDiv.appendChild(closeButton);
            document.body.appendChild(notificationDiv);
            setCookie(cookieName, 1, 180);
        })();
    }
});