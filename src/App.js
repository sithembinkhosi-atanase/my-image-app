import React, { Component } from 'react';
import './App.css';
import { Carousel } from './images'
import pic from './like.png'
import pic1 from './like(1).png'


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        icon:pic,
        status: false
      };
    }
    changeStyle(){
      if(this.state.status===false){
        this.setState({
          icon :pic1,

          status: true
        });
      }else{
        this.setState({
          icon:pic,
          status:false
        });
      }
      }
render() {
  return (
    <div>
      <Carousel/>

      {/* container div */}
        <div className="container">
              <div className="row">

                {/* card div's */}

                <div className = "col-md-4 hold card">
                  <img className = "resize" src="https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=715996f692212aec05eeeb8e25a9c83e&auto=format&fit=crop&w=400&q=60"/>
                   <img src={this.state.icon} onClick= {this.changeStyle.bind(this)} className="size"/>
                </div>
                <div className = "col-md-4 hold card">
                  <img className = "resize" src="https://images.unsplash.com/photo-1514726884550-a8b96834cf6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c33a77d310261e83a109da52aa8f41b7&auto=format&fit=crop&w=400&q=60"/>
<img src={this.state.ico} onClick= {this.changeStyle.bind(this)} className="size"/>                </div>
                <div className = "col-md-4 hold card">
                  <img className = "resize" src="https://images.unsplash.com/photo-1519106861648-fb7df75dbc72?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=649e77448fe24a8068acedef20342c92&auto=format&fit=crop&w=400&q=60"/>
<img src={this.state.icn} onClick= {this.changeStyle.bind(this)} className="size"/>                </div>
                <div className = "col-md-4 hold card">
                  <img className = "resize" src="https://images.unsplash.com/photo-1415226605610-f53c5c1ea8e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=542403974700cdc437aba64183fc37f2&auto=format&fit=crop&w=400&q=60"/>
<img src={this.state.ion} onClick= {this.changeStyle.bind(this)} className="size"/>                </div>
                <div className = "col-md-4 hold card">
                  <img className = "resize" src="https://images.unsplash.com/photo-1520817482132-2da660deddf5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=595927ef640e743a07dfd80c1d8d72be&auto=format&fit=crop&w=400&q=60"/>
<img src={this.state.con} onClick= {this.changeStyle.bind(this)} className="size"/>                </div>
                <div className = "col-md-4 hold card">
                  <img className = "resize" src="https://images.unsplash.com/photo-1508048236731-b5ef91f7840c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b68073a34156640c844b78f431eadf36&auto=format&fit=crop&w=400&q=60 "/>
<img src={this.state.icn} onClick= {this.changeStyle.bind(this)} className="size"/>                </div>
                <div className = "col-md-4 hold card">
                  <img className = "resize" src="https://images.unsplash.com/photo-1510903117032-f1596c327647?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3325d3e03864283a187c41fdc59ee43&auto=format&fit=crop&w=400&q=60"/>
<img src={this.state.ion} onClick= {this.changeStyle.bind(this)} className="size"/>                </div>
                <div className = "col-md-4 hold card">
                  <img className = "resize" src="https://images.unsplash.com/photo-1507682226856-bbd49d1bfa5a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=380251aef1b26a4c16c89f3f3bd636af&auto=format&fit=crop&w=400&q=60"/>
<img src={this.state.icn} onClick= {this.changeStyle.bind(this)} className="size"/>                </div>
                <div className = "col-md-4 hold card">
                  <img className = "resize" src="https://images.unsplash.com/photo-1518614768202-663a3a0ecf59?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=908a0ab5ff1226fbdd7f9ebf0e5590c6&auto=format&fit=crop&w=400&q=60"/>
<img src={this.state.icn} onClick= {this.changeStyle.bind(this)} className="size"/>                </div>
              </div>
            </div>
            </div>
  );
}}

export default App;
