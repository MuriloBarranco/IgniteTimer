import { useFormContext } from 'react-hook-form'
import { Minus, Plus } from 'phosphor-react'

import { useCycles } from '../../../../context/cycles'

import * as Input from '../../../../components/Input'
import { FormContainer, IconButton } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useCycles()
  const { register, setValue, watch } = useFormContext()

  const minutesAmountValue = watch('minutesAmount')

  function handleIncrement() {
    if (minutesAmountValue === 60) {
      return
    }

    setValue('minutesAmount', minutesAmountValue + 5)
  }
  function handleDecrement() {
    if (minutesAmountValue === 5) {
      return
    }

    setValue('minutesAmount', minutesAmountValue - 5)
  }

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <Input.Root style={{ flex: 1 }}>
        <Input.Control
          id="task"
          list="suggestions"
          placeholder="Dê um nome para o seu projeto"
          disabled={!!activeCycle}
          {...register('task')}
        />
      </Input.Root>

      <Input.Suggestions id="suggestions">
        <Input.Option value="Ignite Feed" />
        <Input.Option value="Todo dark" />
        <Input.Option value="to.do" />
        <Input.Option value="Ignite Timer" />
        <Input.Option value="ImHere" />
        <Input.Option value="Todo list" />
      </Input.Suggestions>

      <label htmlFor="minutesAmount">durante</label>
      <Input.Root style={{ width: '5rem' }}>
        <IconButton
          type="button"
          onClick={handleIncrement}
          disabled={!!activeCycle}
        >
          <Input.Icon icon={Plus} />
        </IconButton>
        <Input.Control
          id="minutesAmount"
          placeholder="00"
          type="number"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          style={{ textAlign: 'center' }}
          {...register('minutesAmount')}
        />
        <IconButton
          type="button"
          onClick={handleDecrement}
          disabled={!!activeCycle}
        >
          <Input.Icon icon={Minus} />
        </IconButton>
      </Input.Root>
      <label htmlFor="minutesAmount"> minutos.</label>
    </FormContainer>
  )
}
