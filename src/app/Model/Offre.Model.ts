
import { Domaine } from "./Domaine.Model";
import { Entreprise } from "./Entreprise.Model";
import { Lieu } from "./Lieu.Model";
import { NiveauEtude } from "./NiveauEtude.Model";
import { Titre } from "./Titre.Model";
import { TypeEmp } from "./TypeEmp.Model";


export class Offre {
    constructor(
      public id?: number,
      public posteVac?: number,
      public experience?: number,
      public dateexp?: string,
      public exigences?: string,
      public description?: string,
      public domaine?: Domaine,
      public typeEmp?:TypeEmp,
      public niveauEtude?:NiveauEtude,
      public titre?:Titre,
      public lieu?:Lieu,
      public entreprise?:Entreprise

    ) {}
  }