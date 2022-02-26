import React, { Component } from 'react'
import './Slider.css'
import {Card, Carousel} from 'antd';
import Img from './Img/Img';
import Weathericon from "../Weathericon/Weathericon";



const {Meta} = Card;




export default class Slider extends React.Component {
  render() {
    const contentStyle = {
      height: '500px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
    }
    const url = [
        { id: '1', src: 'https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fi0.hdslb.com%252Fbfs%252Farticle%252F3dc20ea695fe77d59826a8bb55c73235bee05d8b.jpg%26refer%3Dhttp%253A%252F%252Fi0.hdslb.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1645075437%26t%3D5dda38d9c33bc2c0c3673d86be4c4489&thumburl=https%3A%2F%2Fimg2.baidu.com%2Fit%2Fu%3D2794088426%2C4013757826%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPEG%3Fw%3D500%26h%3D281' },

      { id: '3', src: 'https://img2.baidu.com/it/u=2132852882,2232351610&fm=253&fmt=auto?w=1422&h=800' },
        { id: '4', src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a8d15c22fa17a8012029ac9cb60e.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648449570&t=6c6371369071e993fa4aaf1270c1cde2' },
        { id: '5', src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F00.minipic.eastday.com%2F20181228%2F20181228114012_cb9fe95851a39b9a68b9a8abacf613db_6.jpeg&refer=http%3A%2F%2F00.minipic.eastday.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648450359&t=cb226278edaa6a7ab98f50e7d34dcb67' },
        { id: '2', src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fda6cc3ac05389e7bf61eea38118868b6983e987b.png&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648449681&t=9e6f5709c166c8395348701c3c8deb27' },
    ]
    return (
      <Carousel autoplay>
        {
          url.map((imgObj) =>{
              if(this.props.data[0]===undefined){
                  if(imgObj.id==='1')
                    return <Img style={contentStyle} {...imgObj} key={imgObj.id}/>
              }
              if(this.props.data[0]!==undefined){
                  if(this.props.data[0].wea_day==='晴')
                      if(imgObj.id==='2'||imgObj.id==='5'){

                          return <Img style={contentStyle} {...imgObj} key={imgObj.id}/>
                      }
                  if(this.props.data[0].wea_day==='小雨'||this.props.data[0].wea_day==='中雨'||this.props.data[0].wea_day==='大雨'){
                      if(imgObj.id==='3'||imgObj.id==='4'){

                          return <Img style={contentStyle} {...imgObj} key={imgObj.id}/>
                      }
                  }
                  if(imgObj.id==='2'||imgObj.id==='5'){

                      return <Img style={contentStyle} {...imgObj} key={imgObj.id}/>
                  }
              }

          }

          )
        }

      </Carousel>)
  }
}
