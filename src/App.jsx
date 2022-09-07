import React, { useState } from 'react';
import './App.css';
// import { EaseApp } from 'chat-uikit2'
import Login from './views/Login';
import Messages from './views/Messages'
import { AgoraClient } from './IM/initIM'
function App() {
  const [socketConnect, setSocketConnect] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const addNewMessage = (message) => {
    setMessageList([...messageList, message]);
  }
  AgoraClient.addEventHandler("connection&message", {
    onConnected: () => {
      console.log('>>>>>>连接成功');
      setSocketConnect(true);
    },
    onDisconnected: () => {
      console.log('>>>>>断开连接');
      setSocketConnect(false);
    },
    onTextMessage: (message) => {
      console.log('>>>>>收到一条文本消息', message);
      const { from, to, msg } = message
      addNewMessage({ from, to, msg })
    }
  })
  return (
    <div className="App">
      <Login />
      <Messages addNewMessage={addNewMessage} />
      {/* <EaseApp
        // The App key for your chat project
        appkey="xxx"
        // The user ID of the current user
        username="xxx"
        // The Agora token
        agoraToken="xxx"
      /> */}
      <h3>{socketConnect ? '已连接' : '未连接'}</h3>
      {
        messageList.map((message, index) => {
          return (<h4 key={index}>{`${message.from}:${message.msg}`}</h4>)
        })
      }


    </div>
  );
}

export default App;
