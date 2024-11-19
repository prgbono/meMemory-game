import { Card } from '@/types'

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export const initialCards = [
  { id: 1, image: '/src/assets/image1.png', flipped: false, matched: false },
  { id: 2, image: '/src/assets/image2.png', flipped: false, matched: false },
  { id: 3, image: '/src/assets/image3.png', flipped: false, matched: false },
  { id: 4, image: '/src/assets/image4.png', flipped: false, matched: false },
  { id: 5, image: '/src/assets/image5.png', flipped: false, matched: false },
  { id: 6, image: '/src/assets/image6.png', flipped: false, matched: false },
  { id: 7, image: '/src/assets/image7.png', flipped: false, matched: false },
  { id: 8, image: '/src/assets/image8.png', flipped: false, matched: false },
  { id: 9, image: '/src/assets/image9.png', flipped: false, matched: false }
]

export const shufflingCards = (cards: Card[]) => {
  return [...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .map((card, index) => {
      return {
        ...card,
        id: index
      }
    })
}
