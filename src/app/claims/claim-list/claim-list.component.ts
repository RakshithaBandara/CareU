import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimItemComponent } from './claim-item/claim-item.component';
import { ClaimEditComponent } from './claim-edit/claim-edit.component';
import { Claim } from '../claim.model';

@Component({
  selector: 'app-claim-list',
  standalone: true,
  imports: [
    CommonModule,
    ClaimItemComponent,
    ClaimEditComponent,
  ],
  templateUrl: './claim-list.component.html',
  styleUrl: './claim-list.component.css'
})
export class ClaimListComponent implements OnInit{
  @Output() claimWasSelected = new EventEmitter<Claim>();
  claims: Claim[] = [
    new Claim('Claim 1', 'Test Policy No', '1980/10/10' , '2023/10/10','Test cause', 100000,'https://media.istockphoto.com/id/1290693328/photo/family-care-concept-hands-with-paper-silhouette-on-table.jpg?s=2048x2048&w=is&k=20&c=webQVwN3y-We89oIBLBEamAfmvDno554p0huIpn-Arg='),
    new Claim('Claim 2', 'Test Policy No', '1980/10/10' , '2023/10/10','Test cause', 100000,'https://media.istockphoto.com/id/1290693328/photo/family-care-concept-hands-with-paper-silhouette-on-table.jpg?s=2048x2048&w=is&k=20&c=webQVwN3y-We89oIBLBEamAfmvDno554p0huIpn-Arg=')
  ];

  ngOnInit(){
  }

  onClaimSelected(claim: Claim){
    this.claimWasSelected.emit(claim);
  }    
}
