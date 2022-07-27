import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Uservideo, Uservideos } from './uservideo';
import { UservideosService } from '../uservideos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uservideos',
  templateUrl: './uservideos.component.html',
  styleUrls: ['./uservideos.component.scss']
})
export class UservideosComponent implements OnInit {
  uservideo?:Uservideo;
  alluservideos?:Uservideo[]=[];


  constructor(public sanitizer:DomSanitizer, public uservideosService:UservideosService,public router:Router) { }



  ngOnInit(): void {
    this.uservideosService.getUserVideos().subscribe((uservideos)=>{
      this.alluservideos=uservideos;
    })
  }


  
  transform(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);            
}

showVideoDetails(uservideo:Uservideo): void{
  
  this.router.navigate(["/details",uservideo.id]);


}


}
