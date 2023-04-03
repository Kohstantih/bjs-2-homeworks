class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    };

    addClock(time, callback) {
        if(typeof time !== 'string' || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        };

        if(this.alarmCollection.some((value, index, arr) => arr[index].time === time)) {
            console.warn('Уже присутствует звонок на это же время');            
        };
        
        return this.alarmCollection.push({callback, time, canCall: true,});
    };

    removeClock(time) {        
        return this.alarmCollection = this.alarmCollection.filter((value, index, arr) => time !== arr[index].time); 
    };

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-3);
    };

    start() {
        if(this.intervalId !== null) {
            return;
        };
        function interval() {
            this.alarmCollection.forEach((value, index, arr) => {
                if(this.getCurrentFormattedTime() === arr[index].time && arr[index].canCall === true) {
                    arr[index].canCall = false;
                    arr[index].callback();
                };
            })
        };

        let newInterval = interval.bind(this);
                
        return this.intervalId = setInterval(newInterval, 1000);
    };    

    stop() {
        clearInterval(this.intervalId);
        return this.intervalId = null;
    };

    resetAllCalls() {
        return this.alarmCollection.forEach((value, index, arr) => arr[index].canCall = true);
    };

    clearAlarms() {
        this.stop();
        
        return this.alarmCollection = [];
    };
};