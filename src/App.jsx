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

  useEffect(() => {
    countryService.getAll().then(initialCountries => {
      setCountries(initialCountries);
    })
  },[])

  const filtered = countries.filter((country) => 
    country.name.common.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearch= (e) => {
    setSearchParam(e.target.value.toLowerCase())
  }


  return (
    <>
    <div className='country-form'>
      Search : <Search value={search} search={handleSearch}/>
      <Content filtered={filtered} countries={countries}/>
      {/* {
        filtered.length > 1 && filtered.length < 10 && filtered.map((p) => <CountryList country={p}/>)
      } 
      {
        filtered.length === 1 && <Country country={filtered[0]} />
      }
      {
        filtered.length >= 10 &&  (
          <p>Too many results, narrow your search</p>
        ) 
      } */}
    </div>
    </>
  )
}

export default App
