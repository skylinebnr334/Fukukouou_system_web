import { useState } from "react";
import { Round1_Data_Stage } from "../types/Round1_Data_Stage";

export default function useRound1_StgData(){
    const [Round1StageData,setRound1StageData]=useState<Round1_Data_Stage>(
        {
            current_stage:-8,
            current_question:-1
        }
    );
    const getRound1_StgData=()=>{
        fetch("http://localhost:8080/Server1/next_round", { method: "GET" })
            .then((res) => res.json())
                .then((data)=>{
                    setRound1StageData(
                        {current_question:data.current_question,
                            current_stage:data.current_stage
                        }
                    );
                });
    }
    return{getRound1_StgData,Round1StageData};
}