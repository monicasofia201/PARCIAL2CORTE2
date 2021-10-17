import { RouterModule, Routes } from "@angular/router";
import { JugadoresComponent } from "./components/jugadores/jugadores.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { Jugador1Component } from "./components/jugador1/jugador1.component";
import { Jugador2Component } from './components/jugador2/jugador2.component';
import { Jugador3Component } from './components/jugador3/jugador3.component';


const APP_ROUTES: Routes = [
{path: "jugadores",component:JugadoresComponent},
{path: "footer",component:FooterComponent},
{path:"header",component:HeaderComponent},
{path:"jugador1",component:Jugador1Component},
{path:"jugador2",component:Jugador2Component},
{path:"jugador3",component:Jugador3Component},
{path:'**',pathMatch:'full',redirectTo:'About'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);