import { useEffect } from "react";
import { Youtube_VideosApi } from "../utils/constant";


const VideoContainer = () => {
useEffect(()=>{
getVideos();
},[])

const getVideos=async ()=>{
  const data= await fetch(Youtube_VideosApi)
  const json =await data.json()
  console.log(json);
  
}


  return <div>VideoContainer</div>;
};

export default VideoContainer;
