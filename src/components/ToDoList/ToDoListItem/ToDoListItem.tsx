import classes from './ToDoListItem.module.scss';

export const ToDoListItem = () => {
    return (
        <li className={classes.item_wrapper}>
          <span>Первая задача</span>
          <div className={classes.item_buttons}>
            <button className={`${classes.buttons} ${classes.btn_check}`}></button>
            <button className={`${classes.buttons} ${classes.btn_trash}`}></button>
          </div>
        </li>
    )
}