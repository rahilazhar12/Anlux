import Homebags from "../Screens/Bags/Homebags";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Allbags from "../Screens/Bags/Allbags";
import AddProductForm from "../Screens/Admin/AddBags";
import AddGlasses from "../Screens/Admin/Addglasses";
import Allglasses from "../Screens/Glasses/Allglasses";
import Checkout from "../Screens/Chekout/Checkout";
import SummaryPage from "../Screens/Summary/Summary";
import Thankyou from "../Screens/Thankyou/Thankyou";
import Productdetail from "../Screens/Productdetailpage/Productdetail";





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
        { path: "/checkout", element: <Checkout /> },
        { path: "/summary", element: <SummaryPage /> },
        { path: "/complete", element: <Thankyou /> },
        { path: "/detailpage/:id", element: <Productdetail /> },
       
      ],
    },
  
   
  ]);


  export default router;