import React, { useState, Fragment } from "react";
import { AgoraClient } from '../../IM/initIM'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const handleNameChange = (e) => {
        const { value } = e.target;
        setUsername(value)
    }
    const handlePwdChange = (e) => {
        const { value } = e.target;
        setPassword(value)
    }
    const handleTokenChange = (e) => {
        const { value } = e.target;
        setToken(value)
    }
    const loginIM = async () => {
        let { accessToken } = await AgoraClient.open({
            user: username,
            pwd: password
        })
        setToken(accessToken)
    }
    const loginIMUseToken = () => {
        AgoraClient.open({
            user: username,
            accessToken: token
        })
    }
    const loginUseTokenWithAgora = () => {
        AgoraClient.open({
            user: username,
            agoraToken: token
        })
    }
    const logOut = () => {
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
                <label htmlFor="token">token：</label>
                <input id="token" type="text" placeholder="token登陆" onChange={handleTokenChange} value={token} />
                <br />
                <button onClick={loginIM}>登陆</button>
                <br />
                <button onClick={loginIMUseToken}>token登陆</button>
                <br />
                <button onClick={loginUseTokenWithAgora}>AgoraToken登陆</button>
                <br />
                <button onClick={logOut}>退出</button>
            </div>
        </Fragment>
    )
}

export default Login;