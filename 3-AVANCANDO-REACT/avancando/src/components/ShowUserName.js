

const ShowUserName = (props) => {
  return (
    <div>
        {/*props.name pois estamos pegando oq foi atribuido na classe app.js */}
        <h2>O nome do usuario é: {props.name}</h2>
    </div>
  )
}

export default ShowUserName