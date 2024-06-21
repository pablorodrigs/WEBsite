import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsComponent } from './pages/forms/forms.component';
import { DicasComponent } from './pages/dicas/dicas.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carrosel/carrosel.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormsComponent,
    DicasComponent,
    SobreNosComponent,
    FooterComponent,
    LoginComponent,
    CarouselComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ2piFH8zMpS2xGbns4bzRCvtUTuf8LSc",
  authDomain: "fitdados-521db.firebaseapp.com",
  databaseURL: "https://fitdados-521db-default-rtdb.firebaseio.com",
  projectId: "fitdados-521db",
  storageBucket: "fitdados-521db.appspot.com",
  messagingSenderId: "464357743655",
  appId: "1:464357743655:web:d4ec1daeb294c7997c0202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
