import React from 'react'
import { useParams } from 'react-router-dom'

const Country = () => {
    const [countries, setCountries] = React.useState([])
    const { country } = useParams()

    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/region/${country}`)
            .then(res => res.json())
            .then(res => setCountries(res))
            .catch(err => console.error(err))
    }, [country])

    if (!countries.flags) return <h1>Loading</h1>

    return (
        <div>
            <img src={countries.flags.svg} alt="" />
            <div>{countries.name.common}</div>
            <div>Capital: {countries.capital.map(item => <span key={item}>{item}</span>)}</div>
        </div>
    )
}

export default Country