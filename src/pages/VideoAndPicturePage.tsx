import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket'
import ReactPlayer from "react-player";
import useRound1_StgData from '../hooks/useRound1_StgData';
export default function VideoAndPicturePage(){
    const socketRef = useRef<ReconnectingWebSocket>(null);
    const [isplayed, setIsPlayed] = useState<boolean>(false);
    const [isPicture, setIsPicture] = useState<boolean>(false);
    const [videoURL,setVideoURL]=useState<string>("http://localhost:5173/videos/demo/Fukukouou_TEST_VIDEO.mp4");
    useEffect(()=>{
            const websocket = new ReconnectingWebSocket('ws://localhost:8080/Server1/round1_ws');
            socketRef.current = websocket;
        const onMessage = (event: MessageEvent<string>) => {
            if (event.data.startsWith("VIDEO_")) {
                //setTokutenvisible(false);
                //getRound1_MultiData();
                //setTokutenvisible(true);
                console.log(event.data);

            if (event.data.startsWith("VIDEO_START")) {
                fetch("http://localhost:8080/Server1/next_round", { method: "GET" })
            .then((res) => res.json())
                .then((data)=>{
                    switch(data.current_question){
                        case 31:
                            setVideoURL("http://localhost:5173/videos/honban/ANIMAL.mp4");
                            break;
                        case 17:
                            setVideoURL("http://localhost:5173/videos/honban/KUNI.mp4");
                            break;
                        case 33:
                            setVideoURL("http://localhost:5173/videos/honban/KUDAMONO.mp4");
                            break;
                        case 34:
                            setVideoURL("http://localhost:5173/videos/honban/HIRAMEKI_1.mp4");
                            break;
                        case 20:
                            setVideoURL("http://localhost:5173/videos/honban/MUSIC.mp4");
                            break;
                        case 13:
                            setVideoURL("http://localhost:5173/videos/honban/PREFECTURE.mp4");
                            break;
                        case 6:
                            setVideoURL("http://localhost:5173/videos/honban/GENGO.mp4");
                            break;
                        default:
                            setVideoURL("");
                            break;
                }
                
                setIsPlayed(true);
                });
            }
             if (event.data.startsWith("VIDEO_STOP")){
                
                setIsPlayed(false);
            }
            }
            if(event.data.startsWith("refresh")){
            }
        }
        websocket.addEventListener('message', onMessage);
        return () => {
            websocket.close();
            websocket.removeEventListener('message', onMessage);
        }
    },[])
    return(isPicture?<>Picture</>:
            isplayed?
                <ReactPlayer width="auto" height="auto" style={{margin:"0 auto"}} src={videoURL} muted={false} playing={true}/>
                :<>NOT PLAYED</>
    )
}