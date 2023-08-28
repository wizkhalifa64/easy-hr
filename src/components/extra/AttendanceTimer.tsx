import { getHM, getMinutesDiff } from "@/utils";
import React, { useEffect, useState } from "react";
type Props = {
  inTime: string;
};
const AttendanceTimer = (props: Props) => {
  const d = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  const inTime = props.inTime;
  const minDiff = getMinutesDiff(inTime, d);
  const diffHM = getHM(minDiff);
  const [timer, setTimer] = useState(
    diffHM?.minute ? diffHM : { hour: 0, minute: 0 }
  );

  useEffect(() => {
    const setTimerCount = setInterval(() => {
      setTimer(diffHM);
    }, 60000);
    return () => {
      clearInterval(setTimerCount);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);
  return (
    <h3 className={"font-semibold text-blue-400"}>
      {timer.hour}
      <span className={"text-xs"}>H </span>
      {timer.minute}
      <span className={"text-xs"}>M</span>
    </h3>
  );
};

export default AttendanceTimer;
