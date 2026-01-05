import "./App.css";
import Routes from "./Routes";
import { useEffect } from "react";
import AOS from "aos";
function App(props) {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        disable: "mobile",
      });
    };

    initAOS();

    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Routes hideLoader={props.hideLoader} showLoader={props.showLoader} />
    </div>
  );
}

export default App;
