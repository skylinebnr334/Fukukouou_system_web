import { useState } from "react";
import { Round2_Data_Stage } from "../types/Round2_Data_Stage";

export default function useRound2_StgData(){
    const [Round2StageData,setRound2StageData]=useState<Round2_Data_Stage>(
        {
            current_num:-8
        }
    );
    const getRound2_StgData=()=>{
        fetch("http://localhost:8080/Server2/next_round", { method: "GET" })
            .then((res) => res.json())
                .then((data)=>{
                    setRound2StageData(
                        {current_num:data.current_num}
                    );
                });
    }
    return{getRound2_StgData,Round2StageData};
}