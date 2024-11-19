import Card from '../Card'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

const GameBoard: React.FC = () => {
  const cards = useSelector((state: RootState) => state.game.cards)

  return (
    <div className="mx-auto my-4 grid w-full max-w-screen-xl grid-cols-6 gap-4 rounded-lg bg-white p-4 shadow-lg">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  )
}

export default GameBoard
