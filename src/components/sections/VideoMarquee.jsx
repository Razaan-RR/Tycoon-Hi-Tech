import React, { useEffect, useRef } from 'react'
import './VideoMarquee.css'
import { homePageAnimation } from './VideoMarquee'

const VideoMarquee = () => {
  const marqueeRef = useRef(null)

  useEffect(() => {
    homePageAnimation(marqueeRef.current)
  }, [])

  return (
    <div
      className="home section w-full h-[200vh]"
      ref={marqueeRef}
      data-color="black"
    >
      <div className="w-full sticky top-0 left-0">
        <div className="btmtext absolute z-[4] bottom-[7%] left-[5%] w-52">
          <h1>
            We build big ideas. Software. Apps. Tools. For real people. Real
            lives.
          </h1>
        </div>
        <div
          style={{ '--clip': '100%' }}
          className="vdodiv w-full h-screen absolute z-[3] top-0 left-0 bg-black overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://cdn.significo.com/videos/significo-main-hero.mp4"
          />
        </div>
        <div className="marqueecontainer w-full h-screen relative">
          <div className="heading absolute top-[7%] left-1/2 -translate-x-1/2 text-center w-60">
            <h1 className="text-2xl font-mediumbold">
              We craft healthcare technology that is more human
            </h1>
          </div>
          <div className="absolute slidesm scale-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
            <div className="row lft w-full flex items-center gap-7">
              <div className="elem flex items-center gap-7">
                <h1 className="libre-baskerville-regular text-5xl">
                  empathetic
                </h1>
                <div className="imgdiv w-[3rem] h-[3rem] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-7">
                <h1 className="libre-baskerville-regular text-5xl">useful</h1>
                <div className="imgdiv w-[3rem] h-[3rem] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-7">
                <h1 className="libre-baskerville-regular text-5xl">
                  intuative
                </h1>
                <div className="imgdiv w-[3rem] h-[3rem] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row rgt -translate-x-1/3 w-full flex items-center gap-7">
              <div className="elem flex items-center gap-7">
                <h1 className="libre-baskerville-regular text-5xl">
                  empathetic
                </h1>
                <div className="imgdiv w-[3rem] h-[3rem] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483181_Ellipse%20845-5.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-7">
                <h1 className="libre-baskerville-regular text-5xl">useful</h1>
              </div>
              <div className="elem flex items-center gap-7">
                <h1 className="libre-baskerville-regular text-5xl">
                  intuative
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoMarquee
