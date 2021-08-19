/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { useEffect, useCallback } from 'react';
import { useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { SecondsToTime } from '../utils/seconds-to-time';
import { Button } from './button';
import { Timer } from './timer';
const bellStart = require('../sounds/bell-start.mp3');
const bellFinish = require('../sounds/bell-finish.mp3');

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

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
  const [cyclesQtd, setCyclesQtd] = useState(
    new Array(props.cycles).fill(true),
  );

  const configureWork = useCallback(() => {
    setTimeCouting(true);
    setWoking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    audioStartWorking.play();
  }, [setTimeCouting, setWoking, setResting, setMainTime, props.pomodoroTime]);
  const configureRest = useCallback(
    (long: boolean) => {
      setTimeCouting(true);
      setWoking(false);
      setResting(true);

      if (long) {
        setMainTime(props.longRestTime);
      } else {
        setMainTime(props.shortRestTime);
      }
      audioStopWorking.play();
    },
    [
      setTimeCouting,
      setWoking,
      setResting,
      setMainTime,
      props.longRestTime,
      props.shortRestTime,
    ],
  );

  const [completeCycles, setCompleteCycles] = useState(0);
  const [workingTime, setWorkingTime] = useState(0);
  const [numberPomodoros, setNumberPomodoros] = useState(0);
  useEffect(() => {
    if (working) {
      document.body.classList.add('working');
    }
    if (resting) {
      document.body.classList.remove('working');
    }

    if (mainTime > 0) return;

    if (working && cyclesQtd.length > 0) {
      configureRest(false);
      cyclesQtd.pop();
    } else if (working && cyclesQtd.length <= 0) {
      setCyclesQtd(new Array(props.cycles - 1).fill(true));
      setCompleteCycles(completeCycles + 1);
    }

    if (working) setNumberPomodoros(numberPomodoros + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTime,
    cyclesQtd,
    numberPomodoros,
    completeCycles,
    configureRest,
    setCyclesQtd,
    configureWork,
    props.cycles,
  ]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setWorkingTime(workingTime + 1);
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
      <div className="details">
        <p>Ciclos Concluídos: {completeCycles}</p>
        <p>Tempo Trabalhado: {SecondsToTime(workingTime)}</p>
        <p>Pomodoros Conlcuidos: {numberPomodoros}</p>
      </div>
    </div>
  );
}
