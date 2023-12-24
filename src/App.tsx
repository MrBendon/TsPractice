import { Suspense, lazy } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import {  RouterProvider, Routes} from "react-router-dom";
import LoadingPage from "./page/LoadingPage";
import Layout from "./Layout/Layout";

// Lazy Loading Import
const Home = lazy(() => import("./page/Home/Home"));
const AboutUs = lazy(() => import("./page/AboutUs/AboutUs"));
const Services = lazy(() => import("./page/Services/Services"));
const Portfolio = lazy(() => import("./page/Portfolio/Portfolio"));
const News = lazy(() => import("./page/News/News"));
const ContactUs = lazy(() => import("./page/ContactUs/ContactUs"));

// Normal import
// const Header = lazy(() => import("./components/Header"));
// import Home from "./page/Home/Home";
// import AboutUs from "./page/AboutUs/AboutUs";
// import Services from "./page/Services";
// import Header from "./components/Header";
// import Portfolio from "./page/Portfolio/Portfolio";
// import News from "./page/News/News";
// import ContactUs from "./page/ContactUs/ContactUs";

// function App() {
//   return (
//     <Suspense fallback={<LoadingPage />}>
//       <div className="bg-black">
//         <BrowserRouter>
//           <Header></Header>
//           <Routes>
//             <Route index element={<Home />} />
//             <Route path="/aboutus" element={<AboutUs />} />
//             <Route path="/services" element={<Services />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </Suspense>
//   );
// }

//Data Router
const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/aboutus", element: <AboutUs></AboutUs> },
      { path: "/services", element: <Services></Services> },
      { path: "/portfolio", element: <Portfolio></Portfolio> },
      { path: "/news", element: <News></News> },
      { path: "/contactus", element: <ContactUs></ContactUs> },
    ],
  },
]);

function App() {
  return (
    <div className="bg-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
