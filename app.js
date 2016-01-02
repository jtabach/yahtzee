
var dieSpotIDs = ["#die1", "#die2", "#die3", "#die4", "#die5"];
var rollNum = 0;
var player = 1;

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

var randomDie = function() {
    return Math.floor(Math.random() * 6);
}

var showRoll = function() {
    
    dieSpotIDs.forEach(function(elem, ind) {
        if (!$(elem).hasClass('selected')) {
            $(elem).css('background',  'url(' + dice[randomDie()].image + ')')
                .css('background-size', '100%')
                .css('background-repeat', 'no-repeat');
        }
    });
    rollNum++;
}

var appendRollNum = function() {
    $('#rollNum').html(rollNum);
}

var selectAll = function() {
    $('.die').addClass('selected');
}

var resetRoll = function() {
    $('.die').css('background', '');
}
    
var newTurn = function(select) {
    showRecent(select);
    if (player === 1) {
        player = 2;
    } else {
        player = 1
    }
    $('#player').html(player);
    rollNum = 0;
    appendRollNum();
    $('.die').removeClass('selected');
}

var showRecent = function(select) {
    $('#recent').html("Player " + player + " scored {blank} on his " + select + ".");
}

$(document).ready(function() {
    
    $('#roller').on('click', function() {
        console.log(rollNum);
        if (rollNum !== 3) {
            showRoll();
            appendRollNum();
        }
        if (rollNum === 3){
            selectAll();
        }
    });
    
    $('.die').on('click', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });
    
    $('.btn').on('click', function() {
        var selection = $(this).html();
        console.log(selection);
        resetRoll();
        newTurn(selection);
    });
    
});














