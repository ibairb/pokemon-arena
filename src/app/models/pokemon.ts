export class Pokemon {
  name: string;
  type: string;
  stats:Array<any>;
  spriteUrl: string;

  constructor(
    name: string,
    type: string,
    stats:Array<any>,
    spriteUrl: string
  ) {
    this.name = name;
    this.type = type;
    this.stats = stats
    this.spriteUrl = spriteUrl;
  }
}
