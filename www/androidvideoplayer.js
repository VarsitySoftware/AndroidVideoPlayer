window.getAndroidMetaData = function (strFilePath, strFileType, onStart, onFail) { cordova.exec(onStart, onFail, "AndroidMediaMetaDataRetriever", "getAndroidMetadata", [strFilePath, strFileType]); };
