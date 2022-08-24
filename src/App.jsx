import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './views/Login';
import AgoraClient from './IM/initIM'
console.log('AgoraChat',AgoraClient);

function App() {
 
  AgoraClient.addEventHandler("connection&message", {
    onConnected:()=>{
      console.log('>>>>>>连接成功');
    },
    onDisconnected:()=>{
      console.log('>>>>>断开连接');
    },
    onTextMessage:(msg)=>{
      console.log('>>>>>收到一条文本消息',msg);
    }
  })
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
