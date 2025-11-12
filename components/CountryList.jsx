import Country from "./Country";

const CountryList = ({country, countrySelect,favoriteSelect}) => {

   
   
    
    return (<>
    
        <p>{country.name.common}</p>
        <button onClick={() => countrySelect(country)}>Select</button>
        <button onClick={() => favoriteSelect(country)}>Add to Favorites</button>

    </>)
}


export default CountryList