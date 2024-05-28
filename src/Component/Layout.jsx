import React, { Component } from 'react'
import style from  './Layout.module.css'

export default class Layout extends Component {
    state = {
        src:'./glassesImage/v1.png',
    };
    render() {
   
    return (
<div  className={`${style['container mt-5']}`}>
    <div>
  <div className={`  ${style['overlay-container']}`}>
    <img src="./glassesImage/model.jpg" alt="Model Image"  className={`${style['img-fluid']}`} />
    <img src={this.state.src} alt="Overlay Image" className={`${style['img-fluid']}`} />

</div>
<div className={` d-flex ${style['button-container']}`}>
     <button onClick={()=>{
        this.setState({
            src:'./glassesImage/v1.png',
        });
       }}><img src="./glassesImage/g1.jpg" alt="Overlay Image" /></button>
      <button onClick={()=>{
        this.setState({
            src:'./glassesImage/v2.png',
        });
       }} ><img src="./glassesImage/g2.jpg" alt="Overlay Image"  /></button>
      <button onClick={()=>{
        this.setState({
            src:'./glassesImage/v3.png',
        });
       }} ><img src="./glassesImage/g3.jpg" alt="Overlay Image" /></button>
      <button onClick={()=>{
        this.setState({
            src:'./glassesImage/v4.png',
        });
       }}><img src="./glassesImage/g4.jpg" alt="Overlay Image" /></button>
      <button onClick={()=>{
        this.setState({
            src:'./glassesImage/v5.png',
        });
       }} ><img src="./glassesImage/g5.jpg" alt="Overlay Image"  /></button>
      <button onClick={()=>{
        this.setState({
            src:'./glassesImage/v6.png',
        });
       }} ><img src="./glassesImage/g6.jpg" alt="Overlay Image" /></button>
      <button onClick={()=>{
        this.setState({
            src:'./glassesImage/v7.png',
        });
       }}><img src="./glassesImage/g7.jpg" alt="Overlay Image"  /></button>
      <button onClick={()=>{
        this.setState({
            src:'./glassesImage/v8.png',
        });
       }} ><img src="./glassesImage/g8.jpg" alt="Overlay Image" /></button>
      <button onClick={()=>{
        this.setState({
            src:'./glassesImage/v9.png',
        });
       }} ><img src="./glassesImage/g9.jpg" alt="Overlay Image"  /></button>
</div>
</div> 
</div>


    )
  }
}
