import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  items: Item[] =[]
  isDeleting: boolean = false
  deletedId!: string

  constructor(private itemsService: ItemsService, private router: Router, private route: ActivatedRoute){}

ngOnInit(){
  this.itemsService.getUsers().subscribe({
    next: (data: Item[]) => {
      this.items = data
    },
    error: (err)=> {console.log('fuck');
    }
  })
 }

 getItem(id: string): void {
  this.router.navigate(['admin/news-details', id])
  console.log(id);
  
}

editItem(id: string): void {
  this.router.navigate(['admin/edit-post', id])
  console.log(id);
  
}
deleteItem(id: string): void{
  this.isDeleting = true
  this.deletedId = id
  this.itemsService.deleteItem(id).subscribe(()=>{
    // alertify.success('Car deleted successfully')
    this.items = this.items.filter(item => item._id != id)
    this.isDeleting = false
    console.log(id);
  })
  
}
}
