import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  editTitle: string = ''
  editInfo: string = ''
  editImage: string = ''
  newItem: Item = new Item("1","2","3", "4");
  dataNow: string = new Date().toLocaleTimeString()
  // new 
  
  addItem(): void {
    this.newItem = new Item(`${this.editTitle}`,`${this.editInfo}`,`${this.editImage}`, "");
    this.itemService.addNewItem(this.newItem).subscribe((addNewItem: Item) => {
      this.items.push(addNewItem);
      this.newItem = new Item("1", "2", "3", "4");
    });
  }

  items: Item[] =[]
  

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService,
    ) {}


  confirm(){
    console.log(this.editTitle);
    
  }
}
