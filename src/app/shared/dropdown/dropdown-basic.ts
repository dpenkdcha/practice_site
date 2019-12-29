// import { Directive, HostListener, HostBinding } from '@angular/core';

// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//   }
// }

//import {Component} from '@angular/core';

// @Component({
//   selector: 'ngbd-dropdown-basic',
//   templateUrl: './dropdown-basic.html'
// })
// export class NgbdDropdownBasic {

//   sortOrders: string[] = ["Year", "Title", "Author"];
//   selectedSortOrder: string = "Sort by...";
  
//   ChangeSortOrder(newSortOrder: string) { 
//     this.selectedSortOrder = newSortOrder;
//   }

// }

import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown-basic.html'
})
export class NgbdDropdownBasic {
}

