import { useState } from "react";

import Topbar from "./components/topbar/Topbar";
import Area01 from "./components/area01/Area01";
import Area02 from "./components/area02/Area02";
import Area03 from "./components/area03/Area03";
import AreaContact from "./components/areaContact/AreaContact";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

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
      <ScrollToTop />
    </div>
  );
}

export default App;
