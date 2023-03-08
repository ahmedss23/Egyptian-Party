$('#navCloseBtn').click(function(){
    $('#navMenu').hide(500);
})

$('#navOpenBtn').click(function(){
    $('#navMenu').show(500);
})


$('#singers .singer').click(function(){
    $('#singers .singer p').not($(this).find('p')).slideUp();
    $(this).find('p').slideDown();
})

$('[name="message"]').on('input', function(e){
    let remaining = 100 - $(this).val().length;
    $('#charCount').text(remaining);
})

$('[name="message"]').trigger('input')



setInterval(function() {

    let now = new Date().getTime();
    let countDownDate = new Date(2023, 3, 3);

    let diff = countDownDate - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    $('#days').text(days)
    $('#hours').text(hours)
    $('#minutes').text(minutes)
    $('#seconds').text(seconds)
}, 1000);