import React from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'


const Sidebar = () => {

    const links = [
        {
            title: 'Африка',
            to: '/africa',
            id: '1'
        },
        {
            title: 'Америка',
            to: '/americas',
            id: '2'
        },
        {
            title: 'Океания',
            to: '/oceania',
            id: '3'
        },
        {
            title: 'Азия',
            to: '/asia',
            id: '4'
        },
    ]

    const Sidebar = () => {
        const [searchValue, setSearchValue] = React.useState('')
        const [countries, setCountries] = React.useState([])
        const navigate = useNavigate()

        const goToSingleCountry = (path) => {
            navigate(`/country/${path}`)
            setSearchValue('')
            setCountries([])
        }

        React.useEffect(() => {
            fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
                .then(res => res.json())
                .then(res => setCountries(res))
                .catch(err => console.log(err))
        }, [searchValue])

        return (
            <div className='bg-slate-800 px-6 py-4 flex justify-between'>
                <div className='text-slate-400 space-x-4'>
                    {links.map(item => (
                        <NavLink
                            to={item.to}
                            key={item.id}
                            className='hover:text-white duration-150 font-semibold'
                        >{item.title}</NavLink>
                    ))}
                </div>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder='Найти страну'
                        className='py-1 px-3 w-[400px] rounded-md bg-slate-500 focus:bg-white duration-200 outline-none'
                        onChange={e => setSearchvalue(e.target.value)}
                        value={Searchvalue}
                    />
                    {countries.lenght && (
                        <div className={`absolute top-full mt-2 rounded right-0 w-full
                bg-slate-500 ${countries.lenght > 7 && 'h-[400px] overflow-y-scroll'}`}
                        >
                            <div className='py-2 px-3 space-y-2'>
                                {countries.map(country => (
                                    <div
                                        className='text-slate-800 hover:text-white space-x-2 cursor-pointer'
                                        key={country.name.common}
                                        onClick={() => goToSingleCountry(country.name.common)}
                                    >
                                        <span>{country.flag}</span>
                                        <span>{country.name.common}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

    export default Sidebar