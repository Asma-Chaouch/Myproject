import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Contact } from '../Model/Contact.Model';
import { Entreprise } from '../Model/Entreprise.Model';
import { Subject, catchError, of } from 'rxjs';
import jwt_decode from "jwt-decode";
//import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Candidat } from '../Model/Cnadidat.Model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Offre } from '../Model/Offre.Model';
import { NgToastService } from 'ng-angular-popup';
import { Candidature } from '../Model/Candidature.Model';

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl="http://localhost:8087/api"
  loginCnadiatUrl="http://localhost:8087/api/candidat/login"
  loginEntrepriseUrl="http://localhost:8087/api/entreprise/login"
  private _candidatConnect=new Subject<void>();
  isConnected=false
  private _reflech=new Subject<void>();

  helper=new JwtHelperService();
  entrepriseId:number
  modifierEntreprise(id: number, entreprise: Entreprise): Observable<Entreprise> {
    const url = `${this.apiUrl}/entreprise/${id}`;
    return this.http.put<Entreprise>(url, entreprise, httpOptions);
  }
  modifierCandidat(id: number, candidat: Candidat): Observable<Candidat>{
    const url =`${this.apiUrl}/candidat/${id}`;
    return this.http.put<Entreprise>(url , candidat , httpOptions);
  }
  modifierCandidature(id:number , candidature: Candidature): Observable<Candidature>{
    const url =`${this.apiUrl}/candidatures/${id}`
    return this.http.put<Candidature>(url, candidature, httpOptions)
  }
  


  get candidatConnect(){
    return this._candidatConnect
  }
  constructor(private http:HttpClient,private route:Router,private toast:NgToastService) { 
    
  }
  isLoggedIn(){
    let token = localStorage.getItem("myToken");
    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  

  loginCandidat(candidat: Candidat) {
    this.loginFromApi(candidat).pipe(
      catchError((error) => {
        console.log(error);
        this.toast.error({
          detail: 'Error Message',
          summary: "Candidat n'existe pas",
        });
        return of(null); // Retourne une observable de valeur null pour que le code puisse continuer
      })
    ).subscribe((data) => {
      if (data) {
        console.log(data);
        var decoded: any = jwt_decode(data.token);
        console.log(decoded);
        this.loginInCan(decoded.data);
        this._candidatConnect.next();
      }
    });
    console.log("entreprise")
  }
    
  loginInEnt(data: any) {
    localStorage.setItem("identreprise", data.id); // Utiliser la propriété appropriée contenant l'identifiant de l'entreprise
    this.isConnected = true;
    this.route.navigate(['/']);
  }
  
  loginInCan(data:any)
  {
    localStorage.setItem("idcandidat",data.id)
    this.isConnected=true
    this.route.navigate(['/'])
  }
  findEntrepriseById(id : number): Observable<Entreprise> {
    const url = `${this.apiUrl + "/entreprise"}/${id}`
    return this.http.get<Entreprise>(url,httpOptions)
  }

  loginFromApi(candidat:Candidat){
    return this.http.post<any>(this.loginCnadiatUrl, candidat);
  }
  loginEntreprise(enseignant: Entreprise) {
    this.loginEntFromApi(enseignant).subscribe(
      (data) => {
        console.log(data);
        var decoded: any = jwt_decode(data.token);
        console.log(decoded);
        this.loginInEnt(decoded.data);
        this._candidatConnect.next();
        this.route.navigate(['/']);
      },
      (error) => {
        console.log(error);
        if (error.status === 404) {
          this.toast.error({
            detail: "Entreprise n'existe pas",
            summary: 'Erreur de connexion',
          });
        } else if (error.status === 401) {
          this.toast.error({
            detail: 'Votre compte est bloqué',
            summary: 'Erreur de connexion',
          });
        } else {
          this.toast.error({
            detail: 'Une erreur est survenue lors de la connexion',
            summary: 'Erreur de connexion',
          });
        }
      }
    );
  }


  loginEntFromApi(enseignant: Entreprise) {
    return this.http.post<any>(this.loginEntrepriseUrl, enseignant);
  }
  
  
  
  loginout(){
    localStorage.removeItem("idcandidat")
    localStorage.removeItem("identreprise")
  }
  
  
  
  
  
  addcontact(contact:Contact , id:number){
    const url= `${this.apiUrl}/contact/entreprise/${id}`
    return this.http.post<any>(url, contact , httpOptions);
  }
  addcontactCandidat(contact:Contact , id:number){
    const url= `${this.apiUrl}/contact/candidat/${id}`
    return this.http.post<any>(url, contact , httpOptions);
  }
  addoffre(offre:Offre){
    return this.http.post<any>(this.apiUrl+"/offre", offre,httpOptions);
  }
  ajouterEntreprise(entreprise: any):Observable<any>{
    return this.http.post<any>(this.apiUrl+"/entreprise",entreprise,httpOptions); 
  }
  registEmployee(candiat:Candidat){
    return this.http.post<any>(this.apiUrl+"/candidat", candiat, httpOptions);
  }
  postule(idc: number, id: number, cv: string) {
    const url = `${this.apiUrl}/candidatures/${idc}/${id}`;
    const body = JSON.stringify({ cv: cv });
    return this.http.post<any>(url, body, httpOptions);
  }
  getcan():Observable<Candidature[]>{
    console.log("yes")
    return this.http.get<Candidature[]>(this.apiUrl+"/candidatures");
    
  }
  getOffre(): Observable<Offre[]>{
    return this.http.get<Offre[]>(this.apiUrl + "/offre");
  }
  modifierOffre(id: number, offre: Offre): Observable<Offre> {
    const url = `${this.apiUrl}/offre/${id}`;
    return this.http.put<Entreprise>(url, offre, httpOptions);
  }
  
  findOffreById(id : number): Observable<Offre> {
    const url = `${this.apiUrl + "/offre"}/${id}`
    return this.http.get<Offre>(url,httpOptions)
  }
  findCandidatByID(id : number): Observable<Candidat> {
    const url = `${this.apiUrl + "/candidat"}/${id}`
    return this.http.get<Candidat>(url,httpOptions)
  }
  userDetails(){
    let token:any=localStorage.getItem('myToken');
    let decodeToken= this.helper.decodeToken(token);
     return decodeToken.data;
   }
  


  
  
 


}