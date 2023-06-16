import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
items: Item[] =[]

constructor(private itemsService: ItemsService){}

ngOnInit(){
  this.itemsService.getUsers().subscribe({
    next: (data: Item[]) => {
      this.items = data
    },
    error: (err)=> {console.log('fuck');
    }
  })
  
  
}
}
