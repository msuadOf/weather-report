import React from 'react';
import axios from 'axios';

import Slider from './Components/slider/Slider';
import WeatherApp from "./Components/WeatherApp/WeatherApp";
import WeatherData from "./Components/WeatherData/WeatherData";
import SliderBar from "./Components/Hovers/layout-sidebar"
import Hovers from "./Components/Hovers/Hovers";
import OverLap from "./Components/Hovers/overlap";

function cityformat(cityodd){
    let city
    if(city[city.length-1]==='市'){
        city[city.length-1]='\0'
    }

}

function delay(n){
    for(let i=0;i<=n*10000000000000000000000000;i++){;}
}

const ajax=(parmcity,obj)=>{

    let key = {
        appid: "23035354",
        appsecret: "8YvlPNrz",
        version: "v9",
        city: parmcity===undefined?(''):(parmcity.replace(/市/g, "")),
    };
    const urlbody = "https://www.yiketianqi.com/api/"

    axios.get(urlbody, {
        params: key
    })
        .then((response)=> {

            if(obj!== undefined){
                obj.setState(response.data)
                obj.forceUpdate(()=>{console.log('reset')})
                console.log('@',response.data.data[0].tem);
                console.log('$',key)
                console.log('$',parmcity)

                console.log('@',response.data);
            }
        })
        .catch((error)=> {
            console.log(error);
        });

}


class App extends React.Component {
  state={city:'',data:[],aqi:{}}

    updateData=(city)=>{


        //this.setState({city})
        console.log(this)
        ajax(city,this)
    }

  render() {

    return (
      <div className="App">
          <Slider {...this.state}/>
          <WeatherData {...this.state} updateData={this.updateData}/>
          <OverLap><a href={'http://simi.work'} target={'_blank'}>去我主页看看？</a> </OverLap>
      </div>
    )
  }
  componentDidMount() {
      ajax(undefined,this)
  }

}


export default App
