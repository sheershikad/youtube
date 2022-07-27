import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './login/login';

@Injectable({
  providedIn: 'root'
})
export class MailsService {
  users: BehaviorSubject<User[]>;
  users$: Observable<User[]>;

  constructor(private httpClient:HttpClient) {
    this.users= new BehaviorSubject<User[]>([]);
    this.users$= this.users.asObservable();
  }

  public getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>("https://fir-11e65-default-rtdb.firebaseio.com/users.json");
  }

}
