import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";

function AppLayout() {
  return (
    <div style={{flex: 1}}>
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;