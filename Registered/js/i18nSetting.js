$(function() {
	var userLang = navigator.language || navigator.userLanguage;
	if(userLang.indexOf('en') == 0){
		i18n.init({ 
			lng: 'en',
			cookieName: '_rt.lang',
			getAsync: false,
			fallbackLng: 'en',
			keyseparator: '/'
		}, function (t) {
			 $(document).i18n();
	 	});
	}else if(userLang == 'zh-TW'){
		i18n.init({ 
			lng: 'zh-TW',
			cookieName: '_rt.lang',
			getAsync: false,
			fallbackLng: 'zh-TW',
			lngWhitelist: ['zh-TW'],
			keyseparator: '/'
		}, function (t) {
			 $(document).i18n();
	 	});
	}else{
		i18n.init({ 
			lng: 'zh-CN',
			cookieName: '_rt.lang',
			getAsync: false,
			fallbackLng: 'zh-CN',
			lngWhitelist: ['zh-CN'],
			keyseparator: '/'
		}, function (t) {
			 $(document).i18n();
	 	});
	}	
});