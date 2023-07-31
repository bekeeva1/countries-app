import React from 'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'

const Countries = () => {
    const[countries, setCountries] = React.useState([])
    const{country} = useParams()

    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/region/${country}`)
        .then(res => res.json())
        .then(res => setCountries(res))
        .catch(err => console.error(err))
    },[country])

    return (
        <div className='flex flex-wrap justify-center px-6 py4'>
            {countries.map(country => (
                <Card
                    key={country.name.common}
                    name={country.name.common}
                    flag={country.flags.svg}
                    capital={country.capital}
                    population={country.population}
                    maps={country.maps.googleMaps}
                    area={country.area}
                />
            ))}
        </div>
    )
}

export default Countries