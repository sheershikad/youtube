import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-youtubenav',
  templateUrl: './youtubenav.component.html',
  styleUrls: ['./youtubenav.component.scss']
})
export class YoutubenavComponent implements OnInit {


  constructor( ) { }
  username:string="sheershika123@gmail.com";

  ngOnInit(): void {
  }

}























// import { Component, OnInit } from '@angular/core';
// import { LoginService } from '../login.service';
// import { User } from '../login/login';

// @Component({
//   selector: 'app-youtubenav',
//   templateUrl: './youtubenav.component.html',
//   styleUrls: ['./youtubenav.component.scss']
// })
// export class YoutubenavComponent implements OnInit {
//   users?:User[];
//   constructor(public loginService:LoginService) { 
//   }
//   ngOnInit(): void {
//     this.loginService['users'].subscribe((users:User[]) =>{
//      this.users=users;
//     });
//   }
// }











