import React, {Component} from 'react';
import {Card} from "antd";

import {Carousel, Input, Tabs} from 'antd';
import { Icon } from '@ant-design/compatible';
import Weathericon from "../Weathericon/Weathericon";
import './WeatherCard.css'

const {Meta} = Card;

class WeatherCard extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }
    next() {
        this.slider.slick.slickNext();
    }
    prev() {
        this.slider.slick.slickPrev();
    }
    render() {
        const lunboSetting = {
            dots: true,
            lazyLoad: true,
            autoplay:true,
        };
        const {data} = this.props.info

        const contentStyle = {
            height: '500px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        }

        return (
            <div className="home-lunbo">
            <Carousel autoplay>

                {
                    data.map((obj, i) => {
                        return (i == 0) ? undefined : <li style={contentStyle} className={'itemcard'}><Card
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


                </Carousel>

                </div>
        );
    }
}

export default WeatherCard;