window.playAndroidVideo = function (strURL, onStart, onFail) { cordova.exec(onStart, onFail, "VideoPlayer", "play", [strURL]); };
