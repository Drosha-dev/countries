import { useEffect, useState } from 'react'
import countryService from '../src/services/countries'
import Search from '../components/Search';
import './App.css'
import CountryList from '../components/CountryList';
import Country from '../components/Country';
import Content from '../components/Content';
import Favorites from '../components/Favorites';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearchParam] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [favorites,setFavorites] = useState([]);

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
      setSearchParam(country.name.common)
  }
  const handleFavoriteSelect = (country) => {
        
    const newFavorite = favorites.concat({country})
  
    
    setFavorites(newFavorite)
    
    
    //setFavorites(favorites.concat({country}))
    
    
  }


  return (
    <>
      <div className='country-form'>
        Search : <Search value={search} search={handleSearch}/>
        <Content filtered={filteredCountries} countrySelect={handleCountrySelect} favoriteSelect={handleFavoriteSelect}/>
      </div>
      <Favorites favorites={favorites} />
    </>
  )
}

export default App
