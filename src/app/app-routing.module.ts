import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OffreComponent } from './offre/offre.component';
import { QuiSommeNousComponent } from './qui-somme-nous/qui-somme-nous.component';
import { SignupComponent } from './signup/signup.component';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { ChatComponent } from './chat/chat.component';
import { ProfilComponent } from './profil/profil.component';
import { AcceuilEntrepriseComponent } from './acceuil-entreprise/acceuil-entreprise.component';
import { ListeoffreComponent } from './listeoffre/listeoffre.component';
import { PostulationComponent } from './postulation/postulation.component';
import { ModifierEntrepriseComponent } from './modifier-entreprise/modifier-entreprise.component';
import { ProfilcandidatComponent } from './profilcandidat/profilcandidat.component';
import { PostuleOffreComponent } from './postule-offre/postule-offre.component';
import { OffreDetailComponent } from './offre-detail/offre-detail.component';
import { PostcanComponent } from './postcan/postcan.component';
import { ModifierCandidatComponent } from './modifier-candidat/modifier-candidat.component';
import { ModifierOffreComponent } from './modifier-offre/modifier-offre.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:QuiSommeNousComponent},
  {path:"offre",component:OffreComponent},
  {path:"signup",component:SignupComponent},
  {path:"ajoutOffre",component:AjouterOffreComponent},
  {path:"addOffre",component:AddOffreComponent},
  {path:"seConnecter",component:SeConnecterComponent},
  {path:"chat",component:ChatComponent},
  {path:"profil",component:ProfilComponent},
  {path:"afterloginEntreprise",component:AcceuilEntrepriseComponent},
  {path:"loffre",component:ListeoffreComponent},
  {path:"post",component:PostulationComponent},
  {path:"profilup/:id",component:ModifierEntrepriseComponent},
  {path:"profilCan",component:ProfilcandidatComponent},
  {path:"postoffre/candidatures/:idc/:id",component:PostuleOffreComponent},
  {path:"offred/:id",component:OffreDetailComponent},
  {path:"profilEn",component:ProfilComponent},
  {path:"postcan",component:PostcanComponent},
  {path:"modifiercan/:id",component:ModifierCandidatComponent},
  {path:"modifierOffre/:id",component:ModifierOffreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
