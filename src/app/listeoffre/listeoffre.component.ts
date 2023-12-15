import { Component } from '@angular/core';
import { Offre } from '../Model/Offre.Model';
import { Domaine } from '../Model/Domaine.Model';
import { TypeEmp } from '../Model/TypeEmp.Model';
import { Titre } from '../Model/Titre.Model';
import { NiveauEtude } from '../Model/NiveauEtude.Model';
import { Lieu } from '../Model/Lieu.Model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Entreprise } from '../Model/Entreprise.Model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-listeoffre',
  templateUrl: './listeoffre.component.html',
  styleUrls: ['./listeoffre.component.css']
})
export class ListeoffreComponent {
  listOffre : Offre[]
  listDomaine : Domaine[]
  listTitre : Titre[]
  listType : TypeEmp[]
  listniveau : NiveauEtude[]
  listlieu : Lieu[]
  p:number=1;
  collection:any[];
  id:number;
  OffreId = new Offre();
  TitreId = new Titre()
  selectedOffreId : number
  filteredOffres: Offre[];
  entrepriseId: number; // ID de l'entreprise connectée
  constructor(private service:CrudService,private router:Router,private ActivatedRoute: ActivatedRoute , private http:  HttpClient ,private toast: NgToastService) { 
    this.entrepriseId = parseInt(localStorage.getItem('identreprise'));
  }
  ngOnInit(): void {
    this.service.getOffre().subscribe(offre => {
      this.listOffre = offre
      this.filterOffre(this.entrepriseId)
      console.log(this.filteredOffres)
    }
    
    )

  }
  filterOffre(id: number): void {
    this.filteredOffres = this.listOffre.filter(offre => offre.entreprise.id === id);
  }
   
  }


