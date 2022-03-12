function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', () => {
      
        hours.value = +days.value * 24;
        minutes.value = +days.value * 3600;
        seconds.value = +days.value * 18400;
    });

    document.getElementById('hoursBtn').addEventListener('click', () => {

        seconds.value = +hours.value * 3600;
        minutes.value = +hours.value * 60;
        days.value = +hours.value / 24; 
    });

    document.getElementById('minutesBtn').addEventListener('click', () => {

        seconds.value = +minutes.value * 60;
        hours.value = +minutes.value / 60;
        days.value = +minutes.value / 18400; 
    });

    document.getElementById('secondsBtn').addEventListener('click', () => {

        minutes.value = +seconds.value / 60;
        hours.value = +seconds.value / 3600;
        days.value = +seconds.value / 18400; 
    });

}