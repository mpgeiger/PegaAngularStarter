import { Component, Input, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.scss']
// })
// export class CardComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

@Component({
  selector: 'app-card',
  template: `<div>Card: {{cardName}} {{cardIndex}} </div>`,
  styles: [`
  :host {
    display: block;
    padding: 32px;
    border: 1px solid black;
    border-radius: 8px;
  }
  `]
})
export class CardComponent {
 @Input() cardName: string;
 @Input() cardIndex: string;
//  @Input() foo : bigint
}
