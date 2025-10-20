import List from './ToDoList.module.scss';
import { ToDoListItem } from "./ToDoListItem/ToDoListItem";

export const ToDoList = () => {
  return (
    <div className={List.todo_container}>
      <ul className={`${List.todo_list} ${List.failed}`}>
        <ToDoListItem />
      </ul>
      <ul className={`${List.todo_list} ${List.completed}`}>
      <ToDoListItem />
      </ul>
    </div>
  );
};
