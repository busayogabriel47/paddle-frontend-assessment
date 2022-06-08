import {react, useEffect, useRef, useState} from 'react';
import {getRemainingTime} from '././countDownUtil'






const CountDown = ({countdownTimestampMs}) => {

    const [timerDays, setTimerDays] = useState('00');

    const [timerHours, setTimerHours] = useState('00');

    const [timerMinutes, setTimerMinutes] = useState('00');

    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('June 30, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0) {
                clearInterval(interval.current)
            }else {
                    setTimerDays(days);
                    setTimerHours(hours);
                    setTimerMinutes(minutes);
                    setTimerSeconds(seconds);
            }

        }, 1000)
    }



    useEffect(()=> {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })
/*const [remainingTime, setRemainingTime] = useState(defaultTimer)

useEffect(()=>{
    const intervalId = setInterval(()=>{}, 1000);
        updateTimer(countdownTimestampMs);
    return() => clearTimeout(intervalId);
},[countdownTimestampMs])


const updateTimer = (countdown) => {
    setRemainingTime(getRemainingTime(countdown))
} */

    return (
        <>
            <div className='countDown mt-5'>
                <span>{timerDays}</span>
                <span>{timerHours}</span>
                <span>{timerMinutes}</span>
                <span>{timerSeconds}</span>
            </div>
        </>
    )
}

export default CountDown;