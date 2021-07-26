// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';

// import { Facts } from '../shared/facts.model'
// import { SeenListService } from './seen-list.service';

// @Component({
//   selector: 'app-seen-list',
//   templateUrl: './seen-list.component.html',
//   styleUrls: ['./seen-list.component.css']
// })
// export class SeenListComponent implements OnInit, OnDestroy {
//   facts: Facts[];
//   private tiChangeSub: Subscription;

//   constructor(private slService: SeenListService) { }

//   ngOnInit(): void {
//     this.facts = this.slService.getFacts();
//     this.tiChangeSub = this.slService.factsChanged
//       .subscribe(
//         (facts: Facts[]) => {
//           this.facts = facts;
//         }
//       )
//   }

//   onEditItem(index: number) {
//     this.slService.startedEditing.next(index);
//   }

//   ngOnDestroy(): void {
//     this.tiChangeSub.unsubscribe();
//   }
// }
