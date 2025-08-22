import { useState } from "react";
import { Round1_Data_Naibu } from "../types/Round1_Data_Naibu";
import { Round1_Data_Server } from "../types/Round1_Data_Server";
import { Round1_Data_Entry } from "../types/Round1_Data_Entry";
import { Round1_Data_used_Q } from "../types/Round1_Data_used_Q";

export default function useRound1_MultiData() {
    const [Round1_MultiData, setRound1MultiData] = useState<Round1_Data_Naibu>(
        {
            teams: [
                {
                    team_id: 0,
                    score: 0
                },
                {
                    team_id: 1,
                    score: 0
                },
                {
                    team_id: 2,
                    score: 2
                },
                {
                    team_id: 3,
                    score: 0
                },
                {
                    team_id: 4,
                    score: 5
                },
                {
                    team_id: 5,
                    score: 0
                },
                {
                    team_id: 6,
                    score: 0
                },
            ],
            used_questions: [false,false,false,false,false,false,
                false,false,false,false,false,false,
                false,false,false,false,false,false,
                false,false,false,false,false,false,
                false,false,false,false,false,false,
                false,false,false,false,false,false,
            ]
        }
    );
    const getRound1_MultiData = () => {

        fetch("http://localhost:8080/Server1/round_datas", { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                fetch("http://localhost:8080/Server1/used_questions", { method: "GET" })
                    .then((res) => res.json())
                    .then((data_2) => {
                        let usedQ_array:Array<Round1_Data_used_Q>=data_2.sort((a:Round1_Data_used_Q,b:Round1_Data_used_Q)=>a.id-b.id);
                        let round1Data: Array<Round1_Data_Server> = data.result_data.sort((a: Round1_Data_Server, b: Round1_Data_Server) => a.id - b.id);
                        let team1_score: number = 0;
                        let team2_score: number = 0;
                        let team3_score: number = 0;
                        let team4_score: number = 0;
                        let team5_score: number = 0;
                        let team6_score: number = 0;
                        round1Data.forEach((value) => {
                            team1_score += value.team1;
                            team2_score += value.team2;
                            team3_score += value.team3;
                            team4_score += value.team4;
                            team5_score += value.team5;
                            team6_score += value.team6;
                        });

                        let return_data_N: Array<Round1_Data_Entry> = [
                            {
                                team_id: 0,
                                score: team1_score
                            },
                            {
                                team_id: 1,
                                score: team2_score
                            },
                            {
                                team_id: 2,
                                score: team3_score
                            },
                            {
                                team_id: 3,
                                score: team4_score
                            },
                            {
                                team_id: 4,
                                score: team5_score
                            },
                            {
                                team_id: 5,
                                score: team6_score
                            }
                        ];
                        let used_Array2:Array<boolean>=[false,false,false,false,false,false,
                false,false,false,false,false,false,
                false,false,false,false,false,false,
                false,false,false,false,false,false,
                false,false,false,false,false,false,
                false,false,false,false,false,false];
                        usedQ_array.forEach((value)=>{
                            used_Array2[value.id]=true;
                        })
                        setRound1MultiData(
                            {
                                teams: return_data_N,
                                used_questions:used_Array2
                            }
                        );
                    })
            });
    }
    return { getRound1_MultiData, Round1_MultiData };
}