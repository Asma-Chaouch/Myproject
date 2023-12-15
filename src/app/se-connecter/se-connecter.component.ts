import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Entreprise } from '../Model/Entreprise.Model';
import { CrudService } from '../service/crud.service';
import { Candidat } from '../Model/Cnadidat.Model';

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.css']
})
export class SeConnecterComponent {
 loginForm: FormGroup
      constructor(
        private fb: FormBuilder,
        private service:CrudService,
        private router:Router,private toast:NgToastService
      ) { 
        let formControls = {
          email: new FormControl('',[
            Validators.required,
            Validators.email
            
          ]),
          mp: new FormControl('',[
            Validators.required,
           
          ])
        }
    
        this.loginForm = this.fb.group(formControls)
      }
    
      get email() { return this.loginForm.get('email') }
      get mp() { return this.loginForm.get('mp') }
     
      loginEmploye() {
        let data = this.loginForm.value;
        console.log(data);
        let employee = new Candidat(
         null,null,null,data.email,data.mp,null,null);
        console.log(employee);
        if (
          data.email == 0 ||
          data.mp == 0
        )
        {
          this.toast.info({
            detail: 'Error Message',
            summary: 'Remplir votre champs',
          });
        } else {
          this.service.loginCandidat(employee)
          this.router.navigate(['/'])
          
        }
        }
        login() {
          let data = this.loginForm.value;
          console.log(data);
          let entreprise = new Entreprise(
           null,null,data.email,data.mp,null,null,null,null,null);
          console.log(entreprise);
          if (
            data.email == 0 ||
            data.mp == 0
          )
          {
            this.toast.info({
              detail: 'Error Message',
              summary: 'Remplir votre champs',
            });
          } else {
            this.service.loginEntreprise(entreprise);
            
          }
          }
    ngOnInit(): void {
  
     
    }

  

}

  