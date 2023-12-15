import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from '../Model/Offre.Model';
import { CrudService } from '../service/crud.service';
import { Entreprise } from '../Model/Entreprise.Model';
import { Candidat } from '../Model/Cnadidat.Model';

@Component({
  selector: 'app-offre-detail',
  templateUrl: './offre-detail.component.html',
  styleUrls: ['./offre-detail.component.css']
})
export class OffreDetailComponent {
  OffreId = new Offre()
  
  /*AdressId = new Adresse()*/
  /*SecteurId = new SecteurActivite()*/
  /*TypeId = new TypeEntreprise()*/
  id : number;
  candiat = localStorage.getItem("idcandidat");
  constructor( private service : CrudService ,private router: Router,private ActivatedRoute: ActivatedRoute ) {
    
   }
   isConnectedCandidat=false
  isConnectedEntreprise=false
  Candidaid = new Candidat()
  testLogin()
  {
    
    if(Number(localStorage.getItem("identreprise")))
    { 
      this.isConnectedEntreprise=true
    }else{
       
      this.isConnectedEntreprise=false
      
    }
    if(Number(localStorage.getItem("idcandidat")))
    {
      
      this.isConnectedCandidat=true
      
    }else{
       
      this.isConnectedCandidat=false
      
    }
    
  }
  ngOnInit(): void {this.service.findOffreById(this.ActivatedRoute.snapshot.params['id']).subscribe(offre => {
    this.OffreId=offre
    console.log(this.OffreId)
    })
    this.service.findCandidatByID(Number(localStorage.getItem("idcandidat"))).subscribe(candidat => {
      this.Candidaid=candidat
      console.log(this.candiat)
      })
    this.service.candidatConnect.subscribe(()=>{ 
      this.testLogin() 
    })
    this.testLogin()}
    
  

    
  
}
