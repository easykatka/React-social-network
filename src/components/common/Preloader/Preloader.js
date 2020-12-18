import preloader from "../../../Reload.svg";
import "../../../index.css"

let Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
