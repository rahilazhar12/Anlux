import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import Home from '../Screens/Home/Home';
import Allwatches from '../Screens/Watches/Allwatches';
import Addwatches from '../Screens/Admin/Addwatches';
import Allbags from '../Screens/Bags/Allbags';
import AddProductForm from '../Screens/Admin/AddBags';
import AddGlasses from '../Screens/Admin/Addglasses';
import Allglasses from '../Screens/Glasses/Allglasses';
import Checkout from '../Screens/Chekout/Checkout';
import SummaryPage from '../Screens/Summary/Summary';
import Thankyou from '../Screens/Thankyou/Thankyou';
import Productdetail from '../Screens/Productdetailpage/Productdetail';

const loadHomeData = async () => {
  const bags = fetch(`${import.meta.env.VITE_API_URL}/api/bags-get`).then(res => res.json());
  const glasses = fetch(`${import.meta.env.VITE_API_URL}/api/glasses-get`).then(res => res.json());
  const watches = fetch(`${import.meta.env.VITE_API_URL}/api/watches-get`).then(res => res.json());

  const [bagsData, glassesData, watchesData] = await Promise.all([bags, glasses, watches]);

  return { bags: bagsData, glasses: glassesData, watches: watchesData };
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={<Home />}
        loader={loadHomeData}
      />
      <Route path="All-Bags" element={<Allbags />} />
      <Route path="Add-bags" element={<AddProductForm />} />
      <Route path="Add-glasses" element={<AddGlasses />} />
      <Route path="All-glasses" element={<Allglasses />} />
      <Route path="Add-watches" element={<Addwatches />} />
      <Route path="All-watches" element={<Allwatches />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="summary" element={<SummaryPage />} />
      <Route path="complete" element={<Thankyou />} />
      <Route path="detailpage/:id" element={<Productdetail />} />
    </Route>
  )
);

export default router;
