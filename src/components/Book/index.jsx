function Book(props){
    return(
      <div>
        <h2>{props.name}</h2>
        <p>{props.price}</p>
        <p>{props.date}</p>
      </div>
    )
  }

  export default Book