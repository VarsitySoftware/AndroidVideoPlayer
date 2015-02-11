window.playAndroidVideo = function (strURL, onStart, onFail) { cordova.exec(onStart, onFail, "AndroidVideoPlayer", "playAndroidVideo", [strURL]); };
