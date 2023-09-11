import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const [inputvalue, setinputvalue] = useState(getRandomNumber(126))

  const url = `https://rickandmortyapi.com/api/location/${inputvalue || "hi"}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputvalue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setinputvalue(inputSearch.current.value.trim())
  }

  return (
    <div className='resident_font'>
      <h1><img src="https://cdn.europosters.eu/image/hp/66133.jpg"  alt="" className='resident_img_rick' /></h1>
      <form onSubmit={handleSubmit} className='resident_form'>
        <input className='input_button' ref={inputSearch} type="text" />
        <button className='button'>Search</button>
      </form>
      {
        hasError
          ? <h2 className='has_error'>❌ Hey! you must provide an id from 1 to 126🥺 </h2>
          : (
            <>
              <LocationInfo
                location={location}
              />
              <div className='resident_card'>
                {
                  location?.residents.map(url => (
                    <ResidentCard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
          )
      }
    </div>
  )
}

export default App