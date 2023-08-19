import './index.css'

const ChoiceImage = props => {
  const {item, selected} = props

  const {id, imageUrl} = item

  const onSelecting = () => {
    selected(id)
  }

  return (
    <li>
      <button
        className="Image-btn"
        onClick={onSelecting}
        data-testid={`${id.toLowerCase()}Button`}
        type="button"
      >
        <img className="image-item image-eff" src={imageUrl} alt={id} />
      </button>
    </li>
  )
}

export default ChoiceImage
