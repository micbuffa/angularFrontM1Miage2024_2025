import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent {
@Input() assignmentTransmis!: Assignment;

ngOnInit() {
  console.log("FILS : ngOnInit appelé, après affichage");
}

}
