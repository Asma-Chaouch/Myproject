import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Contact } from '../Model/Contact.Model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm:FormGroup
  constructor(private service:CrudService,private router:Router,private formbuilder:FormBuilder,private toast:NgToastService){
    let formControls = {
      sujet: new FormControl('',[
            Validators.required,]),
      description: new FormControl('',[
        Validators.required
      ])}
     this.contactForm = this.formbuilder.group(formControls)
    
   }


   get sujet() {return this.contactForm.get('sujet')}
   get description() {return this.contactForm.get('description');}
   
   isEntrepriseConnected(): boolean {
    return !!localStorage.getItem('identreprise');
    
  }
  
   addNewContactEntreprise() {
    
    let data = this.contactForm.value;
    console.log(data);
    let contact = new Contact(
     undefined,data.sujet,data.description);
    console.log(contact);
    
    if (
      data.sujet ==0||
      data.description==0
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
    this.service.addcontact(contact,Number(localStorage.getItem("identreprise"))).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Message est Envoyée',
        });
        
        this.router.navigate(['/']);
      },
      err=>{
        console.log(err);
        this.toast.error({
          detail: 'Error Message',
          summary: 'Probléme de Serveur',
        }); }
    )

    }
  }
 

  addNewContactCandidat() { 
    let data = this.contactForm.value;
    console.log(data);
    let contact = new Contact(
     undefined,data.sujet,data.description);
    console.log(contact);
    
    if (
      data.sujet ==0||
      data.description==0
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
    this.service.addcontactCandidat(contact,Number(localStorage.getItem("idcandidat"))).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Message est Envoyée',
        });
        
        this.router.navigate(['/']);
      },
      err=>{
        console.log(err);
        this.toast.error({
          detail: 'Error Message',
          summary: 'Probléme de Serveur',
        }); }
    )

    }
  }
  }




