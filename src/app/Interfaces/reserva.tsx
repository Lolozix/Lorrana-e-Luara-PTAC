interface Reserva {
    id: number,  
    usuario_id: number, 
    mesa_id: number,
    data: Date,    
    n_pessoas: number,
    status: boolean 
}

export default Reserva;


//Daqui pra baixo o dele estava na pasta "reservas", arquivo "page.tsx"
import { redirect } from "next/navigation";
import { Menu } from "../Components/menu";
import { ApiURL } from "../utils/config";
import { cookies } from "next/headers";
import { fetchUser } from "../utils/auth";

export default function Reservas() {
     
    const user = await fechtUser()
    if(!user) return
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
            
         <Menu user={user}/>
        </div>
    )
}
