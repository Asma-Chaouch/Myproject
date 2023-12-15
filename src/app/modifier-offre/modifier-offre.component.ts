import { Component } from '@angular/core';
import { Titre } from '../Model/Titre.Model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Entreprise } from '../Model/Entreprise.Model';
import { Offre } from '../Model/Offre.Model';
import { TypeEmp } from '../Model/TypeEmp.Model';
import { TypeEntreprise } from '../Model/TypeEntreprise.Model';
import { CrudService } from '../service/crud.service';
import { NiveauEtude } from '../Model/NiveauEtude.Model';
import { Lieu } from '../Model/Lieu.Model';
import { Domaine } from '../Model/Domaine.Model';

@Component({
  selector: 'app-modifier-offre',
  templateUrl: './modifier-offre.component.html',
  styleUrls: ['./modifier-offre.component.css']
})
export class ModifierOffreComponent {
  
offre= new Offre()
titre = new Titre();
type = new TypeEmp();
niveau = new NiveauEtude();
lieu = new Lieu()
domaine = new Domaine()
entreprise = new Entreprise();
id : number;

constructor( private service : CrudService ,private router: Router,private ActivatedRoute: ActivatedRoute,  private toast : NgToastService) { }
onupdateOffre(){
  this.id = this.ActivatedRoute.snapshot.params['id'];
  const offre = {
    id: this.id,
    posteVac: this.offre.posteVac,
    experience: this.offre.experience,
    dateexp: this.offre.dateexp,
    exigences: this.offre.exigences,
    description: this.offre.description,
    typeEmp: {
      id: this.offre.typeEmp.id,
      type: this.offre.typeEmp.type
    },
    niveauEtude: {
      id: this.offre.niveauEtude.id,
      niveau: this.offre.niveauEtude.niveau
    },
    titre:{
      id: this.offre.titre.id,
      titreE: this.offre.titre.titreE
    },
    lieu: {
      id: this.offre.lieu.id,
      code_postal: this.offre.lieu.code_postal,
      gouvernement: this.offre.lieu.gouvernement,
      rue: this.offre.lieu.ville   },
    domaine: {
      id : this.offre.domaine.id,
      nom_dom: this.offre.domaine.nom_dom
    },
    entreprise: {
      id: this.offre.entreprise.id,
    }
  };

  console.log(this.id)
  this.service.modifierOffre(this.id, offre).subscribe(enttreprsie =>{
    
    this.router.navigate(['/profilEn'])  
    this.toast.success({
      detail: 'Succes Message',
        summary: 'Entreprise Modifié',})})}
    
ngOnInit(): void {
  const offreId = this.ActivatedRoute.snapshot.params['id'];
  this.service.findOffreById(offreId).subscribe(offre => {
    this.offre = offre;
    this.lieu = offre.lieu;
    this.niveau=offre.niveauEtude;
    this.type = offre.typeEmp;
    this.titre = offre.titre;
    this.domaine = offre.domaine
    this.entreprise=offre.entreprise
  });
}
}

