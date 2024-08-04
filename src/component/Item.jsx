function Item (props) {
    return(
        <div className="list">
            <input type="checkbox"
            value={props.todo.complited}></input>
            <h5>{props.todo.title}</h5>
            <button className="buttonDelete" onClick={()=>props.delete(props.todo.id)}>Delete</button>
        </div>
    )
}

export default Item