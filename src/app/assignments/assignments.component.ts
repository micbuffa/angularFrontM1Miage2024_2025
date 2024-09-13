import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenduDirective } from '../shared/rendu.directive';
import { NonRenduDirective } from '../shared/non-rendu.directive';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


import { Assignment } from './assignment.model';

import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective, NonRenduDirective,
    MatButtonModule,
    MatListModule, MatDividerModule,
    AssignmentDetailComponent, AddAssignmentComponent
  ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
  titre = "Liste des assignments";
  boutonDesactive = false;

  // Assignment sur lequel on a cliqué
  assignmentSelectionne!: Assignment;

  // Pour afficher ou non le formulaire ou la liste
  formVisible = false;

  assignments: Assignment[] = [
    {
      nom: "Devoir Angular de M.Buffa",
      dateDeRendu: new Date('2024-10-15'),
      rendu: false
    },
    {
      nom: "Devoir Big Data de M.Donati",
      dateDeRendu: new Date('2024-11-25'),
      rendu: false
    },
    {
      nom: "Fiche personnelle",
      dateDeRendu: new Date('2024-09-01'),
      rendu: true
    }
  ];

  constructor() {
    console.log("constructeur appelé")
  }

  ngOnInit() {
    console.log("ngOnInit appelé, après affichage");
    /*
    setTimeout(() => { 
      console.log("3 secondes plus tard");
      this.boutonDesactive = true;
    }, 3000);
    */

    /*
    setTimeout(() => {
      this.assignmentSelectionne.nom = 'TOTOTOTOTO';
    }, 3000);
  */
  }

  getColor(a: any) {
    if (a.rendu) return 'green';
    else return 'red';
  }

  testeClick(a: any) {
    console.log("click  sur : " + a.nom);
  }



  assignmentClique(a: Assignment) {
    console.log("Assignment cliqué : " + a.nom);
    this.assignmentSelectionne = a;
  }

  onAddAssignmentBtnClick() {
    console.log("Bouton Add Assignment cliqué");
    this.formVisible = true;
  }
}
