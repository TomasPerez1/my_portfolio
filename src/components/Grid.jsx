import "./Grid.css"

export default function Grid() {
  const boxes = [1,2,3,4,5,6]
  return (
    <div className="container">
      {boxes.map(b => <div className="box">{b}</div>)}
    </div>
  )
}