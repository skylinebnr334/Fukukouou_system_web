import { useState } from "react";
import { Round1_Data_Naibu } from "../types/Round1_Data_Naibu";

export default function useRound1_MultiData(){
    const [Round1_MultiData,setRound1MultiData]=useState<Round1_Data_Naibu>(
        {
            teams:[
            {team_id:0,
                score:0
            },
            {team_id:1,
                score:0
            },
            {team_id:2,
                score:2
            },
            {team_id:3,
                score:0
            },
            {team_id:4,
                score:5
            },
            {team_id:5,
                score:0
            },
            {team_id:6,
                score:0
            },
        ]
        }
    );
    const getRound1_MultiData=()=>{
        
    }
    return{getRound1_MultiData,Round1_MultiData};
}