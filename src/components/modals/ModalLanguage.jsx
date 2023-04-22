import "./modalLanguage.css";
import { useEffect } from "react";
import ReactDOM from "react-dom";

function ModalLanguage({selectedUS, selectedBR}) {

  useEffect(() => {
    //esse é um portal feito com react.
    //modalDelete.css possui a classe 'overflow-hidden'
    //modalBackground precisa ter inset = 0 e position absolute
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modalBackground">
      <div className="modalBox">
        <div>Please select a language:</div>
        <div className="languagesToSelect">
          <div title="en-US" className="selectUS" onClick={selectedUS}>🇺🇸</div>
          <div title="pt-BR" className="selectBR" onClick={selectedBR}>🇧🇷</div>
        </div>
      </div>
    </div>,

    document.querySelector(".modal-container")
  );
}

export default ModalLanguage;
