import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';
export default class SecondPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  popPage() {
    this.props.HighScoreUpdate(score);
    this.props.navigator.popPage();
  }



  render() {
    return (
      <Page> 
        <p style={{textAlign:'center'}}>
       
          <Button onClick={this.popPage.bind(this)}>戻る</Button>
        </p>
      </Page>
    );
  }
}