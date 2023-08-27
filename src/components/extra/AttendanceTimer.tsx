import { getHM, getMinutesDiff } from "@/utils";
import React, { useEffect, useState } from "react";
type Props = {
  inTime: string;
};
const AttendanceTimer = (props: Props) => {
  const [timer, setTimer] = useState({ hour: 0, minute: 0 });

  useEffect(() => {
    const setTimerCount = setInterval(() => {
      const d = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      });
      const inTime = props.inTime;

      const minDiff = getMinutesDiff(inTime, d);
      const diffHM = getHM(minDiff);
      setTimer(diffHM);
    }, 60000);
    return () => {
      clearInterval(setTimerCount);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);
  return (
    <>
      <strong>{timer.hour + " : " + timer.minute}</strong>
    </>
  );
};

export default AttendanceTimer;