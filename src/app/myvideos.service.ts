import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Myvideo, Myvideos } from './myvideos/myvideo';

@Injectable({
  providedIn: 'root'
})
export class MyvideosService {
  myvideos:BehaviorSubject<Myvideo[]>;
  myvideos$:Observable<Myvideo[]>;
 
  constructor(public httpClient:HttpClient) {
    this.myvideos=new BehaviorSubject<Myvideo[]>([]);
    this.myvideos$=this.myvideos.asObservable();

   }
  public addMyvideo(myvideos:Myvideos):void{
    this.httpClient.patch("https://fir-11e65-default-rtdb.firebaseio.com/myvideos.json",myvideos).subscribe();
    this.myvideos.next(myvideos.myvideos);
  }


  public getMyvideos():Observable<Myvideos>{
    return this.httpClient.get<Myvideos>("https://fir-11e65-default-rtdb.firebaseio.com/myvideos.json");
  }
  

}

