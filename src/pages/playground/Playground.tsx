import React,{Component} from 'react';
import './Playground.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { PlatformUtility } from '../../utils/platform.util';
import TestComponent from '../../components/test/Test';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonIcon,
} from '@ionic/react';
interface PlatformData {
  name: string,
  fullfilled: boolean,
}
interface PlaygroundPageState  {
  platformCheckData: PlatformData[];
}
type PropsType = RouteComponentProps<any> & {
  someString: string,
}
  export class PlaygroundPage extends Component <PropsType,PlaygroundPageState> {
    constructor(props: PropsType) {
      super(props);
      this.state = {
        platformCheckData:[],
      }
    }
    componentDidMount() {
      const platformUtility: any = new PlatformUtility();
      const checks = [
        'isBrowser',
        'isDesktopBrowser',
        'isMobileBrowser',
        'isIOSBrowser',
        'isAndroidBrowser',
        'isMobileDevice',
        'isIOSDevice',
        'isAndroidDevice',
        'isDesktopDevice',
      ];
     const platformCheckData : PlatformData[]= checks.map(aspect => ({
       name:aspect,
       fullfilled: platformUtility[aspect],
     }));
     this.setState({platformCheckData})
    }
  render() {
    return  (
      <div className="PlaygroundPage">
        <IonHeader>
          <IonToolbar >
            <IonButtons slot="start"  >
              <IonButton icon-only onClick={()=> {
                this.props.history.goBack();
              }}>
              <IonIcon name="arrow-back"></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Playground</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent padding>
          <table>
            <tbody>
            {this.state.platformCheckData.map(checkData => {
              return (
                <tr key={checkData.name}>
                  <td>{checkData.name}</td>
                  <td style={{color: checkData.fullfilled ?'green' : 'red' }}>{checkData.fullfilled ? "true" : "false"}</td>
                </tr>
              )
            })}

            </tbody>
          </table>
          Test Component <br/>
          <TestComponent text="Hello Test Component" ></TestComponent>
        </IonContent>
        </div>
  );
  }
}


export default withRouter(PlaygroundPage);
