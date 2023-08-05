/* eslint-disable react/prop-types */
import './styles/search.scss'

import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const Search = ({handleOnChangeSearch}) => {
  const [search, setSearch] = useState('')

  const [dropDown, setDropDown] = useState(false)

  const fetchData = (search) => {
    return axios.get(`https://api.weatherapi.com/v1/search.json?key=aca93c5e40b6486fb8d125118232207&q=${search}`).then(data =>{return data.data})
  }
  const handleOnClick = (value) => {
    setSearch(value)
    setDropDown(false)
  }
  const {data, isLoading} = useQuery(['searchCity', search], () => fetchData(search), {
    retry: 3,
    refetchOnWindowFocus: false,
    enabled: !!search,
  })



  useEffect(() => {
    document.addEventListener('keydown', 
    (e) => {
      if(e.key === 'Enter'){
        handleOnChangeSearch(search)
        setDropDown(false)
      }
    }, true)
  })

  return (
    <div className="search">
      <div className='search__input'>
          <input type="text" value={search} maxLength={15} onChange={(e) => {
            if(e.target.value != ' ') setSearch(e.target.value)
            e.target.value ? setDropDown(true) : setDropDown(false)
          }} placeholder="Напиши назву міста..."/>

          {isLoading ? <button disabled className='loading' style={{background: "rgb(255, 248, 171", color: 'black'}}>Загрузка...</button> : <button onClick={() => {
            handleOnChangeSearch(search)
            setDropDown(false)
            setSearch('')
          }}>Пошук</button>}
          
      </div>
       
        

        {data, dropDown && <div className="dropdown-menu">
          <ul>
            {!data?.length && <li className='error'>Неправильний ввід...</li> }
            {data?.map(item => {
              return <li onClick={() => {
                handleOnClick(item.name)
              }} key={item.id}>{item.name} - {item.country}</li>
            })}
            {}
          </ul>
        </div>}
        
        
    </div>
   );
}
 
export default Search;