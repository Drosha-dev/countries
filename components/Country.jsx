import Weather from "./Weather";

const Country = ({ country: {name,capital,area, languages, flag, latlng: [lat,lng]} }) => {

    return (
        <div>
            <h1>{name.common}</h1>
            <p>Capital: {capital}</p>
            <p>Area Code: {area}</p>
            <h2>Languages</h2>
            <ul>
                
                {//This lets you dissect the object and then map like normal
                Object.values(languages).map(lang => (
                    <li key={lang}>{lang}</li>
                ))}
            </ul>
            <div>
            <p className="flag">{flag}</p>
            </div>
            <Weather lat={lat} lng={lng} capital={capital}/>
        </div>
    )
}

export default Country