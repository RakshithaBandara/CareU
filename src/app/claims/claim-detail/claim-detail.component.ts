import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimEditComponent } from '../claim-list/claim-edit/claim-edit.component';

@Component({
  selector: 'app-claim-detail',
  standalone: true,
  imports: [
    CommonModule,
    ClaimEditComponent
  ],
  templateUrl: './claim-detail.component.html',
  styleUrl: './claim-detail.component.css'
})
export class ClaimDetailComponent {

}
