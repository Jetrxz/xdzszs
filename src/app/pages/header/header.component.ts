import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem: number = 0;
  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.cartService.itemsCount.subscribe(count => {
      this.totalItem = count;
    });
  }
}
