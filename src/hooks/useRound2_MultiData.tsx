import { useState } from "react";
import { Round2_Data_Entry } from "../types/Round2_Data_Entry";
import { Round2_Data_Naibu } from "../types/Round2_Data_Naibu";

export default function useRound2_MultiData(){
    const [Round2_MultiData,setRound2MultiData]=useState<Round2_Data_Naibu>(
        {
            teams:[
            {team_id:0,
                current_phase:0,
                latest_down_num:-1,
                miss_timing:-1
            },
            {team_id:1,
                current_phase:0,
                latest_down_num:-1,
                miss_timing:-1
            },
            {team_id:2,
                current_phase:0,
                latest_down_num:-1,
                miss_timing:-1
            },
            {team_id:3,
                current_phase:0,
                latest_down_num:-1,
                miss_timing:-1
            },
            {team_id:4,
                current_phase:0,
                latest_down_num:-1,
                miss_timing:-1
            }
        ]
        }
    );
    const getRound2_MultiData=()=>{

    }
    return{getRound2_MultiData,Round2_MultiData};
}