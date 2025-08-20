import { useEffect, useState } from 'react';
import useRound2_MultiData from '../hooks/useRound2_MultiData';

import { Grid } from '@mui/material';
import { Global } from "@emotion/react";
export default function Round2Page() {

    const [refreshed, setRefreshed] = useState<boolean>(false);
    const { getRound2_MultiData, Round2_MultiData } = useRound2_MultiData();
    useEffect(()=>{
        getRound2_MultiData();
        setRefreshed(true);
    },[])
    return (
        <>Round 2</>
    )
}