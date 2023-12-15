import { Offre } from "./Offre.Model";
import { Specialite } from "./Specialite.Model";


export class Candidat{
    constructor(
        public id?:number,
        public nom?:string,
        public prenom?:string,
        public email?:string,
        public mp?:string,
        public telephone?:string,
        public offre?: Offre[],
        public specialite?: Specialite,
    ){}
}