import { useDispatch } from 'react-redux'

  const dispatch = useDispatch()

  const handleStart = () => {
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 flex size-32 items-center justify-center rounded-full border-4 border-gray-300 bg-gray-200 shadow-lg">
        <img
          src="/assets/images/image01.png"
          alt="MeMemory Game"
          className="size-16 rounded-full object-cover"
        />
      </div>
      <h1 className="mb-16 text-5xl font-bold">
        MeMemory
      </h1>
      <button
        onClick={handleStart}
        className="rounded-full bg-red-500 px-8 py-3 text-white transition-all hover:bg-red-600"
      >
        Comenzar
      </button>
    </div>
  )
}

export default Home