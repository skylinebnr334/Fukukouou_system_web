/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import useRound2_MultiData from '../hooks/useRound2_MultiData';

import { Grid } from '@mui/material';
import { css, Global } from "@emotion/react";
import { Global_Style } from '../styles/global_Style';
import { Round2_Data_Naibu } from '../types/Round2_Data_Naibu';
import useRound2_StgData from '../hooks/useRound2_StgData';

const NORMAL = "#7e449d"
const GRAY = "#444444"
const REACH = "#bbc038"
const LOST = "#da3838"
const KaidanItem = (props: { i: number; Round1_MultiData: Round2_Data_Naibu }) => {
    const score = props.Round1_MultiData.teams[props.i].current_phase;
/*
    const color = score < 1 ? LOST : score === 1 ? REACH : NORMAL
    */
   const color = GRAY
   const color2 = "#00EE00"

    return (
        <Grid size={4} css={style.scoreCenterWrapper}>
            <div
                css={css`
                    ${style.scoregaugeWrapperBase};
                    border: ${color ? color + " 8px solid" : "none"};
                    background: linear-gradient(to top,#ff5623,#d3ff42);
                    color: ${color ? "white" : "none"};
                    font-size: ${score < 1 ? "3.0vw" : "4.5vw"};
                `}
            >
            <div
                css={css`
                    ${style.scoregaugeNakamiBase};
                    font-size: ${score < 1 ? "3.0vw" : "4.5vw"};
                    height:${score<0 ? 0 : 100-score*20}%;
                `}
            />
            </div>
        </Grid>
    )
}
const PhaseItem = (props: { i: number; Round1_MultiData: Round2_Data_Naibu ,stage_no:number}) => {
    const score = props.Round1_MultiData.teams[props.i].current_phase;
/*
    const color = score < 1 ? LOST : score === 1 ? REACH : NORMAL
    */
   const color=are_you_locked(props.stage_no,props.Round1_MultiData,props.i) ? LOST:NORMAL;

    return (
        <Grid size={4} css={style.scoreCenterWrapper}>
            <div
                css={css`
                    ${style.scoreWrapperBase};
                    border: ${color ? color + " 8px solid" : "none"};
                    color: ${color ? "white" : "none"};
                    font-size: ${score < 1 ? "3.0vw" : "4.5vw"};
                `}
            >
                <p css={style.scoreBase}>
                    {
                    /*score < 1 ? "LOST" : score*/
                    score}
                </p>
            </div>
        </Grid>
    )
}
const KaitoukenItem = (props: { i: number; Round1_MultiData: Round2_Data_Naibu ,stage_no:number}) => {
    const score = props.Round1_MultiData.teams[props.i].current_phase;
/*
    const color = score < 1 ? LOST : score === 1 ? REACH : NORMAL
    */
   const color = "#FF0000"

    return (
        <Grid size={4} css={style.scoreCenterWrapper}>
            {are_you_locked(props.stage_no,props.Round1_MultiData,props.i) ? 
            <div
                css={css`
                    ${style.HoldWrapperBase};
                    border: ${color ? color + " 4px solid" : "none"};
                    color: ${color ? "white" : "none"};
                    font-size: ${"1.5vw"};
                `}
            >
                <p css={style.holdBase}>
                    LOCKED
                </p>
            </div> : <></>
}
        </Grid>
    )
}
const HoldstateItem = (props: { i: number; Round1_MultiData: Round2_Data_Naibu }) => {
    const score = props.Round1_MultiData.teams[props.i].current_phase;
/*
    const color = score < 1 ? LOST : score === 1 ? REACH : NORMAL
    */
   const color = "#ff8c00"

    return (
        <Grid size={4} css={style.scoreCenterWrapper}>
            <div
                css={css`
                    ${style.HoldWrapperBase};
                    border: ${color ? color + " 4px solid" : "none"};
                    color: ${color ? "white" : "none"};
                    font-size: ${"1.5vw"};
                `}
            >
                <p css={style.holdBase}>
                    HOLD
                </p>
            </div>
        </Grid>
    )
}
function are_you_locked(stage_no:number,round2MultiData:Round2_Data_Naibu,team_id:number):boolean{
    let phase_tm=round2MultiData.teams[team_id].current_phase;
    let miss_phase=round2MultiData.teams[team_id].miss_timing;
    if(phase_tm==0){
        if(miss_phase!=-1){
            if(miss_phase+1>=stage_no){
                return true;
            }
        }
    }
    return false;
}
export default function Round2Page() {

    const [refreshed, setRefreshed] = useState<boolean>(false);
    const { getRound2_MultiData, Round2_MultiData } = useRound2_MultiData();
    const {getRound2_StgData,Round2StageData}=useRound2_StgData();
    useEffect(()=>{
        getRound2_MultiData();
        getRound2_StgData();
        setRefreshed(true);
    },[])
    return (
        
        <>
            <Global styles={Global_Style} />
            <div style={{color:"#FFFFFF"}}>
                Stage : {Round2StageData.current_num+1}
            </div>
            <div css={style.wrapper}>
                <div style={{height: 15}} />
                <div>
                    <Grid container >
                         {[...Array(3)].map((_, i) => <KaidanItem key={i} i={i} Round1_MultiData={Round2_MultiData} />)}

                        {[...Array(3)].map((_, i) => <PhaseItem key={i} i={i} Round1_MultiData={Round2_MultiData} stage_no={Round2StageData.current_num} />)}
                        {[...Array(3)].map((_, i) => <KaitoukenItem key={i} i={i} Round1_MultiData={Round2_MultiData} stage_no={Round2StageData.current_num}/>)}

                        {[...Array(3)].map((_, i) => <HoldstateItem key={i} i={i} Round1_MultiData={Round2_MultiData} />)}

                    </Grid>
                </div>
            </div>
        </>
    )
}

