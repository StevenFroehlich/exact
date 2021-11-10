import { useState } from "react";

import Topbar from "./sections/topbar/Topbar";
import Area01 from "./sections/area01/Area01";
import Area02 from "./sections/area02/Area02";
import Area03 from "./sections/area03/Area03";
import AreaContact from "./sections/areaContact/AreaContact";
import Footer from "./sections/footer/Footer";
import Menu from "./sections/menu/Menu";

import "./app.scss";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Area01 />
        <Area02 />
        <Area03 />
        <AreaContact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
