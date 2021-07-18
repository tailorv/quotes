import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-made',
  templateUrl: './quote-made.component.html',
  styleUrls: ['./quote-made.component.css']
})
export class QuoteMadeComponent implements OnInit {

  @Input() quotes:Quote[];
  @Output() uppoll= new EventEmitter<boolean>();
  @Output() dislike = new EventEmitter<boolean>();

  up(upvoting:boolean){
    this.uppoll.emit(upvoting);
  }
  down(downvoting:boolean){
    this.uppoll.emit(downvoting);
  }

    constructor() { }

    ngOnInit() {
    }
}
