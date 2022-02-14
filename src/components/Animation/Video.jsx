import React, { Component } from 'react'
import "./Animation.css"
export default class Video extends Component {
    render() {
        return (
            <div>
           <div className="bg-video-wrap"
          dangerouslySetInnerHTML={{
            __html: `<video className="app__backgroundVideo" autoplay loop muted playsinline>
      <source src="/imagenes/pexels-italo-bicca-6756617.mp4" type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
          }}
        />

  </div>
        )
    }
}