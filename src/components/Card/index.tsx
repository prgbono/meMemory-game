import { checkMatch, flipCard } from '@/store/slices/gameSlice'
import { useDispatch, useSelector } from 'react-redux'

import { CardProps } from './Card.types'
import { DELAY_FOR_MATCHING_IN_MILISECONDS } from '@/utils/constants'
import { RootState } from '@/store'

const Card: React.FC<CardProps> = ({ card }) => {
  const { id, image, flipped, matched } = card
  const { selectedCards } = useSelector((state: RootState) => state.game)
  const dispatch = useDispatch()

  const handleClickOnCard = () => {
    if (!flipped && !matched) {
      dispatch(flipCard(id))
      if (selectedCards.length + 1 === 2) {
        setTimeout(() => {
          dispatch(checkMatch())
        }, DELAY_FOR_MATCHING_IN_MILISECONDS)
      }
    }
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
