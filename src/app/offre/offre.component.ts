import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Domaine } from '../Model/Domaine.Model';
import { Lieu } from '../Model/Lieu.Model';
import { NiveauEtude } from '../Model/NiveauEtude.Model';
import { Offre } from '../Model/Offre.Model';
import { Titre } from '../Model/Titre.Model';
import { TypeEmp } from '../Model/TypeEmp.Model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent {
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
      console.log(this.listOffre)
    }
    
    )

  }
  }

