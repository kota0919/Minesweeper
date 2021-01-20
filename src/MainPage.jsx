import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button} from 'react-onsenui';
import SecondPage from './SecondPage'
import './style.css'
export default class MainPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      HighScore : 9999
     };

     this.HighScoreUpdate = this.HighScoreUpdate.bind(this);
  }
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage,props:{HighScoreUpdate:this.HighScoreUpdate}});
  }

HighScoreUpdate(score){
   if(this.state.HighScore > score){
       this.setState({HighScore:score});
  }
}
  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Navigator</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <div className="title">Minesweeper</div>
<br />
<br />
<br />
<br />
<br />
<br />
     <div className="center"> High score:9999秒</div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br /> 
          <Button onClick={this.pushPage.bind(this)}>STRAR</Button>
        </p>
      </Page>
    );
  }
}