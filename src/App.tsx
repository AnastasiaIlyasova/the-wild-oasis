import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Main } from "./pages/Main";
import { About } from "./pages/About";
import { Cabins } from "./pages/Cabins";
import { Cabin } from "./pages/Cabin";
import { GuestArea } from "./pages/GuestArea";
import { GuestHome } from "./pages/GuestHome";
import { GuestReservations } from "./pages/GuestReservations";
import { UpdateReservation } from "./components/guest/updateReservation";

function App() {

  return (
        <BrowserRouter>
          <Routes>
            <Route
              element={<AppLayout />}
            >
              <Route index element={<Main />} />
              <Route path="about" element={<About />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="cabin/:id" element={<Cabin />} />
              <Route path="guest" element={<GuestArea />} >
                  <Route index element={<GuestHome />} />
                  <Route path="home" element={<GuestHome />} />
                  <Route path="reservations" element={<GuestReservations />} />
                  <Route path="reservation/update/:id" element={<UpdateReservation />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
