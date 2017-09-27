import { TestBed, inject } from '@angular/core/testing';

import { CardService } from './card.service';
import {CARD_VALUE_ACE, SUIT_CLUB, SUIT_DIAMOND, SUIT_HEART, SUIT_SPADE} from "../app.const";

describe('CardService', () => {
  let cardService: CardService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardService]
    });
    cardService = new CardService();
  });


  describe('deck initialization', () => {
    it('should create a deck with 52 elements in it', () => {
      const deck = cardService.initializeDeck();
      expect(deck.length).toBe(52);
    });
    it('should contain 13 heart cards', () => {
      const deck = cardService.initializeDeck();
      const heartDeck = deck.filter(card => card.suit === SUIT_HEART);
      expect(heartDeck.length).toBe(13);
    });
    it('should contain 13 different values in heart suit', () => {
      const deck = cardService.initializeDeck();
      const heartDeck = deck.filter(card => card.suit === SUIT_HEART);
      expect(heartDeck[0].value).toBe(CARD_VALUE_ACE);
      for(let i = 2; i < 11; i++) {
        expect(heartDeck[i-1].value).toBe(i.toString());
      }
    });
    it('should contain 13 spade cards', () => {
      const deck = cardService.initializeDeck();
      const spadeDeck = deck.filter(card => card.suit === SUIT_SPADE);
      expect(spadeDeck.length).toBe(13);
    });
    it('should contain 13 different values in suit spade', () => {
      const deck = cardService.initializeDeck();
      const spadeDeck = deck.filter(card => card.suit === SUIT_SPADE);
      expect(spadeDeck[0].value).toBe(CARD_VALUE_ACE);
      for(let i = 2; i < 11; i++) {
        expect(spadeDeck[i-1].value).toBe(i.toString());
      }
    });
    it('should contain 13 club cards', () => {
      const deck = cardService.initializeDeck();
      const clubDeck = deck.filter(card => card.suit === SUIT_CLUB);
      expect(clubDeck.length).toBe(13);
    });
    it('should contain 13 different values in club suit', () => {
      const deck = cardService.initializeDeck();
      const clubDeck = deck.filter(card => card.suit === SUIT_CLUB);
      expect(clubDeck[0].value).toBe(CARD_VALUE_ACE);
      for(let i = 2; i < 11; i++) {
        expect(clubDeck[i-1].value).toBe(i.toString());
      }
    });
    it('should contain 13 diamond cards', () => {
      const deck = cardService.initializeDeck();
      const diamondDeck = deck.filter(card => card.suit === SUIT_DIAMOND);
      expect(diamondDeck.length).toBe(13);
    });
    it('should contain 13 different values in diamond suit', () => {
      const deck = cardService.initializeDeck();
      const diamondDeck = deck.filter(card => card.suit === SUIT_DIAMOND);
      expect(diamondDeck[0].value).toBe(CARD_VALUE_ACE);
      for(let i = 2; i < 11; i++) {
        expect(diamondDeck[i-1].value).toBe(i.toString());
      }
    });
  });
});
