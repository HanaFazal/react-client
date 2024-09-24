import Tile from "../../components/Tile/Tile";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Search.scss";

function Search() {
  const [tiles, setTiles] = useState([]);
  const [filteredTiles, setFilteredTiles] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(false);
  const getTiles = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASEURL}`);
      setTiles(response.data);
      setFilteredTiles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filterByServices = (e) => {
    setSelectedService(e.target.value);
    setFilteredTiles(
      tiles.filter((practice) => practice.services.includes(e.target.value))
    );
  };
  const filterByPaymentOptions = (e) => {
    // let filterOption = !selectedPayment ? "yes" : "no";
    // setSelectedPayment(!selectedPayment);
    // setFilteredTiles(
    //   tiles.filter((practice) => practice.services.includes(selectedService) && practice.payment_plan==filterOption);
    // );
  };

  useEffect(() => {
    getTiles();
  }, []);
  return (
    <section className="search">
      <div className="search__filters">
        <h3>Services</h3>
        <button
          className="search__pill"
          type="button"
          id="braces"
          value="braces"
          onClick={() => filterByServices(event)}
        >
          Braces
        </button>
        <button
          className="search__pill"
          type="button"
          id="checkups"
          value="checkup"
          onClick={() => filterByServices(event)}
        >
          Checkups
        </button>
        <button
          className="search__pill"
          type="button"
          id="cleaning"
          value="cleaning"
          onClick={() => filterByServices(event)}
        >
          Cleaning
        </button>
        <button
          className="search__pill"
          type="button"
          id="wisdom-teeth"
          value="wisdom teeth removal"
          onClick={() => filterByServices(event)}
        >
          Wisdom Teeth Removal
        </button>
        <h3>Payment</h3>
        <button
          className="search__pill"
          type="button"
          id="payment"
          value="yes"
          onClick={() => filterByPaymentOptions(event)}
        >
          Payment Options Available
        </button>
      </div>
      <section className="search__tiles">
        {filteredTiles?.map((practice) => (
          <Tile
            key={practice.id}
            header={practice.name}
            baseurl={import.meta.env.VITE_BASEURL}
            image={practice.image}
          />
        ))}
      </section>
    </section>
  );
}

export default Search;
