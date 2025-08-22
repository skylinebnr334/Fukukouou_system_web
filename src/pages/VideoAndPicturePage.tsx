import * as React from 'react';
import { useEffect, useRef } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket'
export default function VideoAndPicturePage(){
    const socketRef = useRef<ReconnectingWebSocket>(null);
    useEffect(()=>{
            const websocket = new ReconnectingWebSocket('ws://localhost:8080/Server1/round1_ws');
            socketRef.current = websocket;
            
        const onMessage = (event: MessageEvent<string>) => {
            if (event.data.startsWith("VIDEO_")) {
                //setTokutenvisible(false);
                //getRound1_MultiData();
                //setTokutenvisible(true);
                console.log(event.data);
            }
        }
        websocket.addEventListener('message', onMessage);
        return () => {
            websocket.close();
            websocket.removeEventListener('message', onMessage);
        }
    },[])
    return(
        <>VIDEO AND PICTURE</>
    )
}