const style = {
    wrapper: css`
        background-color: #00000000;
        color:white;
        height: 100%;
        padding: 10px;
    `,
    scoreCenterWrapper: css`
        text-align: center;
    `,
    classWrapper: css`
        color:white;
        width: 100%;
        height: 50px;
        margin-top: 15px;
        margin-bottom: 15px;
    `,
    classAreaBase: css`
        margin: 0 auto;
        width: 45%;
        height: 50px;
    `,
    scoregaugeWrapperBase: css`
        display: inline-block;
        aspect-ratio:  1/ 4;
        width: 20%;
        height: auto;
        background-color: #00000000;
        margin-bottom: 20px;
    `,
    scoreWrapperBase: css`
        display: inline-block;
        aspect-ratio: 1 / 1;
        width: 25%;
        height: auto;
        background-color: #00000000;
        border-radius: 50%;
        margin-bottom: 20px;
    `,
    scoregaugeNakamiBase: css`
        width:100%;
        background-color: #222222;
    `,
    HoldWrapperBase: css`
        display: inline-block;
        aspect-ratio: 3 / 1;
        width: 30%;
        height: auto;
        background-color: #00000000;
        margin-bottom: 20px;
    `,
    scoreBase: css`
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center; 
    `,
    holdBase: css`
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center; 
    `,
    nameBase: css`
        color:white;
        width: 45%;
        height: 55vh;
        margin-bottom: 20px;
        font-family:'Kaisotai-Next-UP-B';
        writing-mode: vertical-rl;
        text-orientation: upright;
        vertical-align: middle;
        display: inline-block;
    `,
    nameNormal: css`
        background: rgb(136,94,158);
        background: linear-gradient(0deg, rgba(136,94,158,0.25) 70%, rgba(136,94,158,1) 100%);
    `,
    nameReach: css`
        background: #bbc038;
        background: linear-gradient(0deg, rgba(187,192,56,0.25) 70%, #bbc038 100%);
    `,
    nameLOST: css`
        background: #da3838;
        background: linear-gradient(0deg, rgba(218,56,56,0.25) 30%, #da3838 100%);
    `
}
