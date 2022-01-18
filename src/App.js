import React from 'react';
import axios from 'axios';

import Slider from './Components/slider/Slider';
import WeatherApp from "./Components/WeatherApp/WeatherApp";
import WeatherData from "./Components/WeatherData/WeatherData";
import SliderBar from "./Components/Hovers/layout-sidebar"
import Hovers from "./Components/Hovers/Hovers";
import OverLap from "./Components/Hovers/overlap";

class App extends React.Component {
  state={city:'',data:[],aqi:{}}
    updateData=(city)=>{
      console.log(city)
        this.setState({city})
    }

  render() {
    return (
      <div className="App">
          <Slider />
          <WeatherData {...this.state} updateData={this.updateData}/>
          <OverLap><a href={'http://simi.work'} target={'_blank'}>去我主页看看？</a> </OverLap>
      </div>
    )
  }
  componentDidMount(){
    const key = {
      appid: "23035354",
      appsecret: "8YvlPNrz",
      version: "v9",
      city: "",
    };
    const urlbody = "https://www.yiketianqi.com/api/"
    
    axios.get(urlbody, {
      params: key
    })
      .then((response)=> {
        console.log(response.data.data[0].tem);
          this.setState(response.data)
      })
      .catch((error)=> {
        console.log(error);
      });

  }

};


export default App
