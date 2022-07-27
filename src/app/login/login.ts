export class User{

    constructor(public email:string,public password:string){}
    
}

export class Users{
constructor(public users:User[]){}
}