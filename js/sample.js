$(document).ready(function () {
    $('#header').on('click', eventFn);
});

function eventFn(e) {
    if ($(e.target).text() === 'SAMPLES0') {
        $('#header').children().eq(1).css('right', '0');
    } else if ($(e.target).is('i')) {
        $('#header').children().eq(1).css('right', '-100%');
    } else {
        return;
    }
};