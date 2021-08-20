import { Component, OnInit } from '@angular/core';
import { Quote } from '../Quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
     new Quote (1,'Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.','STEVE JOBS',new Date(2020,3,14)),
     new Quote (2, 'keep on asking, and you will receive what you ask for. Keep on seeking, and you will find. Keep on knocking, and the door will be opened to you. For everyone who asks, receives. Everyone who seeks, finds. And to everyone who knocks, the door will be opened.','JESUS CHRIST',new Date(2021,4,20)),

  ];
  toggleDetails(index:any){
    this.quotes[index].showSubmitDate = !this.quotes[index].showSubmitDate;
  }
    
  quoteComplete(publishDate:any, index :any){
    if (publishDate) {
      this.quotes.splice(index,1);
    }
  }    
  deleteQuote(publishDate:any, index:any){
    if (publishDate) {
      let toDelete = confirm(`Are you sure you want to delete  the quote"${this.quotes[index].quote}" ~ ${this.quotes[index].author}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }


  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}


