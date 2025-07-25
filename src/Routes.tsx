import {Routes,Route} from "react-router-dom";
import IndexPage from "./IndexPage";
export const Fukukouou_Routes=()=>{
    return(
        <Routes>
            <Route path="/" element={<IndexPage/>}/>
        </Routes>
    )
}