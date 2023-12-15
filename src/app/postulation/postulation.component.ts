import { Component } from '@angular/core';
import { Candidature } from '../Model/Candidature.Model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Offre } from '../Model/Offre.Model';
import { CrudService } from '../service/crud.service';
import { Candidat } from '../Model/Cnadidat.Model';

@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
  styleUrls: ['./postulation.component.css']
})
export class PostulationComponent {

  listOffre : Offre[]
  listCan : Candidat[]
  listPost : Candidature[]
  p:number=1;
  collection:any[];
  id:number;
  CandidatureId = new Candidature();
 /* TitreId = new Titre()
  selectedOffreId : number
  filteredOffres: Offre[];*/
  entrepriseId: number; // ID de l'entreprise connectée
  constructor(private service:CrudService,private router:Router,private ActivatedRoute: ActivatedRoute , private http:  HttpClient ,private toast: NgToastService) { 
    this.entrepriseId = parseInt(localStorage.getItem('identreprise'));
  }
  downloadPdf(base64String:any) {
    let fileName:any="cv";
    const source = `${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  } 
  updateensetatcan(can:Candidature){
    console.log(can);

    let index=this.listPost.indexOf(can);
    if(can.etatCandidature==true)
    {let newCandidadture=new Candidature(can.id,can.cv,false,can.etatDownload,can.candidat,can.offre)
  this.service.modifierCandidature(can.id,newCandidadture).subscribe
  (
    res=>{console.log(res)
    this.listPost[index]=newCandidadture
    },
    err=>console.log(err)
  )
    }
   
    else{

      let newCandidadture=new Candidature(can.id,can.cv,true,can.etatDownload,can.candidat,can.offre)
      this.service.modifierCandidature(can.id,newCandidadture).subscribe
      (
        res=>{console.log(res)
        this.listPost[index]=newCandidadture
        },
        err=>console.log(err)
      )

    }



  }
  updateensetatdownload(can:Candidature){
    console.log(can);

    let index=this.listPost.indexOf(can);
    if(can.etatDownload==false)
    {let newCandidadture=new Candidature(can.id,can.cv,can.etatCandidature,true,can.candidat,can.offre)
  this.service.modifierCandidature(can.id,newCandidadture).subscribe
  (
    res=>{console.log(res)
    this.listPost[index]=newCandidadture
    },
    err=>console.log(err)
  )
    }
   
 



  }
  ngOnInit(): void {
    this.service.getcan().subscribe(can => {
      this.listPost = can
     
    }
    
    )

  }
  /*filterOffre(id: number): void {
    this.filteredOffres = this.listOffre.filter(offre => offre.entreprise.id === id);
  }*/
   



  
  filterpost(id: number,ide: number): void {
     ide=(Number(localStorage.getItem("identreprise")))
    this.listCan = this.listCan.filter(candidature => ide === id);
  }
}

