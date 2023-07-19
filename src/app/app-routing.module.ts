import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { Login1Component } from './Components/login1/login1.component';
import { Signup1Component } from './Components/signup1/signup1.component';
import { ProviderHomeComponent } from './Sharedpages/Provider/provider-home/provider-home.component';
import { ActiveserviceComponent } from './Sharedpages/Provider/activeservice/activeservice.component';
import { DelayserviceComponent } from './Sharedpages/Provider/delayservice/delayservice.component';
import { ServicerecordsComponent } from './Sharedpages/Provider/servicerecords/servicerecords.component';
import { TransactionsComponent } from './Sharedpages/Provider/transactions/transactions.component';
import { CustomerhomeComponent } from './Sharedpages/Customer/customerhome/customerhome.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'login1',component:Login1Component},
  {path:'signup',component:SignupComponent},
  {path:'signup1',component:Signup1Component},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'customerhome',component:CustomerhomeComponent},
  {path:'provider',component:ProviderHomeComponent,children:[
    {path:'activeservice',component:ActiveserviceComponent},
    {path:'delayservice',component:DelayserviceComponent},
    {path:'servicerecords',component:ServicerecordsComponent},
    {path:'transactions',component:TransactionsComponent}
  ]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
