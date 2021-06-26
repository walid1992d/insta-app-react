import React,{Component} from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import './Home.scss';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
type HomePageState = {
    dummyStateNum?: Number;
}
type PropsType = RouteComponentProps<any> & {
  someString: string,
}

export  class HomePage extends Component <PropsType,HomePageState> {
 
  render() {
    return  (
      <div className="HomePage">
        <IonHeader>
          <IonToolbar >
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent padding>
          <IonButton onClick={()=> this.props.history.push("/playground")}>Playground</IonButton>
        </IonContent>
        </div>
  );
  }
}


export default withRouter(HomePage);
