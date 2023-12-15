import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Entreprise } from '../Model/Entreprise.Model';
import { Candidat } from '../Model/Cnadidat.Model';
import { Adresse } from '../Model/Adresse.Model';
import { SecteurActivite } from '../Model/SecteurActivite.Model';
import { TypeEntreprise } from '../Model/TypeEntreprise.Model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
      pdf: any;
      imagePath: any;
      userFile: any;
      imgURL : any;
      cv: any
      public message: string="";
      public message1: string="";

  constructor(private service : CrudService  , private router : Router,private fb:FormBuilder, private toast:NgToastService, private activatedRoute: ActivatedRoute) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,]),
      prenom: new FormControl('',[
        Validators.required,
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email,]),
      mp: new FormControl('',[
          Validators.required,]),
      telephone: new FormControl('',[
        Validators.required,
      ]),
      nomspecialite: new FormControl('',[
    Validators.required,
  ]),
  }
    this.candidatForm = this.fb.group(formControls)
  }
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (_event) => {
        this.imgURL = reader.result;
        this.entreprise.logo = reader.result as string; // Stockez l'image en tant que base64
      };
  
      reader.readAsDataURL(file);
    }
  }
  recuperPhoto(fileInput: any) {
    this.cv = fileInput.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.cv);
    fileReader.onload = (e: any) => {
      console.log('fileReader.result');
      this.cv = fileReader.result;
      this.entreprise.cv=this.cv;
      console.log(this.entreprise.cv)
    };

  }
/****************************************************************************** */
  validerEmail(): boolean {
    // Vérifier si l'email est valide
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(this.entreprise.email);
  }
  validerNumeroTelephone(): boolean {
    const telephoneRegex: RegExp = /^\d{8}$/;
    const numeroTelephone = String(this.entreprise.telephone); // Convertir en chaîne de caractères
    return telephoneRegex.test(numeroTelephone);
  }
  validerAnneeInferieure(annee:any) {
    const anneeActuelle = new Date().getFullYear();
    return annee < anneeActuelle;
  }
  validerAdresseSiteWeb(adresse:any) {
    const adresseRegex = /^(www\.)?[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/;
    return adresseRegex.test(adresse);
  }
  validerCodePostal(): boolean {
    // Vérifier si le numéro de téléphone est valide
    const codeRegex: RegExp = /^\d{4}$/;
    const code = String(this.entreprise.adresse.code_postal);
    return codeRegex.test(code);
  }
  entreprise: any = {
    nom: '',
    email: '',
    mp: '',
    telephone: null,
    logo: '',
    cv: '',
    description: '',
    annedefondation: '',
    site: '',
    nbemployee: null,
    secteurActivite: {
      nom_secteur: '',
      
    },
    typeEntreprise: {
      type: '',
      customType:'',
    },
    adresse: {
      code_postal: null,
      ville: '',
      rue: ''
    }
  };
  soumettreFormulaire() {
    const erreurs: string[] = [];
  
    if (!this.validerChampsRequis()) {
      erreurs.push('Veuillez remplir tous les champs requis.');
    }
  
    if (!this.validerEmail()) {
      console.log(this.validerEmail())
      erreurs.push('Veuillez saisir une adresse email valide.');
    }
    if (!this.validerAdresseSiteWeb(this.entreprise.site)){
      erreurs.push('Veuillez saisir un site valide.');
    }
    if(!this.validerAnneeInferieure(this.entreprise.annedefondation)){
      erreurs.push('Veillez saisir une année valide');
    }
    if(!this.validerCodePostal()){
      erreurs.push('Veillez saisir un code postal valide de 4 chiffres');
    }
    if(!this.validerNumeroTelephone()){
      erreurs.push('Veillez saisir un numéro du téléphone valide de 8 chiffres');
    }

  
    if (erreurs.length > 0) {
      erreurs.forEach(erreur => {
        this.toast.error({
          detail: 'Error Message',
          summary: erreur
        })
      });
    } else {
      // Tous les champs requis sont remplis et l'email est valide
      // Soumettre les données du formulaire à votre service pour l'ajout de l'entreprise
      this.service.ajouterEntreprise(this.entreprise).subscribe(
        response => {
          this.toast.success({
            detail: 'Succes Message',
            summary: "Entreprise Ajouté veuillez attendre la validation de votre compte",
          })
          this.router.navigate(['/']);
        },
        
      );
    }
  }
  
  validerChampsRequis(): boolean {
    // Vérifier si tous les champs requis sont remplis
    const champsRequis = [
      'nom',
      'email',
      'mp',
      'telephone',
      'logo',
      'cv',
      'description',
      'annedefondation',
      'site',
      'nbemployee',
      'adresse.code_postal', // Update: include nested field
      'adresse.ville', // Update: include nested field
      'adresse.rue', // Update: include nested field
      'secteurActivite.nom_secteur',
      'typeEntreprise.type',
    ];
  
    for (const champ of champsRequis) {
      const fields = champ.split('.'); // Split nested field by dot notation
      let fieldValue = this.entreprise;
  
      for (const field of fields) {
        fieldValue = fieldValue[field];
  
        if (fieldValue === undefined || fieldValue === null) {
          return false;
        }
      }
    }
  
    return true;
  }
  
 /************************************************************************************* */
   candidatForm: FormGroup;
       get nom() {return this.candidatForm.get('nom');}
       get prenom(){return this.candidatForm.get('prenom');}
       get email(){return this.candidatForm.get('email');}
       get mp(){return this.candidatForm.get('mp');}
       get telephone(){return this.candidatForm.get('telephone');}
       get nomspecialite(){return this.candidatForm.get('nomspecialite');}
 
 
       addNewCandidat() {
         let data = this.candidatForm.value;
         console.log(data);
         const candidat: Candidat = {
           nom: data.nom,
           prenom: data.prenom,
           email: data.email,
           mp: data.mp,
           telephone: data.telephone,
           specialite: {
             nomspecialite: data.nomspecialite
           },
           
         };
         console.log(candidat);
         
         if (
           data.nom == 0 ||
           data.email == 0 ||
           data.prenom ==0 ||
           data.mp == 0 ||
           data.telephone == 0 ||
           data.nomspecialite == 0
         ) {
           this.toast.info({
             detail: 'Error Message',
             summary: 'Remplir votre champs',
           });
         } else {
           this.service.registEmployee(candidat)
           .subscribe(
           res=>{
             console.log(res);
             this.toast.success({
               detail: 'Succes Message',
               summary: 'Candidat Inscrit!',
             });
             
             this.router.navigate(['/seConnecter']);
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
   
 

