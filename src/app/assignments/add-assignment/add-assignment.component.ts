import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';


import { FormsModule } from '@angular/forms';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule,
    FormsModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css',
  providers: [provideNativeDateAdapter()],
})
export class AddAssignmentComponent {
  // Champs du formulaire
  nomDevoir = '';
  dateDeRendu = null;


  onSubmit(event: any) {
    if (this.nomDevoir === '' || this.dateDeRendu === null) return;

    console.log("Nom du devoir : " + this.nomDevoir);
    console.log("Date de rendu du devoir : " + this.dateDeRendu);

    const nouvelAssignment = new Assignment();
    nouvelAssignment.nom = this.nomDevoir;
    nouvelAssignment.dateDeRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false;

    // on le rajoute au tableau
    //this.assignments.push(nouvelAssignment);

  }
}
