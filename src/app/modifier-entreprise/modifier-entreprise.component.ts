import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adresse } from '../Model/Adresse.Model';
import { Entreprise } from '../Model/Entreprise.Model';
import { SecteurActivite } from '../Model/SecteurActivite.Model';
import { TypeEntreprise } from '../Model/TypeEntreprise.Model';
import { CrudService } from '../service/crud.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-modifier-entreprise',
  templateUrl: './modifier-entreprise.component.html',
  styleUrls: ['./modifier-entreprise.component.css']
})
export class ModifierEntrepriseComponent {

 
  

  /*onUpdatEntreprise(){
    this.id = this.ActivatedRoute.snapshot.params['id'];
    const entreprise = {
      id: this.id,
      nom: this.entreprise.nom,
      email: this.entreprise.email,
      mp: this.entreprise.mp,
      telephone: this.entreprise.telephone,
      logo: this.entreprise.logo,
      cv: this.entreprise.cv,
      etat: this.entreprise.etat,
      description: this.entreprise.description,
      annedefondation: this.entreprise.annedefondation,
      site: this.entreprise.site,
      nbemployee: this.entreprise.nbemployee,
      secteurActivite: {
        id: this.entreprise.secteurActivite.id,
        nom_secteur: this.entreprise.secteurActivite.nom_secteur
      },
      typeEntreprise: {
        id: this.entreprise.typeEntreprise.id,
        type: this.entreprise.typeEntreprise.type
      },
      adresse: {
        id: this.entreprise.adresse.id,
        code_postal: this.entreprise.adresse.code_postal,
        ville: this.entreprise.adresse.ville,
        rue: this.entreprise.adresse.rue
      }
    };
  //  this.entreprise.adresse = this.adresse;
 // this.entreprise.secteurActivite = this.secteur;
  this.entreprise.typeEntreprise = this.typeEntreprise;
    console.log(this.id)
    this.service.modifierEntreprise(this.id ,entreprise).subscribe(enttreprsie =>{
      this.router.navigate(['/liste-Entreprise']).then(() => {
      window.location.reload() })  })}
  ngOnInit(): void {
    const entrepriseId = this.ActivatedRoute.snapshot.params['id'];
    this.service.findEntrepriseById(entrepriseId).subscribe(entreprise => {
      this.entreprise = entreprise;
      this.adresse = entreprise.adresse;
      this.secteur= entreprise.secteurActivite;
      this.typeEntreprise = entreprise.typeEntreprise;
    });
  }
*/
entreprise1= new Entreprise()
//entreprisewrapper: EntrepriseWrapper = new EntrepriseWrapper(); 
adresse = new Adresse();
secteur = new SecteurActivite();
typeEntreprise = new TypeEntreprise();
entreprise = new Entreprise();
id : number;

constructor( private service : CrudService ,private router: Router,private ActivatedRoute: ActivatedRoute,  private toast : NgToastService) { }
onUpdatEntreprise(){
  this.id = this.ActivatedRoute.snapshot.params['id'];
  const entreprise = {
    id: this.id,
    nom: this.entreprise.nom,
    email: this.entreprise.email,
    mp: this.entreprise.mp,
    telephone: this.entreprise.telephone,
    logo: this.entreprise.logo,
    cv: this.entreprise.cv,
    etat: this.entreprise.etat,
    description: this.entreprise.description,
    annedefondation: this.entreprise.annedefondation,
    site: this.entreprise.site,
    nbemployee: this.entreprise.nbemployee,
    secteurActivite: {
      id: this.entreprise.secteurActivite.id,
      nom_secteur: this.entreprise.secteurActivite.nom_secteur
    },
    typeEntreprise: {
      id: this.entreprise.typeEntreprise.id,
      type: this.entreprise.typeEntreprise.type
    },
    adresse: {
      id: this.entreprise.adresse.id,
      code_postal: this.entreprise.adresse.code_postal,
      ville: this.entreprise.adresse.ville,
      rue: this.entreprise.adresse.rue
    }
  };
//  this.entreprise.adresse = this.adresse;
// this.entreprise.secteurActivite = this.secteur;
this.entreprise.typeEntreprise = this.typeEntreprise;
  console.log(this.id)
  this.service.modifierEntreprise(this.id ,entreprise).subscribe(enttreprsie =>{
    
    this.router.navigate(['/profilEn'])  
    this.toast.success({
      detail: 'Succes Message',
        summary: 'Entreprise Modifié',})})}
    
ngOnInit(): void {
  const entrepriseId = this.ActivatedRoute.snapshot.params['id'];
  this.service.findEntrepriseById(entrepriseId).subscribe(entreprise => {
    this.entreprise = entreprise;
    this.adresse = entreprise.adresse;
    this.secteur= entreprise.secteurActivite;
    this.typeEntreprise = entreprise.typeEntreprise;
  });
}
}
