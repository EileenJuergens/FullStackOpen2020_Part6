import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const newState = counterReducer(undefined, { type: 'DO_NOTHING' })
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const state = initialState
    deepFreeze(state)

    const newState = counterReducer(state, { type: 'GOOD' })
    expect(newState).toEqual({ good: 1, ok: 0, bad: 0 })
  })

  test('neutral is incremented', () => {
    const state = initialState
    deepFreeze(state)

    const newState = counterReducer(state, { type: 'OK' })
    expect(newState).toEqual({ good: 0, ok: 1, bad: 0 })
  })

  test('bad is incremented', () => {
    const state = initialState
    deepFreeze(state)

    const newState = counterReducer(state, { type: 'BAD' })
    expect(newState).toEqual({ good: 0, ok: 0, bad: 1 })
  })

  test('reset with zero', () => {
    const state = initialState
    deepFreeze(state)

    const newState1 = counterReducer(state, { type: 'GOOD' })
    expect(newState1).toEqual({ good: 1, ok: 0, bad: 0 })

    const newState2 = counterReducer(newState1, { type: 'OK' })
    expect(newState2).toEqual({ good: 1, ok: 1, bad: 0 })
    
    const newState3 = counterReducer(newState2, { type: 'OK' })
    expect(newState3).toEqual({ good: 1, ok: 2, bad: 0 })
    
    const newState4 = counterReducer(newState3, { type: 'BAD' })
    expect(newState4).toEqual({ good: 1, ok: 2, bad: 1 })

    const newState5 = counterReducer(newState4, { type: 'ZERO' })
    expect(newState5).toEqual({ good: 0, ok: 0, bad: 0 })
    
  })
})
