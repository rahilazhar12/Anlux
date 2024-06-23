import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import ClipLoader from 'react-spinners/ClipLoader';

const Home = lazy(() => import('../Screens/Home/Home'));
const Allwatches = lazy(() => import('../Screens/Watches/Allwatches'));
const Addwatches = lazy(() => import('../Screens/Admin/Addwatches'));
const Allbags = lazy(() => import('../Screens/Bags/Allbags'));
const AddProductForm = lazy(() => import('../Screens/Admin/AddBags'));
const AddGlasses = lazy(() => import('../Screens/Admin/Addglasses'));
const Allglasses = lazy(() => import('../Screens/Glasses/Allglasses'));
const Checkout = lazy(() => import('../Screens/Chekout/Checkout'));
const SummaryPage = lazy(() => import('../Screens/Summary/Summary'));
const Thankyou = lazy(() => import('../Screens/Thankyou/Thankyou'));
const Productdetail = lazy(() => import('../Screens/Productdetailpage/Productdetail'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={
          <Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader size={50} /></div>}>
            <Home />
          </Suspense>
        }
      />
      <Route path="All-Bags" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader size={50} /></div>}><Allbags /></Suspense>} />
      <Route path="Add-bags" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader size={50} /></div>}><AddProductForm /></Suspense>} />
      <Route path="Add-glasses" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader size={50} /></div>}><AddGlasses /></Suspense>} />
      <Route path="All-glasses" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader size={50} /></div>}><Allglasses /></Suspense>} />
      <Route path="Add-watches" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader size={50} /></div>}><Addwatches /></Suspense>} />
      <Route path="All-watches" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader size={50} /></div>}><Allwatches /></Suspense>} />
      <Route path="checkout" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader size={50} /></div>}><Checkout /></Suspense>} />
      <Route path="summary" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader size={50} /></div>}><SummaryPage /></Suspense>} />
      <Route path="complete" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader size={50} /></div>}><Thankyou /></Suspense>} />
      <Route path="detailpage/:id" element={<Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader size={50} /></div>}><Productdetail /></Suspense>} />
    </Route>
  )
);

export default router;
