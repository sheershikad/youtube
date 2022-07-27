import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { MyvideosService } from '../myvideos.service';
import { Myvideo, Myvideos } from '../myvideos/myvideo';

@Component({
  selector: 'app-add-myvideos',
  templateUrl: './add-myvideos.component.html',
  styleUrls: ['./add-myvideos.component.scss']
})
export class AddMyvideosComponent implements OnInit {
  addMyVideoFormGroup!:FormGroup;
  

  constructor(private fb: FormBuilder,private myvideosService:MyvideosService,public loginservice:LoginService) { }

  ngOnInit(): void {
    this.addMyVideoFormGroup=this.fb.group({
      myvideos:this.fb.array([]),
    });
  }
  get myvideos():FormArray{
    return (this.addMyVideoFormGroup.get('myvideos')) as FormArray;
  }
  addMyVideo():void{
    this.myvideos.push(new FormGroup({
    email:new FormControl('',[Validators.required]),
    id:new FormControl('',[Validators.required]),
    videoSource:new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required]),
    views:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),

    }));
  }

  saveMyVideo():void{
    const myvideos:Myvideo[]=[];
    if(this.addMyVideoFormGroup?.value){

      for(let myvideo of this.addMyVideoFormGroup.value.myvideos){
        this.myvideos.push(new Myvideo(myvideo.email,myvideo.id,myvideo.videoSource,myvideo.title,myvideo.views,myvideo.date,myvideo.description) )
      }
      this.myvideosService.addMyvideo(new Myvideos(myvideos));
  }
  }
}
