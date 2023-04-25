import { countriesData } from "../../Data/Data";
import "./donut.css";
const Donut = () => {
  return (
    <>
      <div className="donut_container">
        
        <div className="top_location">
          <span>Top Location</span>
          {countriesData.map((country) => (
            <div key={country.flag} className="donut_location">
              <div className="donut_location_flag">{country.flag}</div>
              <div className="donut_location_name">{country.name}</div>
              <div className="donut_location_percentage">
                {country.percentage}
              </div>
              <div className="donut_location_color">{country.color}</div>
            </div>
          ))}
        </div>
        <div className="top_refferal"></div>
      </div>
    </>
  );
};

export default Donut;
