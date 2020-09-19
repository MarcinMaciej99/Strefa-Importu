import React, { useEffect } from "react";
// import Typical from "react-typical";
import "./MainSection.scss";
// import lottie from "lottie-web";

const MainSection = () => {
  let animationContainer = React.createRef();

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: animationContainer.current,
  //     animationData: animation,
  //   })
  // }, [])

  return (
    <main>
      <div className="main-container">
        <div className="main-section">
          {/* <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Doświadczenie",
              3000,
              "Kreatywność",
              3000,
              "Zajawka",
              3000,
            ]} */}
          {/* /> */}
          <div className="main-section__description">
            ... I wiele innych cech, wyróżnia nas sposród innych! Skontaktuj się
            z nami a stworzymy twoją wymarzoną strone internetową.
          </div>
          <div className="main-section__buttons">
            <button className="main-section__buttons--contact">Kontakt</button>
            <button className="main-section__buttons--projects">Kontakt</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
