    var exec = require("cordova/exec");
    var AndroidVideoPlayer = function () {};

    /**
     * Starts the video player intent
     *
     * @param url           The url to play
     */
    AndroidVideoPlayer.prototype.play = function(url, onStart, onFail) {
        exec(onStart, onFail, "AndroidVideoPlayer", "playVideo", [url]);
    };

    var androidVideoPlayer = new AndroidVideoPlayer();
    module.exports = androidVideoPlayer;


if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.androidVideoPlayer) {
  
    window.plugins.androidVideoPlayer = cordova.require("cordova/plugin/androidvideoplayer");
}
