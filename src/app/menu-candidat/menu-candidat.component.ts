import { Component } from '@angular/core';
import { Candidat } from '../Model/Cnadidat.Model';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-menu-candidat',
  templateUrl: './menu-candidat.component.html',
  styleUrls: ['./menu-candidat.component.css']
})
export class MenuCandidatComponent {
  CandidatId = new Candidat()
  id : number;
  constructor( private service : CrudService ,private router: Router,private ActivatedRoute: ActivatedRoute ) { }
  ngOnInit(): void {this.service.findCandidatByID(Number(localStorage.getItem("idcandidat"))).subscribe(canidat => {
    this.CandidatId=canidat
    console.log(this.CandidatId)
    })}

}
