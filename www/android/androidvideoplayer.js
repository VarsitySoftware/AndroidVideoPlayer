window.playAndroidVideo = function (strFilePath, onStart, onFail) { cordova.exec(onStart, onFail, "AndroidVideoPlayer", "playAndroidVideo", [strFilePath]); };
