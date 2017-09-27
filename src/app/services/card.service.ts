import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Card} from "../models/card.model";
import {Observable} from "rxjs/Observable";
import {CARD_VALUES, SUITS} from "../app.const";

@Injectable()
export class CardService {

  private _remainingDeck: Subject<Card[]> = new Subject();
  private _dealtCards: Subject<Card[]> = new Subject();

  constructor() { }

  getRemainingDeckStream(): Observable<Card[]> {
    return this._remainingDeck;
  }

  getDealtCardsStream(): Observable<Card[]> {
    return this._dealtCards;
  }

  initializeDeck(): Card[] {
    let deck: Card[] = [];
    SUITS.forEach(suit => {
      CARD_VALUES.forEach(value => {
        deck.push(new Card(suit, value));
      });
    });
    return deck;
  }

  setRemainingDeckStream(deck: Card[]): void {
    this._remainingDeck.next(deck);
  }
  setDealtCardsStream(deck: Card[]): void {
    this._dealtCards.next(deck);
  }

}
