

const Country = ({ country }) => {

    const { name, capital, area, languages, flag } = country;


    

    return (
        <div>
            <h1>{name.common}</h1>
            <p>{capital}</p>
            <p>{area}</p>
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
        </div>
    )
}

export default Country