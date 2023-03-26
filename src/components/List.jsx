import Card from "./Card";
import '../style/Card.css';

function List() {
  const arr = [
    {
      name: "John Doe",
      job: "Engineer",
      hobby: "Listen to music",
    },
    {
      name: "John Doe",
      job: "Engineer",
      hobby: "Listen to music",
    },
    {
      name: "John Doe",
      job: "Engineer",
      hobby: "Listen to music",
    },
  ]

  const listOfCards = arr.map((el) => {
    return (
      <Card  user={el} />
    )
  })
  return (
    <div>{listOfCards}</div>
  )
}

export default List;