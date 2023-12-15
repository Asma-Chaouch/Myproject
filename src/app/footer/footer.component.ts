import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public service:CrudService,private router:Router,){}//public 5ater chya9ra login men ts e5er
  isConnectedCandidat=false
  isConnectedEntreprise=false
  
  ngOnInit(): void {
    
 
    this.service.candidatConnect.subscribe(()=>{
     
      
      this.testLogin()
     
    })
    this.testLogin()
   
  }
  offres()
  {
    this.router.navigate(['/offre'])
  }
  deconnexion()
  {
    this.service.loginout()
  }
  testLogin()
  {
    
    if(Number(localStorage.getItem("identreprise")))
    { 
      this.isConnectedEntreprise=true
    }else{
       
      this.isConnectedEntreprise=false
      
    }
    if(Number(localStorage.getItem("idcandidat")))
    {
      
      this.isConnectedCandidat=true
      
    }else{
       
      this.isConnectedCandidat=false
      
    }
    
  }

}
