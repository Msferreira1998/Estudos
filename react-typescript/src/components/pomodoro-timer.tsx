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

  function configureWork() {
    setTimeCouting(true);
    setWoking(true);
  }

  useEffect(() => {
    if (working) {
      document.body.classList.add('working');
    } else {
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
          text="Work"
          onClick={() => {
            configureWork();
          }}
        />
        <Button
          text={timeCouting ? 'Pause' : 'Play'}
          onClick={() => {
            setTimeCouting(!timeCouting);
            setWoking(!working);
          }}
        />
        <Button
          text="Restart"
          onClick={() => {
            setTimeCouting(false);
            setWoking(false);
            setMainTime(props.pomodoroTime);
          }}
        />
      </div>
    </div>
  );
}
