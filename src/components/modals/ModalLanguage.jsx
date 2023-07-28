import "./modalLanguage.css";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import 'animate.css';

function ModalLanguage({selectedUS, selectedBR}) {

  useEffect(() => {
    //esse é um portal feito com react.
    //modalDelete.css possui a classe 'overflow-hidden'
    //modalBackground precisa ter inset = 0 e position absolute
    document.body.classList.add("overflow-hidden");

    window.addEventListener("load", () => {
      // Rola para o topo da página
      window.scrollTo(0, 0);
    });

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modalBackground animate__animated animate__fadeIn">
      <div className="modalBox">
        <div>Please select a language:</div>
        <div className="languagesToSelect">
          <div title="en-US" className="selectUS" onClick={selectedUS}>English</div>
          <div title="pt-BR" className="selectBR" onClick={selectedBR}>Portuguese</div>
        </div>
      </div>
    </div>,

    document.querySelector(".modal-container")
  );
}

export default ModalLanguage;
