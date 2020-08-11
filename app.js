$(document).ready(function () {
    let currentDate = new Date();

    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth()+1;
    let currentYear = currentDate.getFullYear();

    if(currentDay<10)
        currentDay='0'+currentDay;

    if(currentMonth<10)
        currentMonth='0'+currentMonth;

    $('input#date').val(`${currentYear}-${currentMonth}-${currentDay}`);

    // --- Financial balance period

    $('a#custom').click(function () {
        $('#date-range').toggle();
    });
    $('html').click(function() {
        $('#date-range').hide();
    });
    $('a#custom, #date-range').click(function(e){
        e.stopPropagation();
    });
});

