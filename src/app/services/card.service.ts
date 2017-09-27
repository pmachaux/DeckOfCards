import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Card} from "../models/card.model";
import {Observable} from "rxjs/Observable";
import {CARD_VALUES, SUITS} from "../app.const";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class CardService {

  private _remainingDeck: BehaviorSubject<Card[]>;
  private _dealtCards: BehaviorSubject<Card[]>;

  constructor() {
    this._remainingDeck = new BehaviorSubject(this.initializeDeck());
    this._dealtCards = new BehaviorSubject([]);
  }

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

  dealOneCard(currentDeck: Card[]): Card {
    return currentDeck.splice(0,1)[0];
  }

  setRemainingDeckStream(deck: Card[]): void {
    this._remainingDeck.next(deck);
  }
  setDealtCardsStream(deck: Card[]): void {
    this._dealtCards.next(deck);
  }

  private shuffleArray(deck: any[]): any[] { // Fisher-Yates shuffle
    const newDeck = deck.slice();
    for (let i = newDeck.length; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [newDeck[i - 1], newDeck[j]] = [newDeck[j], newDeck[i - 1]];
    }
    return newDeck;
  }

  shuffleAllDeckCards(): void {
    const shuffledDeck = this.shuffleArray(this.initializeDeck());
    this.setRemainingDeckStream(shuffledDeck);
    this.setDealtCardsStream([]);
  }

  shuffleRemainingDeckCards(deck: Card[]): void {
    const shuffledDeck = this.shuffleArray(deck);
    this.setRemainingDeckStream(shuffledDeck);
  }
}
