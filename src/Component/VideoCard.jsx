const VideoCard = ({ info }) => {
    // Destructure the relevant properties with optional chaining
    const { 
      snippet: { title, channelTitle, thumbnails } = {}, 
      statistics: { viewCount } = {} 
    } = info || {};
  
    return (
      <div className="w-72 p-3 m-3  shadow-lg ">
        <img className="rounded-lg object-fill" src={thumbnails?.medium?.url} alt={title || "Video thumbnail"} />
        <ul>
          <li className="font-bold py-2">{title || "No title available"}</li>
          <li>{channelTitle || "No channel title available"}</li>
          <li>{viewCount ? `${viewCount} views` : "No view count available"}</li>
        </ul>
      </div>
    );
  };
  
  export default VideoCard;
  



