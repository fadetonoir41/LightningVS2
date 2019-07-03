import { LightningElement } from 'lwc';

export default class TodoApp extends LightningElement {
    const myTodo = this.template.querySelector('c-todo-item');
    myTodo.itemName // New Item
}