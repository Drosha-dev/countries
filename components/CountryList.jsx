import Country from "./Country";

const CountryList = ({country, countrySelect}) => {

   console.log(country);
   
    
    return (<>
    
        <p>{country.name.common}</p>
        <button onClick={() => countrySelect(country)}>Hello</button>

    </>)
}


export default CountryList