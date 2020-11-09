import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  count:number = 0;
  @Input('product') product: any;
  // @Output('boughtProduct') bougthProduct = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
