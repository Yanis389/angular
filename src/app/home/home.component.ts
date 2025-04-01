import { Component } from '@angular/core';
import { Todo } from '../interfaces/todo'; // Importation de l'interface Todo
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  todos: Array<Todo> = [
    {
      title: 'Faire les courses',
      done: false,
      date: new Date()
    },
    {
      title: 'Faire la vaisselle',
      done: true,
      date: new Date()
    },
    {
      title: 'Faire le ménage',
      done: false,
      date: new Date()
    }
  ];
  

  newTodo: any = {
    title: '',
    done: false,
    date: new Date()
  }; // Objet pour stocker la nouvelle tâche



  OnChangeStatus(task: any): void { // Méthode pour changer le statut d'une tâche
    task.done = !task.done; // Inverse la valeur de done
  }

  OnRemoveTask(i: number): void {
    this.todos.splice(i, 1); // Supprime la tâche à l'index i
  }

  OnAddTask(): void 
  { // Méthode pour ajouter une nouvelle tâche
    if(this.newTodo.title != '') { // Vérifie si le titre de la tâche n'est pas vide
      this.todos.push(this.newTodo); // Ajoute la nouvelle tâche à la liste
      this.newTodo = { title: '', done: false, date: new Date() }; // Réinitialise le formulaire
    }

  }

}