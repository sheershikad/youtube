export class Uservideo{
    constructor(public email:string,
        public id:string,
        public videoSource:string,
        public title:string,
        public views:number,
        public date:string,
        public creator:string,
        public description:string,
        public commenter1:string,
        public comment1:string,
        public commenter2:string,
        public comment2:string){}
    
}

export class Uservideos{
    constructor(public uservideos:Uservideo[]){}
}
