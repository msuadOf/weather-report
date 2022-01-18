import React, { Component } from 'react'

export default class Img extends Component {
    render() {
        const {id,src}=this.props
        return (
            <div>
                <h3 ><img style={{ width: '100%', height: '100%' }} src={src} key={id} /></h3>
            </div>
        )
    }
}
{/*<div>
                <h3 ><img style={{ width: '100%', height: '100%' }} src='https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fi0.hdslb.com%252Fbfs%252Farticle%252F3dc20ea695fe77d59826a8bb55c73235bee05d8b.jpg%26refer%3Dhttp%253A%252F%252Fi0.hdslb.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1645075437%26t%3D5dda38d9c33bc2c0c3673d86be4c4489&thumburl=https%3A%2F%2Fimg2.baidu.com%2Fit%2Fu%3D2794088426%2C4013757826%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPEG%3Fw%3D500%26h%3D281' /></h3>
            </div> */}