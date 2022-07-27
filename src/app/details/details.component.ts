import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { UservideosService } from '../uservideos.service';
import { Uservideo } from '../uservideos/uservideo';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id?:string;
  uservideo?: Uservideo;

  constructor(private activatedroute:ActivatedRoute,public uservideosService:UservideosService,
    public sanitizer:DomSanitizer) { }

  

  ngOnInit(): void
   {
    this.activatedroute.params.subscribe((params:Params) => {this.id=params?.["id"]});
    this.uservideosService.getUserVideos().subscribe((uservideos:Uservideo[]) => {
      if(this.id){
        this.uservideo = uservideos.filter((uservideo:Uservideo) => uservideo.id === this.id)?.[0];
      }
    });
  }

  transform(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);            
}

}
