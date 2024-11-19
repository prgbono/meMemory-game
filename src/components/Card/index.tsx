import { useDispatch, useSelector } from 'react-redux'

import { CardProps } from './Card.types'
import { RootState } from '@/store'

const Card: React.FC<CardProps> = ({ card }) => {
  const { id, image, flipped, matched } = card
  const { selectedCards } = useSelector((state: RootState) => state.game)
  const dispatch = useDispatch()

  const handleClickOnCard = () => {
  }

  return (
    <div
      className={`flex size-24 cursor-pointer items-center justify-center rounded-lg border ${
        selectedCards.includes(id) || card.matched
          ? 'bg-white'
          : 'bg-card-texture bg-center bg-no-repeat'
      }`}
      onClick={handleClickOnCard}
    >
      {selectedCards.includes(id) || matched ? (
        <img
          src={image}
          alt="card"
          className="size-full rounded-lg object-cover"
        />
      ) : (
        <div className="text-4xl font-bold text-gray-800">{Number(id) + 1}</div>
      )}
    </div>
  )
}

export default Card
