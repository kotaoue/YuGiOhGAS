function twitterService() {
  return OAuth1.createService("Twitter")
    .setAccessTokenUrl("https://api.twitter.com/oauth/access_token")
    .setRequestTokenUrl("https://api.twitter.com/oauth/request_token")
    .setAuthorizationUrl("https://api.twitter.com/oauth/authorize")
    .setConsumerKey(PropertiesService.getScriptProperties().getProperty("twitter_api_key"))
    .setConsumerSecret(PropertiesService.getScriptProperties().getProperty("twitter_api_secret"))
    .setCallbackFunction("twitterCallback")
    .setPropertyStore(PropertiesService.getUserProperties());
}

function twitterCallback(request) {
  const service = getService();
  if (service.handleCallback(request)) {
    return HtmlService.createHtmlOutput("ðOK");
  } else {
    return HtmlService.createHtmlOutput("ðNG");
  }
}

function twitterAuthorize() {
  // ä¸åå®è¡ãã¦èªè¨¼ãããããã§OK
  // Logger.log(twitterService().authorize());
}