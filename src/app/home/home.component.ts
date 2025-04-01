import { Component, ɵisBoundToModule } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  newTodoTitle: string = '';
  todos$ = this.firebaseService.todos$;


  constructor(private firebaseService: FirebaseService) { 

  }

  OnChangeStatus(task: any): void { 
  }

  OnRemoveTask(i: number): void {

  }

  OnAddTask(): void 
  { 
    if (this.newTodoTitle.trim() !== '') 
    {
      this.firebaseService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
    }

  }

}