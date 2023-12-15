import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Candidature } from '../Model/Candidature.Model';
import { Offre } from '../Model/Offre.Model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-postcan',
  templateUrl: './postcan.component.html',
  styleUrls: ['./postcan.component.css']
})
export class PostcanComponent {

  listOffre : Candidature[]
  p:number=1;
  collection:any[];
  id:number;
  OffreId = new Offre();
  selectedOffreId : number
  filtredCan: Candidature[];
  offreid: number; // ID de l'entreprise connectée
  candidatid:number;
  constructor(private service:CrudService,private router:Router,private ActivatedRoute: ActivatedRoute , private http:  HttpClient ,private toast: NgToastService) { 
  }



 
  downloadPdf(base64String:any) {

    let fileName:any="cv";
    const source = `${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  }
/*  ngOnInit(): void {
    console.log("je sui la")
    this.service.getcan().subscribe(candidature => {
      this.listOffre = candidature
      
      
      //this.filterpost(this.offreid)
      console.log(this.listOffre)
    }
    
    
    )

  }*/
  ngOnInit(): void {
    this.service.getcan().subscribe(candidature1 => {
      // Filtrer les candidatures en fonction de l'id du candidat connecté
      const candidatId = parseInt(localStorage.getItem('idcandidat'));
      this.listOffre = candidature1.filter(candidature => candidature.candidat.id === candidatId);
    });
  }
  filterpost(id: number,ide: number): void {
     ide=(Number(localStorage.getItem("idcandidat")))
    this.filtredCan = this.listOffre.filter(candidature => ide === id);
  }
}
