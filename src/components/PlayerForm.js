import React from 'react'
import styled from 'styled-components/macro'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add player:
        <br />
        <Input name="player" placeholder="Player name" />
      </label>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onAddPlayer(name)
    form.reset()
    input.focus()
  }
}

const Input = styled.input`
  border: 2px solid #bbb;
  width: 100%;
`
