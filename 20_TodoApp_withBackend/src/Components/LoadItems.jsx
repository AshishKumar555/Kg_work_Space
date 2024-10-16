import { useContext ,useState} from "react";
import { useEffect } from "react";
import todoContext from "../Store/TodoContext"
import { todoItemToClientModel } from "../utils/ModelUtil";




const LoadItems = () => {

    const {todoItems,addAllTodoItems}=useContext(todoContext)
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:3000/todos")
          .then((res) => res.json())
          .then((items) => {
            const newItems = items.map(todoItemToClientModel);
            addAllTodoItems(newItems);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);

  return (
    <div>
       
      {loading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!loading && todoItems.length === 0 && <p>Todo App is Empty</p>}
    
    </div>
  );
}

export default LoadItems;
