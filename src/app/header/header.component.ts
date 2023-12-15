import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../service/crud.service';
import { Entreprise } from '../Model/Entreprise.Model';
import { Candidat } from '../Model/Cnadidat.Model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public service:CrudService,private router:Router,){}//public 5ater chya9ra login men ts e5er
  isConnectedCandidat=false
  isConnectedEntreprise=false
  EntrepriseId = new Entreprise()
  CnadidatId = new Candidat()

  ngOnInit(): void {
    this.service.findEntrepriseById(Number(localStorage.getItem("identreprise"))).subscribe(entreprise => {
      this.EntrepriseId=entreprise
      console.log(this.EntrepriseId)
      })
      this.service.findCandidatByID(Number(localStorage.getItem("idcandidat"))).subscribe(candidat => {
        this.CnadidatId=candidat
        console.log(this.CnadidatId)
        })
    this.service.candidatConnect.subscribe(()=>{ 
      this.testLogin() 
    })
    this.testLogin()
  }

  deconnexion()
  {
    this.service.loginout()
  }
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
}
