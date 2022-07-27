import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Uservideo, Uservideos } from './uservideos/uservideo';

@Injectable({
  providedIn: 'root'
})
export class UservideosService {

  constructor(private httpClient:HttpClient) { }

  public getUserVideos():Observable<Uservideo[]>{
    return this.httpClient.get<Uservideo[]>("https://fir-11e65-default-rtdb.firebaseio.com/uservideos.json");
  }

}
