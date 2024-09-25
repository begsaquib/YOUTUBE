import "./App.css";
import Head from "./Component/Head";
import Body from "./Component/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincontainer from "./Component/Maincontainer";
import WatchPage from "./Component/WatchPage";

const appRouter=createBrowserRouter([{
   path:"/",
   element: <Body/>,
   children: [
   { path: "/",
    element : <Maincontainer/>,
},
{
  path:"watch",
  element :<WatchPage/>
}

   ]
  
}])


function App() {
  return (
    <Provider store={store}>
      <div >
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
     </Provider>
  );
}

export default App;
