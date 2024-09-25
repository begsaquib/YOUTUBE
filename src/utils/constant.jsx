const GoogleApiKey = "AIzaSyDf07ye5D6RX4yZy5wPS5aIcyLCKHu_lgg";

export const Youtube_VideosApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&key=" +
  GoogleApiKey;

export const Youtube_searchApi =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
