import { useState } from "react";

import Topbar from "./section/topbar/Topbar";
import Area01 from "./section/area01/Area01";
import Area02 from "./section/area02/Area02";
import Area03 from "./section/area03/Area03";
import AreaContact from "./section/areaContact/AreaContact";
import Footer from "./section/footer/Footer";
import Menu from "./section/menu/Menu";

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
