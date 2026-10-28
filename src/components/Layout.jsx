import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main classname="container">
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}

export default Layout;