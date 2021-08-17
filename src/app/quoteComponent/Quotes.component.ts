import { Component, OnInit } from "@angular/core";
import { QuoteService, QuoteModel } from "../quoteService/quote.service";

@Component({
  selector: "app-Quotes",
  templateUrl: "./Quotes.component.html",
  styleUrls: ["./Quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  public quoteList!: QuoteModel[];
  public fetchedList!: QuoteModel[];
  public quoteText = '';

  constructor(private service: QuoteService) {}

  ngOnInit() {
    this.quoteList = this.service.getQuote();
    this.service.fetchQuotesFromServer().then((data: any) => {
      this.fetchedList = data;
    });
  }

  createNewQuote() {
    this.service.addNewQuote(this.quoteText);
    this.quoteText = '';
  }

  removeQuote(index: number) {
    this.service.removeQuote(index);
  }
}