import '../src/style/style.css'
import { Header } from './components/header/header'
import { createTodoTable } from './components/table'
import { renderTodoLList } from './components/header/tasklist'
const app=document.getElementById('app');
app.append(Header());
const table=createTodoTable();
app.append(table);
console.log('create table');
renderTodoLList(table.querySelector('#todo-table-body'))
console.log('first table render');


