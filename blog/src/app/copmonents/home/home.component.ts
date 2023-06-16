import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataNow: string = new Date().toLocaleDateString()
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
