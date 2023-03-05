import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  // input decorator tells angular that the property that i'm going to list out right here is going to be provied from the parent component, then name of the property
  @Input() pages: any = [];
}
