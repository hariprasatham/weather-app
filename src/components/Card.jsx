import React from 'react'
import styled from 'styled-components'

const Card = ({city, weather}) => {
    // console.log(weather)
  return (
    <CardContainer>
        <City>city: {city}</City>
        <WeatherWrapper>
            <WeatherIcon src={`https://openweathermap.org/img/wn/10d@2x.png`}></WeatherIcon>
            <Weather>weather Rain</Weather>
            <WindSpeed>Wind speed: 4.45</WindSpeed>
        </WeatherWrapper>
    </CardContainer>
  )
}

export default Card

const CardContainer = styled.div`
    border: 1px solid grey;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: rgba(128, 128, 128, 0.2);
    border: none;
`;

const City = styled.p`
    padding: 10px 0;
    font-size: 20px;
`;

const WeatherWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const WeatherIcon = styled.img`
    height: 100px;
    width: 100px;
`;

const Weather = styled.p`
    font-size: 20px;
    padding: 10px 0;
`;

const WindSpeed = styled.p`
    font-size: 20px;
    padding: 10px 0;
`;