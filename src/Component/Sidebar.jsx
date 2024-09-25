import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuopen=useSelector(store=>store.app.isMenuopen)

  if(!isMenuopen) return null  //Early return

  return (
     
    <div className=" shadow-lg w-50 p-4">
      <div className="mb-3">
        <ul>
         <Link to="/"> <li className="font-bold p-2 m-2">Home</li></Link>
          <li className=" font-bold p-2 m-2">Shorts</li>
          <li className=" font-bold p-2 m-2">Live</li>
        </ul>
        
      </div>
      <hr />
      <div>
       
        <h1 className="font-bold mb-3">Subscription</h1>
        <ul>
          <li className="p-2 m-2">Your channel</li>
          <li className="p-2 m-2">History</li>
          <li className="p-2 m-2">Playlist</li>
          <li className="p-2 m-2">Your Videos</li>
          <li className="p-2 m-2">Watch later</li>
          <li className="p-2 m-2">liked Videos</li>
          <li className="p-2 m-2">Download</li>
        </ul>
      </div>
     <hr />
     <div>
       <h1 className="font-bold mb-3">Trending</h1>
       <ul>
         <li className="p-2 m-2">Music</li>
         <li className="p-2 m-2">Gaming</li>
         <li className="p-2 m-2">livestreams</li>
         <li className="p-2 m-2">Liked Videos</li>
         </ul>
         </div>  
    </div>
  );
};

export default Sidebar;
