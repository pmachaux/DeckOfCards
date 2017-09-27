import {Component, OnDestroy, OnInit} from '@angular/core';
import {Card} from "./models/card.model";
import {Subscription} from "rxjs/Subscription";
import {CardService} from "./services/card.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'Deck of Cards';
  remainingDeck: Card[] = [];
  dealtCards: Card[] = [];
  remainingDeckSubscription: Subscription;
  dealtCardsSubscription: Subscription;

  constructor(private _cardService: CardService) { }

  ngOnInit(): void {
    this.remainingDeckSubscription = this._cardService.getRemainingDeckStream().subscribe(x => this.remainingDeck = x);
    this.dealtCardsSubscription = this._cardService.getDealtCardsStream().subscribe(x => this.dealtCards = x);
  }

  ngOnDestroy(): void {
    this.remainingDeckSubscription.unsubscribe();
    this.dealtCardsSubscription.unsubscribe();
  }

  onDealOneCardClicked(): void {
    if (this.remainingDeck.length > 0) {
      const currentDeck = this.remainingDeck.slice();
      this.dealtCards.push(this._cardService.dealOneCard(currentDeck));
      this._cardService.setDealtCardsStream(currentDeck);
    }
  }

  onShuffleClicked(): void {
    this._cardService.shuffleDeck();
  }
}
