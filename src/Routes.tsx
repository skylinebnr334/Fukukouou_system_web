import {Routes,Route} from "react-router-dom";
import IndexPage from "./IndexPage";
import Round2Page from "./pages/Round2Page";
import Round1Page from "./pages/Round1Page";
export const Fukukouou_Routes=()=>{
    return(
        <Routes>
            <Route path="/" element={<IndexPage/>}/>
            <Route path="/round1" element={<Round1Page/>}/>
            <Route path="/round2" element={<Round2Page/>}/>
        </Routes>
    )
}