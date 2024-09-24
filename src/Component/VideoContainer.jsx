import { useEffect, useState } from "react";
import { Youtube_VideosApi } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos,setVideos] = useState([])
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_VideosApi);
    const json = await data.json();
     console.log(json.items);
     setVideos(json.items)
  };
  
 
  return( <div className="flex flex-wrap">
    {videos.map(video=> <VideoCard key={video.id} info={video}/>)}
   
  </div>
  )
};

export default VideoContainer;
