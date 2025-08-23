import { Outlet } from "react-router";
import Header from "./features/header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
