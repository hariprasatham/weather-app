import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Card from './components/Card'
import {setData} from './redux/actions'
import axios from 'axios'


const App = ({cityName, weather, setData}) => {
  const [weatherData, setWeatherData] = useState({})
  const [city, setCity] = useState('delhi')

  const API_KEY = 'b34c5d088d11326d46dfc0885b4a6dca'

  useEffect(()=>{
    // const getData = async () => {
    //   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`).
    //   then((response) => setWeatherData(response.json()))
    // }
    // getData()

    const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    setWeatherData(response)

  },[cityName])

  const handleSubmit = (e) =>{
    e.preventDefault();
    setData({city:city,weather:weatherData})
    console.log(cityName, weather)    
  }

  return (
    <Container>
      <Form onSubmit={e => handleSubmit(e)}>
        <InputText placeholder='Enter the city...!' onChange={e => setCity(e.target.value)} value={city} required/>
        <SubmitBtn type='submit'>search</SubmitBtn>
      </Form>
      <Card city={cityName} weather={weather}/>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  cityName: state.city,
  weather: state.weather
})

const  mapDispatchToProps = (dispatch) => ({
  setData : (data) => dispatch(setData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Form = styled.form`
  display: flex;
  gap: 20px;
`;

const InputText = styled.input`
  padding: 10px;
  border-radius: 4px;
  outline: none;
`;

const SubmitBtn = styled.button`
  padding: 0 10px;
  border: none;
  background-color: salmon;
  border-radius: 4px;
`;

const Error = styled.span`

`;


