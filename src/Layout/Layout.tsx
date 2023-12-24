import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

const Layout = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-black w-full overflow-hidden">
      {/* 進度條 */}
      <motion.div
        className="bg-gradient-to-r from-blue-700 to-blue-200 fixed top-0 w-full origin-left left-0 h-2 z-[999]"
        style={{ scaleX: scaleX }}
      ></motion.div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
