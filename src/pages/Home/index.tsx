import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'

import { Button, HomeContainer } from './styles'
import { useCycles } from '../../context/cycles'
import { NewCycleForm } from './components/NewCycleForm'
import { CountDown } from './components/CountDown'

const newCycleFormValidation = zod.object({
  task: zod
    .string()
    .min(3, 'O nome do projeto deve ter no mínimo 3 caracteres'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type FormDataProps = zod.infer<typeof newCycleFormValidation>

export function Home() {
  const { activeCycle, createNewCycle, handleStopCountDown } = useCycles()

  const newCycleForm = useForm<FormDataProps>({
    defaultValues: {
      task: '',
      minutesAmount: 5,
    },
    resolver: zodResolver(newCycleFormValidation),
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: FormDataProps) {
    createNewCycle(data)

    reset()
  }

  return (
    <HomeContainer>
      <form id="timer" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
      </form>

      <CountDown />

      {activeCycle ? (
        <Button type="button" isStop onClick={handleStopCountDown}>
          <HandPalm size={24} />
          <span>Interromper</span>
        </Button>
      ) : (
        <Button type="submit" disabled={isSubmitDisabled} form="timer">
          <Play size={24} />
          <span>Começar</span>
        </Button>
      )}
    </HomeContainer>
  )
}
