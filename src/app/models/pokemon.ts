export class Pokemon {
  name: string;
  type: string;
  stats: Array<any>;
  moveUrls: Array<string>;
  moveName: Array<string>;
  spriteUrl: string;
  power: Array<number>;

  constructor(
    name: string,
    type: string,
    stats: Array<any>,
    moveUrls: Array<string>,
    moveName: Array<string>,
    spriteUrl: string,
    power: Array<number>
  ) {
    this.name = name;
    this.type = type;
    this.stats = stats;
    this.moveUrls = moveUrls;
    this.moveName = moveName;
    this.spriteUrl = spriteUrl;
    this.power = power;
  }
}
