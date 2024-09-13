const Head = () => {
  return (
    <div className="grid grid-flow-col p-3 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-16"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu"
        />
        <img
          className="h-16 mx-2"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="logo"
        />
      </div>
      <div className="col-span-10 px-10 mt-2">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full   "
          type="text"
          placeholder="search"
        />
        <button className="border border-gray-500 rounded-r-full p-2 ">🔍</button>
      </div>
      <div className="flex col-span-1 ">
        <img
          className=" h-8 w-6 mr-8 mt-4"
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
