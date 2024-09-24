import "./App.css";
import Head from "./Component/Head";
import Body from "./Component/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter } from "react-router-dom";

const appRouter=createBrowserRouter([{
  
}])


function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <Body />
      </div>
     </Provider>
  );
}

export default App;
