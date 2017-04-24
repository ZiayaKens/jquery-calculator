// $(function(){
//
// var $butts = ($('.buttons').children('span'));
//
// console.log($butts);
// $.each($butts, function( index) {
//   console.log($butts[index].innerHTML);
//
// });                                             // not sure what 3 through 9 are doing???????????

var number1 = '';
var number2 = '';
var clickedoperand = false;// when this is true, prevent and operand from being added twice
var whatoperand = '';
var screen = $('#screen')



$('.buttons').on('click', 'span', function(event){
  
  if(event.target.innerHTML == 'C'){                  //all the time the C key should reset
    screen.html('');                   // screen got emptied
    clickedoperand = false;                 // resets if an operand is clicked
    number1 = '';                           // number 1 empty
    number2 = '';                           // number 2 empty
  }
  else if (screen.html() == ''){                // if the screen empty - when you hit your first key
      if( $(event.target).hasClass('operator')){      // if you click a operand first
        screen.html(screen.html()+'ERROR');
      }
      else if (!$(event.target).hasClass('operator')){                    // if you click something thats not an operator (only other option would be one of the numbers)
        screen.html(screen.html()+event.target.innerHTML);                //adds the number to the screen
        number1 = number1 + event.target.innerHTML;                       //adds the number to a variable that represents the first number in the calculator
      }
      //else if(event.target.innerHTML.includes('C'))
  }
  else if (number1 != '' && clickedoperand === false){       // if the screen isnt empty (has a/some numbers) and an operand hasnt been clicked yet
    if($(event.target).hasClass('operator') && event.target.innerHTML != '=') {                             //if you click an operand (when there is just one # on the screen)
      screen.html(screen.html() +event.target.innerHTML)
      clickedoperand = true;
      whatoperand = event.target.innerHTML
    }
    else if (!$(event.target).hasClass('operator') && clickedoperand === false){     // called when a number is on screen, no operand, and you want to add more to the first number
      screen.html(screen.html() +event.target.innerHTML);
      number1 = number1 + event.target.innerHTML;
    }
  }
  else if (number1 != '' && clickedoperand === true && number2 ==''){                        //if the screen isnt empty and they clicked an operand
    if ($(event.target).hasClass('operator') && event.target.innerHTML != '='){                                      //if they try to add multiple operands - error
      screen.html('error');
    }
    else if(!$(event.target).hasClass('operator') && clickedoperand === true){
      screen.html(screen.html() +event.target.innerHTML);
      number2 = number2 + event.target.innerHTML;
    }
  }
  else if(number1 !== '' && clickedoperand === true && number2 !== ''){
      if (!$(event.target).hasClass('operator')){
        screen.html(screen.html() +event.target.innerHTML);
        number2 = number2 + event.target.innerHTML;
      }
      else if (event.target.innerHTML == '='){
        var num1 = parseInt(number1, 10);
        var num2 = parseInt(number2, 10);
        if(whatoperand == '÷'){
          if(num1 === 0 || num2 === 0){
            screen.html('Cant Divide by Zero');
          }
          else {
            screen.html(num1/num2);
          }
        }
        else if(whatoperand == 'x'){
          screen.html(num1*num2);
        }
        else if (whatoperand == '-'){
          screen.html(num1-num2);
        }
        else if (whatoperand == '+'){
          screen.html(num1+num2);
        }
      }
  }

})
