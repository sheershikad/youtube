import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MyvideosService } from '../myvideos.service';
import { Myvideo, Myvideos } from './myvideo';

@Component({
  selector: 'app-myvideos',
  templateUrl: './myvideos.component.html',
  styleUrls: ['./myvideos.component.scss']
})
export class MyvideosComponent implements OnInit {
  @Input() myvideo?:Myvideo;
  myvideos?:Myvideo[]=[];
  

  constructor(public sanitizer:DomSanitizer, private myvideosService:MyvideosService) { 

  }
  

  // ngOnInit(): void {
  //   this.myvideosService.myvideos$.subscribe((myvideos:Myvideo[]) =>{
  //    this.myvideos=myvideos;
  //   });

    ngOnInit(): void {
      this.myvideosService.getMyvideos().subscribe((myvideos:Myvideos)=>{
        this.myvideos=myvideos.myvideos;
      });
    }

    transform(url:string){
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);            
    }
  
  }

  
