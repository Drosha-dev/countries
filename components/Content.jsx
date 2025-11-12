import CountryList from "./CountryList";
import Country from "./Country";


const Content = ({  filtered, countrySelect, favoriteSelect}) => {    

    return (<>
        <div>
            {
                filtered.length > 1 && filtered.length < 10 && filtered.map((p) => <CountryList country={p} countrySelect={countrySelect} favoriteSelect={favoriteSelect}/>)
            }
            {
                filtered.length === 1 && <Country country={filtered[0]} />
            }
            {
                filtered.length >= 10 && (
                    <p>Too many results, narrow your search</p>
                )
            }

        </div>
    </>)
}

export default Content