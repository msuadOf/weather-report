import React, {Component} from 'react';
import Weathericon from "../Weathericon/Weathericon";
import WeatherCard from "../WeatherCard/WeatherCard";
import {Card} from "antd";
import SearchBox from "../SearchBox/SearchBox";

import './WeatherData.css'
import {position} from "tailwindcss/lib/util/dataTypes";

const {Meta} = Card;


class WeatherData extends Component {
    render() {
        let {city, data, aqi} = this.props
        let datanew = {}
        if (data[0] === undefined) {
            return <div></div>
        }

        return (
            <div style={{margin: '0 auto', textAlign: 'center'}}>

                <SearchBox updateData={this.props.updateData}/>

                <div style={{'color': '#999'}}>城市:{city}</div>
                <br/>
                <br/>

                <ul id={'todaylist'} >



                        <Weathericon className={'todayitem'} weather={data[0].wea_day}/>



                    <li className={'todayitem'}>
                        <h1>{(data[0].tem)=='null'?data[0].tem:data[0].tem1}&deg;</h1>
                        <div>今日{data[0].wea_day}</div>
                    </li>


                    <li className={'todayitem'}>
                    <div className={'tips'}>
                        <Card title="今日份出行建议"  style={{ width: 300 }}>
                            <p></p>
                            <p>{data[0].air_tips}</p>
                            <p></p>
                        </Card>

                    </div>
                    </li>

                </ul>


                <br/>
                <br/>
                <WeatherCard info={this.props}/>

            </div>
        );
    }
}

export default WeatherData;