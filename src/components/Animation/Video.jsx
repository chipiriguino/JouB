import React, { Component } from 'react'
import "./Animation.css"
export default class Video extends Component {
    render() {
        return (
            <div>
                  <div className="bg-video-wrap">
    <video src="/imagenes/pexels-italo-bicca-6756617.mp4" loop muted autoPlay>
    </video>
    <div >
    </div>
    <h1 className="h1-video"><button className="button-video">Haz tú reserva</button></h1>
  </div>
            </div>
        )
    }
}