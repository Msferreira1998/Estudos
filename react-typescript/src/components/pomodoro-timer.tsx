import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCouting, setTimeCouting] = useState(false);
  const [working, setWoking] = useState(false);
  const [resting, setResting] = useState(false);

  function configureWork() {
    setTimeCouting(true);
    setWoking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
  }
  function configureRest(long: boolean) {
    setTimeCouting(true);
    setWoking(false);
    setResting(true);

    if (long) {
      setMainTime(props.longRestTime);
    } else {
      setMainTime(props.shortRestTime);
    }
  }

  useEffect(() => {
    if (working) {
      document.body.classList.add('working');
    }
    if (resting) {
      document.body.classList.remove('working');
    }
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCouting ? 1000 : null,
  );
  return (
    <div className="pomodoro">
      <h2>You are: {working ? 'Working' : 'Resting'}</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button
          text={mainTime !== props.pomodoroTime ? 'Restart' : 'Work'}
          onClick={() => {
            configureWork();
          }}
        />
        <Button
          text="Rest"
          onClick={() => {
            configureRest(false);
          }}
        />
        <Button
          className={!working && !resting ? 'hidden' : ''}
          text={timeCouting ? 'Pause' : 'Play'}
          onClick={() => {
            setTimeCouting(!timeCouting);
          }}
        />
      </div>
    </div>
  );
}
