export class Login{
   _id:string
   email:string
   password:string

   constructor(_id:string, email:string, password:string){
      this._id= _id
      this.email= email
      this.password = password
   }
}