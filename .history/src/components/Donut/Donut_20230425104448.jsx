import { countriesData } from "../../Data/Data";

const Donut = () => {

  
  return (
    <>
      <div className="donut_container">
        <div className="top_location">
            {
              countriesData.map((country)=>(
                <div key={country.flag} className="donut_location">
                  <div className="donut_location_name">
                    {country.name}
                  </div>
                </div>
              ))
            }
        </div>
        <div className="top_refferal"></div>
      </div>
    </>
  );
};

export default Donut;
