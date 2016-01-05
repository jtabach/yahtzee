
var dieSpotIDs = ["#die1", "#die2", "#die3", "#die4", "#die5"];
var diceRolled = [];
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
            var temp = randomDie();
            diceRolled[ind] = dice[temp].value;
            $(elem).css('background',  'url(' + dice[temp].image + ')')
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
    
var newTurn = function(select, score) {
    showRecent(select, score);
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

var showRecent = function(select, score) {
    $('#recent').html("Player " + player + " scored " + score + " on thier " + select + ".");
}

var countSum = function(num) {
    var sum = 0;
    diceRolled.forEach(function(elem, ind) {
        if (elem === num) {
            sum += num;
        }
    });
    return sum;
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
        var buttonID = this.id;
        var buttonVal = Number($(this).attr("value"));
        var score = countSum(buttonVal);
        if (player === 1) {
            var classSel = '.p1';
        } else {
            var classSel = '.p2';
        }
        $(this).closest('td').siblings(classSel).html(score);
        var selection = $(this).html();
        resetRoll();
        newTurn(selection, score);
    });
    
    
    
    
});

// TODO: restrict player from clicking before roll.
// TODO: restrict player from clicking scored category.












