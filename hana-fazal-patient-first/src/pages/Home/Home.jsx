import "./Home.scss";
import { NavLink } from "react-router-dom";
import healthreport from "../../assets/Icons/health-report.png";
import outcomes from "../../assets/Icons/outcomes.png";
import regenerative from "../../assets/Icons/regenerative.png";

function Home() {
  return (
    <section className="home">
      <section className="home__get-started">
        <div className="home__get-started-div">
          <h2 className="home__get-started-text">
            Patient First is designed to help you navigate healthcare decisions
            with ease.
          </h2>
          {/* <NavLink to="/search">
            <button className="home__button">Get Started</button>
          </NavLink> */}
        </div>
      </section>
      <section className="home__recommendation-section">
        {/* <h2 className="home__recommendation-title">Recommendation</h2> */}
        <section className="home__tile-section">
          <div className="home__tile">
            <img
              src={healthreport}
              className="home__tile-image home__tile-image--healthreport"
              alt="healthreport"
            />
            <h2 className="home__tile-header">
              How to write off medical expenses
            </h2>
          </div>
          <div className="home__tile">
            <img
              src={regenerative}
              className="home__tile-image home__tile-image--regenerative"
              alt="regenerative"
            />
            <h2 className="home__tile-header">How OHIP works</h2>
          </div>
          <div className="home__tile">
            <img
              src={outcomes}
              className="home__tile-image home__tile-image--outcomes"
              alt="outcomes"
            />
            <h2 className="home__tile-header">How to Plan Ahead, Medically</h2>
          </div>
        </section>
      </section>

      {/* <Link to="/search">
        <Tile />
      </Link> */}
    </section>
  );
}

export default Home;
