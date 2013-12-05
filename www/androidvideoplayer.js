cordova.define("cordova/plugin/androidvideoplayer",
  function(require, exports, module) {
    var exec = require("cordova/exec");
    var AndroidVideoPlayer = function () {};

    /**
     * Starts the video player intent
     *
     * @param url           The url to play
     */
    AndroidVideoPlayer.prototype.play = function(url) {
        exec(null, null, "AndroidVideoPlayer", "playVideo", [url]);
    };

    var androidVideoPlayer = new AndroidVideoPlayer();
    module.exports = androidVideoPlayer;
});

if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.androidVideoPlayer) {
  
    window.plugins.androidVideoPlayer = cordova.require("cordova/plugin/androidvideoplayer");
}
