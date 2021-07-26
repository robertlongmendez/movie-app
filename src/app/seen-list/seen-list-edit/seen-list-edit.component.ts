// import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Subscription } from 'rxjs';

// import { Facts } from 'src/app/shared/facts.model';
// import { SeenListService } from '../seen-list.service';

// @Component({
//   selector: 'app-seen-list-edit',
//   templateUrl: './seen-list-edit.component.html',
//   styleUrls: ['./seen-list-edit.component.css']
// })
// export class SeenListEditComponent implements OnInit {
//   @ViewChild('f') slForm: NgForm;
//   subscription: Subscription;
//   editMode = false;
//   editedItemIndex: number;
//   editedItem: Facts;


//   constructor(private slService: SeenListService) { }

//   ngOnInit() {
//     this.subscription = this.slService.startedEditing
//     .subscribe(
//     (index: number) => {
//       this.editedItemIndex = index;
//       this.editMode = true;
//       this.editedItem = this.slService.getFact(index);
//       this.slForm.setValue({
//         name: this.editedItem.name,
//         genre: this.editedItem.genre,
//         filmYear: this.editedItem.filmYear
//       })
//     }
//     );
//   }

//   onSubmit(form: NgForm) {
//     const value = form.value
//     const newFacts = new Facts(value.name, value.genre, value.filmYear);
//     if (this.editMode) {
//       this.slService.updateFacts(this.editedItemIndex, newFacts);
//     } else {
//       this.slService.addFact(newFacts);
//       }
//       this.editMode = false;
//       form.reset();
//   }

//   onClear() {
//     this.slForm.reset();
//     this.editMode = false;
//   }

//   onDelete() {
//     this.slService.deleteFacts(this.editedItemIndex);
//     this.onClear();

//   }

//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }

// }
