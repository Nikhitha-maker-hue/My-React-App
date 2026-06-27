import { BrowserRouter, Routes,Route } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import Idly from "./Idly";
import Vada from "./Vada";
import Puri from "./Puri";
import Upma from "./Upma";
import Chapathi from "./Chapathi";
import Dosa from "./Dosa";

function MyHotelApp(){
    return(
        <div>
         
             <BrowserRouter> 
                        <HeaderMenu>   </HeaderMenu> 
                        <Routes> 
                            <Route path="/Idly" element={<Idly> </Idly>}> </Route>
                            <Route path="/Vada" element={<Vada> </Vada>}> </Route>
                            <Route path="/Puri" element={<Puri> </Puri>}> </Route>
                            <Route path="/Upma" element={<Upma> </Upma>}> </Route>
                            <Route path="/Chapathi" element={<Chapathi> </Chapathi>}> </Route>
                            <Route path="/Dosa" element={<Dosa> </Dosa>}> </Route>
                            </Routes>                   
             </BrowserRouter>
        </div>
       
    )
}
export default MyHotelApp;