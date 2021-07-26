// import { Facts } from "../shared/facts.model";
// import { Subject } from "rxjs";

// export class SeenListService {
//   factsChanged = new Subject<Facts[]>();
//   startedEditing = new Subject<number>();
//   private facts: Facts[] = [
//     new Facts('Creepozoids', 'Horror Sci-fi', '1987'),
//     new Facts('The Killer Shrews', 'Sci-fi Horror', '1959'),
//     new Facts('Night of the Creeps', 'Horror Comedy', '1986')
//   ];

//   getFacts() {
//     return this.facts.slice();
//   }

//   getFact(index: number) {
//     return this.facts[index];
//   }

//     addFact(title: Facts) {
//       this.facts.push(title);
//       this.factsChanged.next(this.facts.slice());
//     }

//     addMovies(facts: Facts[]) {
//       this.facts.push(...facts);
//       this.factsChanged.next(this.facts.slice());
//     }

//     updateFacts(index: number, newTitle: Facts) {
//       this.facts[index] = newTitle;
//       this.factsChanged.next(this.facts.slice());
//     }
//     deleteFacts(index: number) {
//       this.facts.splice(index, 1);
//       this.factsChanged.next(this.facts.slice());
//     }
// }
