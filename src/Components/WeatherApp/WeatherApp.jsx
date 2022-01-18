import React, {Component} from 'react';
import { Card } from 'antd';
const { Meta } = Card;

//import './WeatherApp.css'


class WeatherApp extends Component {
    render() {
        return (
            <Card
                hoverable
                style={{ width: 240 ,padding: '24px',margin:'0 auto',textAlign:'center'}}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        );
    }
}

export default WeatherApp;