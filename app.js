
var dieSpotIDs = ["#die1", "#die2", "#die3", "#die4", "#die5"];

var randomDie = function() {
    return Math.floor(Math.random() * 6);
}

var dice = [
    {
        image: "img/Dice-1.png",
        value: 1
    },
    {
        image: "img/Dice-2.png",
        value: 2
    },
    {
        image: "img/Dice-3.png",
        value: 3
    },
    {
        image: "img/Dice-4.png",
        value: 4
    },
    {
        image: "img/Dice-5.png",
        value: 5
    },
    {
        image: "img/Dice-6.png",
        value: 6
    }
];

var showRoll = function() {
    
    dieSpotIDs.forEach(function(elem, ind) {
        if (!$(elem).hasClass('selected')) {
            $(elem).css('background',  'url(' + dice[randomDie()].image + ')')
                .css('background-size', '100%')
                .css('background-repeat', 'no-repeat');
        }
    });
}

    
$(document).ready(function() {
    
    $('#roller').on('click', function() {
        showRoll();
    });
    
    $('.die').on('click', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });
    
});