import AgoraChat from "agora-chat";
let AgoraClient = {

}
AgoraClient = AgoraChat.conn = new AgoraChat.connection({
    appKey: '41117440#383391'
})

export { AgoraChat, AgoraClient }
