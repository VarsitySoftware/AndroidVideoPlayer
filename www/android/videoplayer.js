window.playAndroidVideo = function (strURL, onStart, onFail) { console.log("XXX - WTF"); cordova.exec(onStart, onFail, "VideoPlayer", "play", [strURL]); };
