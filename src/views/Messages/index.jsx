import React, { useState, useEffect, Fragment } from 'react';
import { AgoraChat, AgoraClient } from '../../IM/initIM'
const Messages = () => {
    const [targetId, setTargetId] = useState('')
    const [content, setContent] = useState('')
    const [chatType, setChatType] = useState('')
    const handleTargetId = (e) => {
        const { value } = e.target
        setTargetId(value)
    }
    const handleContent = (e) => {
        const { value } = e.target
        setContent(value)
    }


    //发送一条消息
    const sendTextMessages = () => {
       
        let option = {
            type:'txt',
            // Set the message content.
            msg: content,
            // Set the username of the receiver.
            to: targetId,
            // Set the chat type
            chatType: "singleChat",
        };
        // Create a text message.
        let msg = AgoraChat.message.create(option);
        // Call send to send the message
        AgoraClient.send(msg).then((res) => {
            console.log("send private text Success",res);
        }).catch((e) => {
            console.log("Send private text error",e);
        });
    }
    return (
        <Fragment>
            <h2>消息发送部分</h2>
            <input type="text" onChange={handleTargetId} value={targetId} placeholder="请输入目标ID..." />
            <input type="text" onChange={handleContent} value={content} placeholder='请输入发送内容...' />
            <button onClick={sendTextMessages}>发送</button>
            <div>
                {targetId}
                {content}
            </div>
        </Fragment>
    )
}
export default Messages