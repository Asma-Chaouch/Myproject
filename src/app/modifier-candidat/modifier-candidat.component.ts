import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Candidat } from '../Model/Cnadidat.Model';
import { Specialite } from '../Model/Specialite.Model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-modifier-candidat',
  templateUrl: './modifier-candidat.component.html',
  styleUrls: ['./modifier-candidat.component.css']
})
export class ModifierCandidatComponent {
  candidat1= new Candidat()
  specialite = new Specialite();
  candidat = new Candidat();
  id : number;
  
  constructor( private service : CrudService ,private router: Router,private ActivatedRoute: ActivatedRoute, private toast : NgToastService) { }
  onUpdatCandidat(){
    this.id = this.ActivatedRoute.snapshot.params['id'];
    const candidat = {
      id: this.id,
      nom: this.candidat.nom,
      prenom: this.candidat.prenom,
      email: this.candidat.email,
      mp: this.candidat.mp,
      telephone: this.candidat.telephone,
      specialite: {
        id: this.candidat.specialite.id,
        nomspecialite: this.candidat.specialite.nomspecialite
      }
    };
    console.log(this.id)
    this.service.modifierCandidat(this.id ,candidat).subscribe(candidat =>{
      this.router.navigate(['/listCandidat'])
      this.toast.success({
        detail: 'Succes Message',
          summary: 'Candidat Modifié',
      }) })}
  ngOnInit(): void {
    const candiatId = this.ActivatedRoute.snapshot.params['id'];
    this.service.findCandidatByID(candiatId).subscribe(candidat => {
      this.candidat = candidat;
      this.specialite = candidat.specialite;
    });
  }
}

