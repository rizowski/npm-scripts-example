'use strict';

export default function Cake(ingredients){
  let battered = false;
  let baked = false;

  function canBatter(){
    if(!ingredients){
      throw new Error('You have no ingredients');
    }
    if(ingredients.length < 3){
      throw new Error("You don't have enough ingredients to make a cake");
    }
  }

  function canBake(){
    if(!battered){
      throw new Error('You need to batter');
    }
  }

  let cakeState = {
    makeBatter: function makeBatter(){
      canBatter();
      console.log('Making Batter');
      battered = true;
      return cakeState;
    },
    bake: function bake(){
      canBake();
      console.log('Baking Cake');
      baked = true;
      return cakeState;
    }
  };

  return cakeState;
}
