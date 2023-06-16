import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  dataNow: string = new Date().toLocaleDateString()
  items: Item[] =[]


  constructor(private itemsService: ItemsService,
    private router: Router,
    private route: ActivatedRoute
    ){}

ngOnInit(){
  this.itemsService.getUsers().subscribe({
    next: (data: Item[]) => {
      this.items = data
    },
    error: (err)=> {console.log('fuck');
    }
  }) 
}

// showDetail(id: string){
//   // this.router.navigate(['auth/car-details', id])
//   alert('hello')
// }
// showDetail(){
//   console.log(this.items);
  
// }

// showDetail(): void {
//   const id = this.route.snapshot.paramMap.get('id');
//   // this.getItem(id);
//   console.log(id);
  
// }

getItem(id: string): void {
  this.router.navigate(['news-detail', id])
  console.log(id);
  
}

}
