import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent {
  item!: Item

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService,
    private location: Location
    ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    
    this.itemService.getItem(id).subscribe((item: Item) => {
      this.item = item
    })
    
  }

  back() {
    this.location.back()
  }
}
