import Button from './Button'
import styled from 'styled-components/macro'

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <Playersection>
      {name}
      <Playerscore>
        <Button onClick={onMinus}>-</Button>
        <Score score>{score}</Score>
        <Button onClick={onPlus}>+</Button>
      </Playerscore>
    </Playersection>
  )
}

const Playersection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Playerscore = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`

const Score = styled.span`
  color: hsl(${props => props.score * 5}, 70%, 60%);
`
