import React, { useState, Fragment, useEffect } from "react";
import {AgoraClient} from '../../IM/initIM'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleNameChange = (e) => {
        const { value } = e.target;
        setUsername(value)
    }
    const handlePwdChange = (e) => {
        const { value } = e.target;
        setPassword(value)
    }

    const loginIM = () => {
        AgoraClient.open({
            user:username,
            pwd:password
        })
    }
    const logOut = () =>{
        AgoraClient.close()
        setUsername('')
        setPassword('')
    }
    return (
        <Fragment>
            <h1>Agora 登陆</h1>
            <div className="login_input_box">
                <label htmlFor="username">用户ID：</label>
                <input id="username" type="text" placeholder="请输入登陆ID" onChange={handleNameChange} value={username} />
                <label htmlFor="">密码：</label>
                <input id="password" type="text" placeholder="请输入用户密码" onChange={handlePwdChange} value={password} />
                <button onClick={loginIM}>登陆</button>
                <button onClick={logOut}>退出</button>
            </div>
        </Fragment>
    )
}

export default Login;