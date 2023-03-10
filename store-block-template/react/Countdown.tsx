import React, { useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick } from './utils/time'

interface CountdownProps {
  targetDate: string,
  otroTitulo: string,
}

//const DEFAULT_TARGET_DATE = getTwoDaysFromNow()

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate, otroTitulo }) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  tick(targetDate, setTime);

  return (
    <div>
      <h1> Otro título: { otroTitulo }</h1>
      <h1>{ targetDate }</h1>
      <h1>{ timeRemaining.toString }</h1>
      <h1>{ `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }</h1>
    </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Final date',
      description: 'Final date used in the countdown',
      type: 'string',
      default: null,
    },
    otroTitulo: {
      title: 'otro título',
      description: 'La descripción del otro título',
      type: 'string',
      default: null,
    }
  },
}

export default Countdown
