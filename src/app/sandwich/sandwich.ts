export interface Sandwich {
  id: number,
  rating: number,
  image: string,
  title: string,
  description: string,
  stats: Object,
  calorie: number,
  ingredients: Array<any>
}
