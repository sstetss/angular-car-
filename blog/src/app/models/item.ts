export class Item {
    _id: string
   title: string
   info: string
   image: string

   constructor(title: string, info: string, image: string, _id: string) {
       this.title = title
       this.info = info
       this.image = image
       this._id = _id
   }
}