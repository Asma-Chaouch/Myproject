import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Candidature } from '../Model/Candidature.Model';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-postule-offre',
  templateUrl: './postule-offre.component.html',
  styleUrls: ['./postule-offre.component.css']
})
export class PostuleOffreComponent {
  posule= new Candidature()
  id : number;
  idc: number;
  constructor( private service : CrudService ,private router: Router,private activatedRoute: ActivatedRoute , private toast : NgToastService) { }
 /* onpostule(){
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.idc=this.ActivatedRoute.snapshot.params['idc'];
    console.log(this.idc)
    console.log(this.id)
    this.service.postule(this.idc , this.id).subscribe(post =>{
      this.router.navigate(['/']).then(() => {
      window.location.reload() })  })}
}*/
pdf: any;
cv: any
recuperPhoto(fileInput: any) {
  this.cv = fileInput.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(this.cv);
  fileReader.onload = (e: any) => {
    console.log('fileReader.result');
    this.cv = fileReader.result;
    this.posule.cv=this.cv;
    console.log(this.posule.cv)
  };

}
onpostule() {
  this.id = this.activatedRoute.snapshot.params['id'];
  this.idc = this.activatedRoute.snapshot.params['idc'];
  console.log(this.idc);
  console.log(this.id);
  this.service.postule(this.idc, this.id, this.posule.cv).subscribe(
    response => {
      this.toast.success({
        detail: 'Succes Message',
        summary: "Candidature envoyée",
      })
      this.router.navigate(['/']);
    },
    
  );
    }
  }
