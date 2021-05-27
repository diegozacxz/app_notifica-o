import React from 'react';
import { StyleSheet, View, Button, StatusBar, Text } from 'react-native';
import { Notifications, Permissions, Constants } from 'expo';
import moment from 'moment';
 
export default class App extends React.Component {
  async componentDidMount() {
    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (Constants.isDevice && result.status === 'granted') {
      alert('Notification permissions granted.')
    }

    Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    alert(`Notification (${origin}) with data: ${JSON.stringify(data)}`)
  }


  _sendImmediateNotification () {
    const localNotification = {
      title: 'Ultando:',
      body: 'A Ult do Karthus está sendo canalizada!!',
      data: { type: 'immediate' }
    }

    console.log('Scheduling immediate notification:', { localNotification })

    Notifications.presentLocalNotificationAsync(localNotification)
      .then(id => console.info(`Immediate notification scheduled (${id})`))
      .catch(err => console.error(err))


  
    const localNotification1 = {       
      title: 'Contagem regressiva para o Dano:',       
      body: '5',       
      data: { type: 'delayed' }     
      }     
      
    const schedulingOptions1 = {       
      time: (new Date()).getTime() + 4000     
      }      
      console.log('Scheduling delayed notification:', { localNotification1, schedulingOptions1 })      
    Notifications.scheduleLocalNotificationAsync(localNotification1, schedulingOptions1)       
    .then(id => console.info(`Delayed notification scheduled (${id}) at ${moment(schedulingOptions1.time).format()}`))       
    .catch(err => console.error(err))



    const localNotification2 = {       
      title: 'Contagem regressiva para o Dano:',       
      body: '4',       
      data: { type: 'delayed' }     
      }     
      
    const schedulingOptions2 = {       
      time: (new Date()).getTime() + 6000     
      }      
      console.log('Scheduling delayed notification:', { localNotification2, schedulingOptions2 })      
    Notifications.scheduleLocalNotificationAsync(localNotification2, schedulingOptions2)       
    .then(id => console.info(`Delayed notification scheduled (${id}) at ${moment(schedulingOptions2.time).format()}`))       
    .catch(err => console.error(err))



    const localNotification3 = {       
      title: 'Contagem regressiva para o Dano:',       
      body: '3',       
      data: { type: 'delayed' }     
      }     
      
    const schedulingOptions3 = {       
      time: (new Date()).getTime() + 8000     
      }      
      console.log('Scheduling delayed notification:', { localNotification3, schedulingOptions3 })      
    Notifications.scheduleLocalNotificationAsync(localNotification3, schedulingOptions3)       
    .then(id => console.info(`Delayed notification scheduled (${id}) at ${moment(schedulingOptions3.time).format()}`))       
    .catch(err => console.error(err))


    
    const localNotification4 = {       
      title: 'Contagem regressiva para o Dano:',       
      body: '2',       
      data: { type: 'delayed' }     
      }     
      
    const schedulingOptions4 = {       
      time: (new Date()).getTime() + 10000     
      }      
      console.log('Scheduling delayed notification:', { localNotification4, schedulingOptions4 })      
    Notifications.scheduleLocalNotificationAsync(localNotification4, schedulingOptions4)       
    .then(id => console.info(`Delayed notification scheduled (${id}) at ${moment(schedulingOptions4.time).format()}`))       
    .catch(err => console.error(err))



    const localNotification5 = {
      title: 'Contagem regressiva para o Dano:',
      body: '1',
      data: { type: 'delayed' }
    }
    const schedulingOptions5 = {
      time: (new Date()).getTime() + 12000
    }

    console.log('Scheduling delayed notification:', { localNotification5, schedulingOptions5 })

    Notifications.scheduleLocalNotificationAsync(localNotification5, schedulingOptions5)
      .then(id => console.info(`Delayed notification scheduled (${id}) at ${moment(schedulingOptions5.time).format()}`))
      .catch(err => console.error(err))

      
    
    const localNotificationF = {
      title: 'Relatório:',
      body: 'Você acabou de dar um Penta Kill com a Ult do Karthus!!',
      data: { type: 'delayed' }
    }
    const schedulingOptionsF = {
      time: (new Date()).getTime() + 15000
    }

    console.log('Scheduling delayed notification:', { localNotificationF, schedulingOptionsF })

    Notifications.scheduleLocalNotificationAsync(localNotificationF, schedulingOptionsF)
      .then(id => console.info(`Delayed notification scheduled (${id}) at ${moment(schedulingOptionsF.time).format()}`))
      .catch(err => console.error(err))
  }

 
  render() {
    return (
      <View style={styles.container}>
       <StatusBar
        barStyle = "light-content"
        hidden = {false}
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      <Text style={styles.texto}>Os inimigos estão sem vida e você é um Karthus, use sua ultmate para matá-los!!</Text>
        <Button 
        title='U L T A R' 
        onPress={() => this._sendImmediateNotification()} color='red' />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontWeight: "bold",
    color: "white",
    height: 50,
    fontSize: 20
  }
});
