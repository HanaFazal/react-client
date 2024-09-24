import "./Tile.scss";

function Tile({header, baseurl, image}) {
  return (
    <div className="home__tile">
      <img
        src={`${baseurl}/${image}`}
        className="home__tile-image home__tile-image--healthreport"
        alt="healthreport"
      />
      <h2 className="home__tile-header">{header}</h2>
    </div>
  );
}

export default Tile;
