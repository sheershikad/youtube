export class Myvideo{
        constructor(
        public email:string,
        public id:string,
        public videoSource:string,
        public title:string,
        public views:number,
        public date:string,
        public description:string){}
}

export class Myvideos{
    constructor(public myvideos:Myvideo[]){}
}
