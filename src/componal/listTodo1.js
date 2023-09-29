import ItTodo from "./ItTodo";

function ListTodo1(props){
    let data = props.listTodo.map((item, index)=>(
        <ItTodo
            item={item}
            updateTodo={props.updateTodo} 
            handlerDelete={props.handlerDelete}
            key = {index}
            index={index}
            nameTodo={item.todoName}
        />
    ))
    return(
        <div className="listTodo">{data}</div>
    )
}

export default ListTodo1;