import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './pages/forms/forms.component';
import { DicasComponent } from './pages/dicas/dicas.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carrosel/carrosel.component';
import { LoginComponent } from './login/login.component';  // Nova importação
import { RegisterComponent } from './register/register.component';  // Nova importação

const routes: Routes = [
  { path: 'home', component: FormsComponent },
  { path: 'dicas', component: DicasComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'carrosel', component: CarouselComponent },
  { path: 'login', component: LoginComponent },  // Nova rota
  { path: 'register', component: RegisterComponent },  // Nova rota
  { path: '**', redirectTo: 'login' }  // Redirecionamento padrão para login
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
