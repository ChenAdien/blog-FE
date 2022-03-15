import Parallax from 'parallax-js'
import React from 'react'
export default class extends React.Component {
  componentDidMount(){
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  }
  render() {
    return (
      <>
    <div id='scene' className='w-screen h-screen'>
      <div  data-depth="0.2" className='w-60 bg-cyan-200 h-10'></div>
      <div  data-depth="0.6" className='w-40 h-32 bg-violet-200'></div>
    </div>
    </>
    )
  }
}