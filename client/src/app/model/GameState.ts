import { Player } from './Player';
import { Card } from './Card';
import { Hand } from './Hand';

export class GameState {

    playerOne: Player;
    playerTwo: Player;
    cards: Card[];

    constructor(playerOne: Player, playerTwo: Player, cards: Card[]) {
            this.playerOne = playerOne;
            this.playerTwo = playerTwo;
            this.cards = cards;
    }

    static getDummyGameState(): GameState {
      const playerOne: Player = new Player(new Hand(), '');
      const playerTwo: Player = new Player(new Hand(), '');
      const cards: Card[] = [];
      return new GameState(playerOne, playerTwo, cards);
    }

  getRealCardFromJson(cardFromJson: Card): Card {
    let realCard: Card = this.playerOne.half.cards.filter(x => cardFromJson.id === x.id)[0];
    if (realCard) { return realCard; }
    realCard = this.playerOne.hand.cards.filter(x => cardFromJson.id === x.id)[0];
    if (realCard) { return realCard; }
    realCard = this.playerOne.deck.filter(x => cardFromJson.id === x.id)[0];
    if (realCard) { return realCard; }
    realCard = this.playerTwo.half.cards.filter(x => cardFromJson.id === x.id)[0];
    if (realCard) { return realCard; }
    realCard = this.playerTwo.deck.filter(x => cardFromJson.id === x.id)[0];
    if (realCard) { return realCard; }
    realCard = this.playerTwo.hand.cards.filter(x => cardFromJson.id === x.id)[0];
    return realCard;
  }

  getRealPlayerFromJson(playerFromJson: Player): Player {
    if (this.playerOne.name === playerFromJson.name) {
      return this.playerOne;
    } else {
      return this.playerTwo;
    }
  }

}
