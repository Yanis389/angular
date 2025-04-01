import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref } from "firebase/database";
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../interfaces/todo'; // Assurez-vous d'importer l'interface Todo depuis le bon chemin
import { push } from "firebase/database";
import { onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDAwRjNxRNGbU1nx73t93tZ0Y0QjTCeDwU",
  authDomain: "test-80824.firebaseapp.com",
  databaseURL: "https://test-80824-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-80824",
  storageBucket: "test-80824.firebasestorage.app",
  messagingSenderId: "717468217757",
  appId: "1:717468217757:web:dca8db950eb3f82e41ff74",
  measurementId: "G-0H96NEJR50"
};



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app = initializeApp(firebaseConfig);
  private db = getDatabase(this.app);
  private todoRef = ref(this.db, 'todos');
  private todoSubject = new BehaviorSubject<Todo[]>([]);

  todos$ = this.todoSubject.asObservable();


  constructor() { 
    this.listenToTodos();
  }

listenToTodos(): void {
    onValue(this.todoRef, (snapshot) => {
      const todos: Todo[] = [];
      snapshot.forEach((childSnapshot) => {
        todos.push({ id: childSnapshot.key!, ...childSnapshot.val() });
      });
      this.todoSubject.next(todos);
    });
}

addTodo(title: string): void {
    push(this.todoRef, {
      title: title,
      done: false,
      date: new Date().toISOString()
    });
  }
  getTodos(): void {
    this.todoSubject.subscribe(todos => {
      this.todoSubject.next(todos);
    });
  }



  
}
