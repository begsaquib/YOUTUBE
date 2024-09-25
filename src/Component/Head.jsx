import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { Youtube_searchApi } from "../utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [ShowSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    //see i need to make a API call at every key press but
    // if the time diffference is >200ms decline the api request

    const timer = setTimeout(() => getsearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getsearchSuggestion = async () => {
    console.log(searchQuery);
    const data = await fetch(Youtube_searchApi + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuhandler()}
          className="h-16 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-16 mx-2"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 mt-2">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full   "
            type="text"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-500 rounded-r-full p-2 ">
            🔍
          </button>
        </div>
        {ShowSuggestion && (
          <div className="fixed bg-white py-2 mx-2 w-[30rem] shadow-lg rounded-xl border border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="px-5 py-2 shadow-md m-1 hover:bg-gray-100"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1  ">
        <img
          className=" h-8 w-6 mr-8 mt-4 "
          src="https://cdn-icons-png.flaticon.com/512/565/565422.png"
          alt="alerts"
        />
        <img
          className=" h-11 mt-3 "
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user_icon"
        />
      </div>
    </div>
  );
};

export default Head;

