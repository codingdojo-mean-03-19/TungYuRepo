export class Weather{
  constructor(
    public temp: number,
    public humidity: number,
    public temp_max : number,
    public temp_min : number,
    public description: string,
    public name : string) {}
}
