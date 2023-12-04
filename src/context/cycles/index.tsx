import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from 'react'
import { CycleProps } from '../../dto/cycle'
import {
  addNewCycle,
  interruptCurrentCycleAction,
  markCurrentCyclesAsFinishedAction,
} from '../../reducer/cycles/actions'
import { CyclesState, cyclesReducer } from '../../reducer/cycles/reducer'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextProps {
  cycles: CycleProps[]
  activeCycle: CycleProps | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  handleStopCountDown: () => void
}

interface CyclesProviderProps {
  children: React.ReactNode
}

const CyclesContext = createContext({} as CyclesContextProps)

function CyclesProvider({ children }: Readonly<CyclesProviderProps>) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const { cycles, activeCycleId } = cyclesState as CyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCyclesAsFinishedAction())
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: CycleProps = {
      id: crypto.randomUUID(),
      task: data.task,
      minutesAmount: data.minutesAmount,
      createdAt: new Date(),
    }

    dispatch(addNewCycle(newCycle))
    setAmountSecondsPassed(0)
  }

  function handleStopCountDown() {
    dispatch(interruptCurrentCycleAction())
  }

  const contextValue = useMemo(
    () => ({
      cycles,
      activeCycle,
      activeCycleId,
      amountSecondsPassed,
      markCurrentCycleAsFinished,
      setSecondsPassed,
      createNewCycle,
      handleStopCountDown,
    }),
    [cycles, activeCycle, activeCycleId, amountSecondsPassed],
  )

  return (
    <CyclesContext.Provider value={contextValue}>
      {children}
    </CyclesContext.Provider>
  )
}

function useCycles() {
  const context = useContext(CyclesContext)

  if (!context) {
    throw new Error('useCycles must be used within a LanguageProvider')
  }
  return context
}

export { CyclesProvider, useCycles }
