import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const Homebags = React.lazy(() => import('../Screens/Bags/Homebags'));
const Allbags = React.lazy(() => import('../Screens/Bags/Allbags'));
const AddProductForm = React.lazy(() => import('../Screens/Admin/AddBags'));
const AddGlasses = React.lazy(() => import('../Screens/Admin/Addglasses'));
const Allglasses = React.lazy(() => import('../Screens/Glasses/Allglasses'));
const Checkout = React.lazy(() => import('../Screens/Chekout/Checkout'));
const SummaryPage = React.lazy(() => import('../Screens/Summary/Summary'));
const Thankyou = React.lazy(() => import('../Screens/Thankyou/Thankyou'));
const Productdetail = React.lazy(() => import('../Screens/Productdetailpage/Productdetail'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { 
        path: '/', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Homebags />
          </Suspense>
        ) 
      },
      { 
        path: '/All-Bags', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Allbags />
          </Suspense>
        ) 
      },
      { 
        path: '/Add-bags', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AddProductForm />
          </Suspense>
        ) 
      },
      { 
        path: '/Add-glasses', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AddGlasses />
          </Suspense>
        ) 
      },
      { 
        path: '/All-glasses', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Allglasses />
          </Suspense>
        ) 
      },
      { 
        path: '/checkout', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Checkout />
          </Suspense>
        ) 
      },
      { 
        path: '/summary', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SummaryPage />
          </Suspense>
        ) 
      },
      { 
        path: '/complete', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Thankyou />
          </Suspense>
        ) 
      },
      { 
        path: '/detailpage/:id', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Productdetail />
          </Suspense>
        ) 
      },
    ],
  },
]);

export default router;
