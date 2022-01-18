import React, {Component} from 'react';
import {Card} from "antd";
import Weathericon from "../Weathericon/Weathericon";
import './WeatherCard.css'

const {Meta} = Card;

class WeatherCard extends Component {
    render() {
        const {data} = this.props.info

        return (
            <ul id={'listcard'}>
                {
                    data.map((obj, i) => {
                        return (i == 0) ? undefined : <li className={'itemcard'}><Card
                            hoverable
                            style={{width: 240, padding: '24px', margin: '0 auto', textAlign: 'center'}}
                            cover={<Weathericon weather={obj['wea_day']}/>}
                            key={obj.date}
                        >
                            <Meta title={obj['wea_day'] + '\n' + obj.tem2 + '~' + obj.tem1 + '°'}
                                  description={obj['day']}/>
                        </Card></li>
                    })
                }


            </ul>
        );
    }
}

export default WeatherCard;