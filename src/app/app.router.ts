
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MaizeComponent } from './maize/maize.component';
import { RiceComponent } from './rice/rice.component';
import { WheatComponent } from './wheat/wheat.component';
import { PlusesComponent } from './pluses/pluses.component';
import { JuteComponent } from './jute/jute.component';
import { AgriexpertComponent } from './agriexpert/agriexpert.component';
import { FarmercornerComponent } from './farmercorner/farmercorner.component';
import { TechnicalComponent } from './technical/technical.component';
import { CroplossComponent } from './croploss/croploss.component';




export const router: Routes = [

  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'maize',component:MaizeComponent},
  {path:'rice',component:RiceComponent},
  {path:'wheat',component:WheatComponent},
  {path:'pulses',component:PlusesComponent},
  {path:'jute',component:JuteComponent},
  {path:'agri',component:AgriexpertComponent},
  {path:'farmer',component:FarmercornerComponent},
  {path:'tech',component:TechnicalComponent},
  {path:'loss',component:CroplossComponent}

  
  
 

  

];

export const routes: ModuleWithProviders=RouterModule.forRoot(router);
