import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProgramComponent } from './program/program.component';
import { MajorcropComponent } from './majorcrop/majorcrop.component';
import { MaizeComponent } from './maize/maize.component';
import { WheatComponent } from './wheat/wheat.component';
import { RiceComponent } from './rice/rice.component';
import { PlusesComponent } from './pluses/pluses.component';
import { JuteComponent } from './jute/jute.component';
import { AgriexpertComponent } from './agriexpert/agriexpert.component';
import { FarmercornerComponent } from './farmercorner/farmercorner.component';
import { TechnicalComponent } from './technical/technical.component';
import { CroplossComponent } from './croploss/croploss.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ProgramComponent,
    MajorcropComponent,
    MaizeComponent,
    WheatComponent,
    RiceComponent,
    PlusesComponent,
    JuteComponent,
    AgriexpertComponent,
    FarmercornerComponent,
    TechnicalComponent,
    CroplossComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    routes,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
