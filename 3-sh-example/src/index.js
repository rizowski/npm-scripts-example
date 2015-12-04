'use strict';
import _ from 'lodash';
import chalk from 'chalk';

function addToBowl(ingredients){
  _.each(ingredients, ingred => console.log(chalk.green(`Adding ${chalk.underline(ingred)} to the bowl`)));
}

function rainbow(msg){
  let colors = ['blue', 'green', 'yellow', 'cyan', 'red'];
  let coloredMsg = '';
  _.each(msg, c =>{
    let rand = _.random(0, 4);
    let color = colors[rand];
    coloredMsg += chalk[color](c);
  });
  return coloredMsg;
}

export default function Cake(ingredients){
  let battered = false;
  let baked = false;

  addToBowl(ingredients);

  function canBatter(){
    if(!ingredients){
      throw new Error(chalk.red('You have no ingredients'));
    }
    if(ingredients.length < 2){
      throw new Error(chalk.red("You don't have enough ingredients to make a cake"));
    }
  }

  function canBake(){
    if(!battered){
      throw new Error(chalk.red('You need to batter'));
    }
  }

  let cakeState = {
    makeBatter: function makeBatter(){
      canBatter();
      console.log(chalk.yellow('Making Batter'));
      battered = true;
      return cakeState;
    },
    bake: function bake(){
      canBake();
      console.log('Here is your cake with ' + rainbow('sprinkles'));
      baked = true;
      return cakeState;
    }
  };

  return cakeState;
}
