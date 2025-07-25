import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {Fukukouou_Routes} from "./Routes"
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
createRoot(
    document.getElementById("root")!
).render(
    <StrictMode>
        <BrowserRouter>
            <Fukukouou_Routes/>
        </BrowserRouter>
    </StrictMode>
);