import react from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';


export const Timer = () => {
    const [isRunning, setisRunning] = useState(false);
    const [time, setTime] = useState(0);



    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
    }, [isRunning,time]);


    const startTimer = () => setisRunning(true);
    const stopTimer = () => setisRunning(false);
    const resetTimer = () => {
        setisRunning(false);
        setTime(0);
    }





    return (
        <>
            <View>
                <TouchableOpacity onPress={startTimer}>start stop watch </TouchableOpacity>
                <TouchableOpacity onPress={stopTimer}>stop the Timer </TouchableOpacity>
                <TouchableOpacity onPress={resetTimer}>reset the Timer </TouchableOpacity>
            </View>

            <View>
                <Text>{time}</Text>
            </View>
        </>
    )

}