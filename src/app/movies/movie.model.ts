
export class Movie {
  public name: string;
  public description: string;
  public imagePath: string;
  public date: string;
  public rating?: number;

  constructor(name: string, desc: string, imagePath: string, date: string, rating?: number) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.date = date;
    this.rating = rating
  }
}
