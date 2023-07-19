import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { Login1Component } from './Components/login1/login1.component';
import { Signup1Component } from './Components/signup1/signup1.component';
import { ProviderNavComponent } from './Sharedpages/Provider/provider-nav/provider-nav.component';
import { ProviderHomeComponent } from './Sharedpages/Provider/provider-home/provider-home.component';
import { ActiveserviceComponent } from './Sharedpages/Provider/activeservice/activeservice.component';
import { DelayserviceComponent } from './Sharedpages/Provider/delayservice/delayservice.component';
import { ServicerecordsComponent } from './Sharedpages/Provider/servicerecords/servicerecords.component';
import { TransactionsComponent } from './Sharedpages/Provider/transactions/transactions.component';
import { Navbar2Component } from './Components/navbar2/navbar2.component';
import { CustomerhomeComponent } from './Sharedpages/Customer/customerhome/customerhome.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    PagenotfoundComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    Login1Component,
    Signup1Component,
    ProviderNavComponent,
    ProviderHomeComponent,
    ActiveserviceComponent,
    DelayserviceComponent,
    ServicerecordsComponent,
    TransactionsComponent,
    Navbar2Component,
    CustomerhomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
