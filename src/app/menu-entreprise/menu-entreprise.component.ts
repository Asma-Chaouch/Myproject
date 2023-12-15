import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Entreprise } from '../Model/Entreprise.Model';
import { SecteurActivite } from '../Model/SecteurActivite.Model';
import { TypeEntreprise } from '../Model/TypeEntreprise.Model';

@Component({
  selector: 'app-menu-entreprise',
  templateUrl: './menu-entreprise.component.html',
  styleUrls: ['./menu-entreprise.component.css']
})
export class MenuEntrepriseComponent {
  EntrepriseId = new Entreprise()
  id : number;
  constructor( private service : CrudService ,private router: Router,private ActivatedRoute: ActivatedRoute ) { }
  ngOnInit(): void {this.service.findEntrepriseById(Number(localStorage.getItem("identreprise"))).subscribe(entreprise => {
    this.EntrepriseId=entreprise
    console.log(this.EntrepriseId)
    })}

}
