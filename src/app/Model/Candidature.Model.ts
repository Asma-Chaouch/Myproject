import { Candidat } from "./Cnadidat.Model";
import { Offre } from "./Offre.Model";


export class Candidature {
  /*static candidat: any;*/
  constructor(
    public id?: number,
    public cv?: string,
    public etatCandidature?: boolean,
    public etatDownload?: boolean,
    public candidat?: Candidat,
    public offre?: Offre,
   
    
  ) {
   
  }


}
