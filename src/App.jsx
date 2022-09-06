// import React, { useState, useEffect } from 'react';
import './App.css';
// import { EaseApp } from 'chat-uikit2'
import Login from './views/Login';
import Messages from './views/Messages'
import {AgoraClient} from './IM/initIM'
console.log('AgoraChat', AgoraClient);

function App() {

  AgoraClient.addEventHandler("connection&message", {
    onConnected: () => {
      console.log('>>>>>>连接成功');
    },
    onDisconnected: () => {
      console.log('>>>>>断开连接');
    },
    onTextMessage: (msg) => {
      console.log('>>>>>收到一条文本消息', msg);
    }
  })
  return (
    <div className="App">
      <Login />
      <Messages/>
      {/* <EaseApp
        // The App key for your chat project
        appkey="xxx"
        // The user ID of the current user
        username="xxx"
        // The Agora token
        agoraToken="xxx"
      /> */}
    </div>
  );
}

export default App;
