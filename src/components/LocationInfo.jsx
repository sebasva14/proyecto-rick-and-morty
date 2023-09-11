
const LocationInfo = ({ location }) => {

  return (
    <article className="resident_article">
      <h2 className="location_article">{location?.name}</h2>
      <ul className="resident_tarje">
        <li><span>Type : </span><span>{location?.type}</span></li>
        <li><span>Dimension : </span><span>{location?.dimension || "unknown"}</span></li>
        <li><span>Population : </span><span>{location?.residents.length}</span></li>
      </ul>
  
    </article>
 )
}

export default LocationInfo