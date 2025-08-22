import { useState } from "react";
import { Round2_Data_Entry } from "../types/Round2_Data_Entry";
import { Round2_Data_Naibu } from "../types/Round2_Data_Naibu";

export default function useRound2_MultiData() {
    const [Round2_MultiData, setRound2MultiData] = useState<Round2_Data_Naibu>(
        {
            teams: [
                {
                    team_id: 0,
                    current_phase: 0,
                    latest_down_num: -1,
                    miss_timing: 0
                },
                {
                    team_id: 1,
                    current_phase: 2,
                    latest_down_num: -1,
                    miss_timing: -1
                },
                {
                    team_id: 2,
                    current_phase: 5,
                    latest_down_num: -1,
                    miss_timing: -1
                }
            ]
        }
    );
    const getRound2_MultiData = () => {

        fetch("http://localhost:8080/Server2/round_datas", { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                let round1Data: Array<Round2_Data_Entry> = data.result_data.sort((a: Round2_Data_Entry, b: Round2_Data_Entry) => a.team_id - b.team_id);
                console.log(round1Data);
                let Return_DTSet: Array<Round2_Data_Entry> = [
                        {
                            team_id: 0,
                            current_phase: 0,
                            latest_down_num: -1,
                            miss_timing: -1
                        },
                        {
                            team_id: 1,
                            current_phase: 0,
                            latest_down_num: -1,
                            miss_timing: -1
                        },
                        {
                            team_id: 2,
                            current_phase: 0,
                            latest_down_num: -1,
                            miss_timing: -1
                        }
                ];
                round1Data.forEach((value)=>{
                    Return_DTSet[value.team_id]=value;
                });
                setRound2MultiData({
                    teams:Return_DTSet
                });
            }
            );
    }
    return { getRound2_MultiData, Round2_MultiData };
}