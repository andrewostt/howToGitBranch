const calcTime = (seconds) => {
    minutes = 0;
    hours = 0;
    i = seconds;
    while (i >=3600) {
        hours += 1;
        i -= 3600;
    };
    while (i >= 60){
        minutes += 1;
        i -= 60;
    };
    return console.log(`${hours} ч ${minutes} мин ${i}`);
};