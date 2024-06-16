import Homebags from "../Screens/Bags/Homebags";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Allbags from "../Screens/Bags/Allbags";
import AddProductForm from "../Screens/Admin/AddBags";
import AddGlasses from "../Screens/Admin/Addglasses";
import Allglasses from "../Screens/Glasses/Allglasses";





const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Homebags /> },
        { path: "/All-Bags", element: <Allbags /> },
        { path: "/Add-bags", element: <AddProductForm /> },
        { path: "/Add-glasses", element: <AddGlasses /> },
        { path: "/All-glasses", element: <Allglasses /> },
      ],
    },
  
   
  ]);


  export default router;