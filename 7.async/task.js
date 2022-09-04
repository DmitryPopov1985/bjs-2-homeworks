class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Параметр id не передан');
        }
        if (this.alarmCollection.some(clock => clock.id === id)) {
            console.error('Такой id уже существует');
            return;
        }

        this.alarmCollection.push({ id, time, callback });
    }

    removeClock(id) {
        let idIndex = this.alarmCollection.findIndex(clock => clock.id === id);
        if (idIndex === -1) {
            return false;
        }

        this.alarmCollection.splice(idIndex, 1);
        return true;
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return this.currentDate = hours + ':' + minutes;
    }

    start() {
        if (this.timerId) {
            return;
        }
        this.timerId = setInterval(() => this.alarmCollection.forEach(item => {
            if (item.time === this.getCurrentFormattedTime()) {
                item.callback();
            }
        }), 2000);
        return console.log('Будильник включен');
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            return this.timerId = null;
        }

        return console.log('Будильник выключен');
    }

    printAlarms() {
        console.log('Всего будильников: ' + this.alarmCollection.length)
        this.alarmCollection.forEach(alarmClock => console.log('Будильник №' + alarmClock.id + ' заведен на ' + alarmClock.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
































