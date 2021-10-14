import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Mediahandler from '../Mediahandler';


export default class App extends Component{
    constructor(){ 
        super();

        this.state={
          hasMedia:false,
          otherUserId:null  
        };
        this.mediahandler=new Mediahandler();
    }
    
    componentWillmount(){
        this.mediahandler.getPermissions() 
        .then((stream)=>{
            this.setState({hasMedia:true});
            try{
                this.myVideo.srcObject=stream;
            }catch(e){
                  this.myVideo.src=URL.createObjectURL(stream);
            
             }
          
            this.myVideo.play();
        })
    }
    render(){
        return (
        <div className="App">
            <div className="video-container">
                Video:
                <video className="my-video" ref={(ref)=>{this.myVideo = ref;}}> </video>
                <video className="user-video" ref={(ref)=>{this.userVideo = ref;}}> </video>
            </div>
        </div>
         );  
    }
      
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
  