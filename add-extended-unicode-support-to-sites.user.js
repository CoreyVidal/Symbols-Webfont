// ==UserScript==
// @name          Add extended Unicode support to sites
// @namespace     http://userstyles.org
// @description	  Add extended Unicode support to sites. I needed this because Notion (notion.so) was showing me tofu on some of my devices.
// @author        CoreyVidal
// @homepage      https://userstyles.org/styles/190397
// @include       http://notion.so/*
// @include       https://notion.so/*
// @include       http://*.notion.so/*
// @include       https://*.notion.so/*
// @run-at        document-start
// @version       0.20201006215120
// ==/UserScript==
(function() {var css = [
	"/* latin-ext  */",
	"@font-face {",
	"  font-family: \'Noto Sans\';",
	"  font-style: normal;",
	"  font-weight: 400;",
	"  font-display: swap;",
	"  src: url(https://fonts.gstatic.com/s/notosans/v11/o-0IIpQlx3QUlC5A4PNr6zRAW_0.woff2) format(\'woff2\');",
	"  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;",
	"}",
	"",
	"/* latin  */",
	"@font-face {",
	"  font-family: \'Noto Sans\';",
	"  font-style: normal;",
	"  font-weight: 400;",
	"  font-display: swap;",
	"  src: url(https://fonts.gstatic.com/s/notosans/v11/o-0IIpQlx3QUlC5A4PNr5TRA.woff2) format(\'woff2\');",
	"  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;",
	"}",
	"",
	"/* fallback */",
	"@font-face {",
	"  font-family: \'Noto Sans Symbols\';",
	"  font-style: normal;",
	"  font-weight: 400;",
	"  font-display: swap;",
	"  src: local(\'Noto Sans Symbols\'), local(\'NotoSansSymbols\'), url(https://fonts.gstatic.com/s/notosanssymbols/v11/rP2dp3q65FkAtHfwd-eIS2brbDN6gwn5.woff2) format(\'woff2\');",
	"}",
	"",
	"/* -------------- */",
	"",
	"@font-face {",
	"  font-family: \'SFMono-Regular\';",
	"  font-style: normal;",
	"  font-weight: 400;",
	"  font-display: swap;",
	"  src: local(\'☺︎\'), url(https://raw.githubusercontent.com/googlefonts/noto-fonts/master/hinted/ttf/NotoSansSymbols2/NotoSansSymbols2-Regular.ttf) format(\'truetype\');",
	"}",
	"",
	"@font-face {",
	"  font-family: \'Monaco\';",
	"  font-style: normal;",
	"  font-weight: 400;",
	"  font-display: swap;",
	"  src: local(\'☺︎\'), url(https://raw.githubusercontent.com/googlefonts/noto-fonts/master/hinted/ttf/NotoSansSymbols2/NotoSansSymbols2-Regular.ttf) format(\'truetype\');",
	"}",
	"",
	"/* #1 Segoe UI Symbol - uses Microsoft Word 365 webfont */",
	"@font-face {",
	"  font-family: Segoe UI Symbol;",
	"  src: local(\'Segoe UI Symbol\'), url(\'https://fs.microsoft.com/fs/4.11/rawguids/48871381854\');",
	"  font-display: swap;",
	"}",
	"",
	"/* #2 Segoe UI Symbol - uses self-hosted .ttf sourced from Windows 10  */",
	"/*",
	"@font-face {",
	"  font-family: \'Segoe UI Symbol\';",
	"  font-style: normal;",
	"  font-weight: 400;",
	"  font-display: swap;",
	"  src: local(\'Segoe UI Symbol\'), url(https://coreyvidal.github.io/Symbols-Webfont/Segoe/seguisym.ttf) format(\'truetype\');",
	"}",
	"*/",
	"",
	"/* #3 Segoe UI Symbol - uses Google Noto Sans Symbols2 webfont */",
	"/*",
	"@font-face {",
	"  font-family: \'Segoe UI Symbol\';",
	"  font-style: normal;",
	"  font-weight: 400;",
	"  font-display: swap;",
	"  src: local(\'Segoe UI Symbol\'), url(https://raw.githubusercontent.com/googlefonts/noto-fonts/master/hinted/ttf/NotoSansSymbols2/NotoSansSymbols2-Regular.ttf) format(\'truetype\');",
	"}",
	"*/",
	"",
	"@font-face {",
	"  font-family: \'Noto Sans Symbols2\';",
	"  font-style: normal;",
	"  font-weight: 400;",
	"  font-display: swap;",
	"  src: local(\'☺︎\'), url(https://raw.githubusercontent.com/googlefonts/noto-fonts/master/hinted/ttf/NotoSansSymbols2/NotoSansSymbols2-Regular.ttf) format(\'truetype\');",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
