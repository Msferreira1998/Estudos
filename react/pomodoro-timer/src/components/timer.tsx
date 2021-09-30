import React from 'react';
import { SecondsToMinutes } from '../utils/seconds-to-minutes';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return <div className="timer">{SecondsToMinutes(props.mainTime)}</div>;
}
