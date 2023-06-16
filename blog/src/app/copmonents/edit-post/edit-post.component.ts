import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  item!: Item
  items: Item[] =[]
  editTitle: string = ''
  editInfo: string = ''
  editImage: string = ''
  

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService,
    private location: Location
    ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.itemService.getItem(id).subscribe((item: Item) => {
      this.item = item
      this.editTitle = `${item.title}`
      this.editInfo = `${item.info}`
      this.editImage = `${item.image}`
    })
    
  }

  editPost(id:string){
    const title = this.editTitle
    const info = this.editInfo
    const image = this.editImage
    this.itemService.updateItem(id,{title: title,info:info,image:image}).subscribe((item: Item) => {
      console.log('good');
      
    })
    
  }

  back() {
    this.location.back()
  }
}
