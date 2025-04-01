import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref } from "firebase/database";
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../interfaces/todo'; // Assurez-vous d'importer l'interface Todo depuis le bon chemin
import { push } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBTFUsYBH3BTMg0efzhrK-J96DOxDvuxfA",
  authDomain: "mytodo-8ae30.firebaseapp.com",
  databaseURL: "https://mytodo-8ae30-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mytodo-8ae30",
  storageBucket: "mytodo-8ae30.firebasestorage.app",
  messagingSenderId: "794725784750",
  appId: "1:794725784750:web:80e04ea4359909e246e13f",
  measurementId: "G-2HHTVCH6TB"
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


  constructor() { }

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
