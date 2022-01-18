import React, { Component } from 'react'
import './Slider.css'
import { Carousel } from 'antd';
import Img from './Img/Img';




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
        { id: '2', src: 'https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fi0.hdslb.com%252Fbfs%252Farticle%252F3dc20ea695fe77d59826a8bb55c73235bee05d8b.jpg%26refer%3Dhttp%253A%252F%252Fi0.hdslb.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1645075437%26t%3D5dda38d9c33bc2c0c3673d86be4c4489&thumburl=https%3A%2F%2Fimg2.baidu.com%2Fit%2Fu%3D2794088426%2C4013757826%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPEG%3Fw%3D500%26h%3D281' },
        { id: '1', src: 'https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fi0.hdslb.com%252Fbfs%252Farticle%252Fc688edfa76a9fae9c13a9e2a99c74f648cbb779b.jpg%26refer%3Dhttp%253A%252F%252Fi0.hdslb.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1645078284%26t%3D29d6cd996375e9ed48996ed5ecb832ba&thumburl=https%3A%2F%2Fimg0.baidu.com%2Fit%2Fu%3D2717901881%2C1314253478%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPEG%3Fw%3D500%26h%3D281' },
      //{ id: '3', src: 'https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fimg9.51tietu.net%252Fpic%252F2019-091221%252Fd4ux1upg4bwd4ux1upg4bw.png%26refer%3Dhttp%253A%252F%252Fimg9.51tietu.net%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1645075437%26t%3D22738a857753b9d3ae1aea98ffce132d&thumburl=https%3A%2F%2Fimg1.baidu.com%2Fit%2Fu%3D570581684%2C507276380%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPG%3Fw%3D500%26h%3D313' },

    ]
    return (
      <Carousel autoplay>
        {
          url.map(imgObj =>
            <Img style={contentStyle} {...imgObj} key={imgObj.id}/>
          )
        }

      </Carousel>)
  }
}
