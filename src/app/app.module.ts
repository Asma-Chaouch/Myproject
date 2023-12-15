import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { QuiSommeNousComponent } from './qui-somme-nous/qui-somme-nous.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { OffreComponent } from './offre/offre.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { ChatComponent } from './chat/chat.component';
import { OffreDetailComponent } from './offre-detail/offre-detail.component';
import { ProfilComponent } from './profil/profil.component';
import { PostulationComponent } from './postulation/postulation.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AjoutPostulationComponent } from './ajout-postulation/ajout-postulation.component';
import { AcceuilEntrepriseComponent } from './acceuil-entreprise/acceuil-entreprise.component';
import { MenuEntrepriseComponent } from './menu-entreprise/menu-entreprise.component';
import { ListeoffreComponent } from './listeoffre/listeoffre.component';
import { ModifierEntrepriseComponent } from './modifier-entreprise/modifier-entreprise.component';
import { ProfilcandidatComponent } from './profilcandidat/profilcandidat.component';
import { PostuleOffreComponent } from './postule-offre/postule-offre.component';
import { MenuCandidatComponent } from './menu-candidat/menu-candidat.component';
import { PostcanComponent } from './postcan/postcan.component';
import { ModifierOffreComponent } from './modifier-offre/modifier-offre.component';
import { ModifierCandidatComponent } from './modifier-candidat/modifier-candidat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    QuiSommeNousComponent,
    ContactComponent,
    OffreComponent,
    FooterComponent,
    SignupComponent,
    AjouterOffreComponent,
    AddOffreComponent,
    SeConnecterComponent,
    ChatComponent,
    OffreDetailComponent,
    ProfilComponent,
    PostulationComponent,
    AjoutPostulationComponent,
    AcceuilEntrepriseComponent,
    MenuEntrepriseComponent,
    ListeoffreComponent,
    ModifierEntrepriseComponent,
    ProfilcandidatComponent,
    PostuleOffreComponent,
    MenuCandidatComponent,
    PostcanComponent,
    ModifierOffreComponent,
    ModifierCandidatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    NgxPaginationModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
