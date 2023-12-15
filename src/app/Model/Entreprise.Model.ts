import { Adresse } from "./Adresse.Model";
import { SecteurActivite } from "./SecteurActivite.Model";
import { TypeEntreprise } from "./TypeEntreprise.Model";

export class Entreprise{
    constructor(
        public id?:number,
        public nom?:string,
        public email?:string,
        public mp?:string,
        public telephone?:string,
        public logo?:string,
        public etat?:boolean,
        public cv?:any,
        public description?:string,
        public  annedefondation?:string,
        public site?:string,
        public nbemployee?:number,
        public adresse?:Adresse,
        public secteurActivite?:SecteurActivite,
        public typeEntreprise?:TypeEntreprise

    ){}
}