import {Routes,Route} from "react-router-dom";
import IndexPage from "./IndexPage";
import Round2Page from "./pages/Round2Page";
export const Fukukouou_Routes=()=>{
    return(
        <Routes>
            <Route path="/" element={<IndexPage/>}/>
            <Route path="/round2" element={<Round2Page/>}/>
        </Routes>
    )
}