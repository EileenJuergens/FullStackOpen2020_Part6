import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'


const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
  
    const anecdoteContent = event.target.anecdote.value
    event.target.anecdote.value = ''

    props.createAnecdote(anecdoteContent)
    props.setNotification(`you created '${anecdoteContent}'`, 5)
    setTimeout(() => {
      props.removeNotification()
    }, 5000)
  }

  return (
    <>
      <h2>Create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">add</button>
      </form>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
  }
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
  removeNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)
