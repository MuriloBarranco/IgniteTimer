import { CycleProps } from '../../dto/cycle'
import { ActionTypes } from './actions'

export type CyclesState = {
    cycles: CycleProps[]
    activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_CYCLE:
            return {
                ...state,
                cycles: [...state.cycles, action.payload.newCycle],
                activeCycleId: action.payload.newCycle.id,
            }
        case ActionTypes.INTERRUPT_CURRENT_CYCLE:
            return {
                ...state,
                cycles: state.cycles.map((cycles) => {
                    if (cycles.id === state.activeCycleId) {
                        return {
                            ...cycles,
                            interruptedDate: new Date(),
                        }
                    } else {
                        return cycles
                    }
                }),
                activeCycleId: null,
            }
        case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
            return {
                ...state,
                cycles: state.cycles.map((cycle) => {
                    if (cycle.id === state.activeCycleId) {
                        return { ...cycle, finishedDate: new Date() }
                    } else {
                        return cycle
                    }
                }),
                activeCycleId: null,
            }
        default:
            return state
    }
}
