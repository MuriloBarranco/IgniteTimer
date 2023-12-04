import {
  ComponentProps,
  ElementType,
  ReactNode,
  useImperativeHandle,
  useRef,
  forwardRef,
} from 'react'
import { InputContainer, InputControl, InputIcon } from './styles'

type RootProps = ComponentProps<'div'> & {
  children: ReactNode
}

function Root({ children, ...rest }: RootProps) {
  return <InputContainer {...rest}>{children}</InputContainer>
}

type ControlProps = ComponentProps<'input'>

const Control = forwardRef<HTMLInputElement, ControlProps>(
  ({ ...props }, outerRef) => {
    const innerRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(outerRef, () => innerRef.current!, [])

    return <InputControl {...props} ref={innerRef} />
  },
)
Control.displayName = 'Control'

type IconProps = ComponentProps<'span'> & {
  icon: ElementType
}

function Icon({ icon: Icon }: IconProps) {
  return (
    <InputIcon>
      <Icon />
    </InputIcon>
  )
}

type SuggestionsProps = ComponentProps<'datalist'>

function Suggestions({ children, ...rest }: SuggestionsProps) {
  return <datalist {...rest}>{children}</datalist>
}

type OptionProps = ComponentProps<'option'>

function Option(props: OptionProps) {
  return <option {...props} />
}

export { Root, Control, Icon, Suggestions, Option }
