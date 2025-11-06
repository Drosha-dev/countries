import { useEffect, useState } from 'react'
import countryService from '../src/services/countries'
import Search from '../components/Search';
import './App.css'
import CountryList from '../components/CountryList';
import Country from '../components/Country';
import Content from '../components/Content';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearchParam] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    countryService.getAll().then(initialCountries => {
      setCountries(initialCountries);
    })
  },[])

  useEffect(() => {
    setFilteredCountries(
      countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    )
  },[countries, search])

  // const filteredCountries = countries.filter((country) => 
  //   country.name.common.toLowerCase().includes(search.toLowerCase())
  // )

  const handleSearch= (e) => {
    setSearchParam(e.target.value.toLowerCase())

  } 

  const handleCountrySelect = (country) => {
      setFilteredCountries({country})
      console.log(country);
      setSearchParam(country.name.common)
  }


  return (
    <>
      <div className='country-form'>
        Search : <Search value={search} search={handleSearch}/>
        <Content filtered={filteredCountries} countrySelect={handleCountrySelect}/>
        {/* {
          filteredCountries.length > 1 && filteredCountries.length < 10 && filteredCountries.map((p) => <CountryList country={p} countrySelect={handleCountrySelect}/>)
        } 
        {
          filteredCountries.length === 1 && <Country country={filteredCountries[0]} />
        }
        {
          filteredCountries.length >= 10 &&  (
            <p>Too many results, narrow your search</p>
          ) 
        } */}
      </div>
    </>
  )
}

export default App
