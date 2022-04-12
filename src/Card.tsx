interface Props {
  gif: any;
}

const Card: React.FC<Props> = ({ gif }) => {
  return (
    <div>
      <img src={gif.images.fixed_height.url} alt={gif.title} />
      <p className="text-xs text-white break-words">{gif.title}</p>
    </div>
  )
}

export default Card
