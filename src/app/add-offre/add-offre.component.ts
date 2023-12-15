import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../service/crud.service';
import { Entreprise } from '../Model/Entreprise.Model';
import { Offre } from '../Model/Offre.Model';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent {
  selectedtype: String;
  offreForm: FormGroup;
  offreform:FormGroup;
  entrepriseId: number;



  constructor(private service:CrudService,private router:Router,private formbuilder:FormBuilder,private toast:NgToastService) {

    let formControls = {
      posteVac: new FormControl('',[
        Validators.required,]),
        experience: new FormControl('',[
          Validators.required,]),
          dateexp: new FormControl('',[
        Validators.required,
      ]),
      exigences: new FormControl('',[
      Validators.required,
    ]),
    description: new FormControl('',[
    Validators.required,
  ]),
  nom_dom: new FormControl('',[
    Validators.required,
  ]),
  type: new FormControl('',[
    Validators.required,
  ]),
  niveau: new FormControl('',[
    Validators.required,
  ]),
  titreE: new FormControl('',[
    Validators.required,
  ]),
  
  gouvernement: new FormControl('',[
    Validators.required,
  ]),
  code_postal: new FormControl('',[
    Validators.required,
  ]),
  ville: new FormControl('',[
    Validators.required,
  ]),
  }
    this.offreform = this.formbuilder.group(formControls)
  }
  get posteVac() {return this.offreform.get('posteVac');}
  get experience(){return this.offreform.get('experience');}
  get dateexp(){return this.offreform.get('dateexp');}
  get exigences(){return this.offreform.get('exigences');}
  get description(){return this.offreform.get('description');}
  get nom_dom(){return this.offreform.get('nom_dom');}
  get type(){return this.offreform.get('type');}
  get niveau(){return this.offreform.get('niveau');}
  get titreE(){return this.offreform.get('titreE');}
  get code_postal(){return this.offreform.get('code_postal');}
  get ville(){return this.offreform.get('ville');}
  get gouvernement(){return this.offreform.get('gouvernement');}
 

  addNewOffre() {
   
    let data = this.offreform.value;
    console.log(data);
    const offre: Offre = {
      posteVac: data.posteVac,
      experience: data.experience,
      dateexp: data.dateexp,
      exigences: data.exigences,
      description: data.description,
      domaine: {
        nom_dom: data.nom_dom
      },
      typeEmp: {
        type: data.type
      },
      niveauEtude: {
        niveau: data.niveau
      },
      titre: {
        titreE: data.titreE
      },
      lieu: {
        code_postal: data.code_postal,
        ville: data.ville,
        gouvernement: data.gouvernement
      },
      entreprise: {
        id: this.entrepriseId 
      }
      
    };
    console.log(offre);
    
    if (
      data.posteVac == 0 ||
      data.experience == 0 ||
      data.dateexp == 0 ||
      data.exigences == 0 ||
      data.logo == 0 ||
      data.description == 0 ||
      data.nom_dom == 0 ||
      data.type == 0 ||
      data.niveau == 0 ||
      data.titreE == 0 ||
      data.code_postal == 0 ||
      data.ville == 0 ||
      data.gouvernement == 0
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
      this.service.addoffre(offre)
      .subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Message est Envoyée',
        });
        
        this.router.navigate(['/loffre']);
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

ngOnInit() {
    this.offreForm = this.formbuilder.group({
      type: [''] // Initial value for the "type" control

    });
    const entrepriseId = localStorage.getItem('identreprise');
    if (entrepriseId) {
      this.entrepriseId = Number(entrepriseId);
    }
  }
  onniveauChange() {
    this.selectedtype= this.offreForm.get('niveau').value;
  }
  ontypeChange() {
    this.selectedtype= this.offreForm.get('type').value;
  }
  ondomainChange() {
    this.selectedtype= this.offreForm.get('nom_dom').value;
  }



}
