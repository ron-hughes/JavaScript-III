/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


function GameObject(attr) {
  this.createdAt = attr.createdAt,
  this.name = attr.name,
  this.dimensions = attr.dimensions,
  this.destroy = function () { return `${this.name} was removed from the game.`; };
}



CharacterStats.prototype = Object.create(GameObject.prototype); // connect charStats to gameObject

 function CharacterStats(charStats) {
  GameObject.call(this, charStats); 
  this.healthPoints = charStats.healthPoints,
  this.takeDamage = function () { return `${this.name} took damage`}
  };


Humanoid.prototype = Object.create(CharacterStats.prototype); // connect humanoid to charStats & gameObject

function Humanoid(humanAttr) {
  CharacterStats.call(this, humanAttr); // connect humanoid attr into charStats
  this.team = humanAttr.team,
  this.weapons = humanAttr.weapons,
  this.language = humanAttr.language
  this.greet = function() { return `${this.name} offers a greeting in ${this.language}`; } 
};

Heroes.prototype = Object.create(Humanoid.prototype);
 function Heroes(heroesAttr) {
   Humanoid.call(this, heroesAttr); // connect heroesAttr  into humanoid
   this.punch = function() { return ``  }
 };

Villians.prototype = Object.create(Humanoid.prototype);
 function Villians(villAttr) {
   Humanoid.call(this, villAttr); // connect villAttr  into humanoid  
   this.slice = function (){
     return `${this.name} sliced a hero!`;
   }
 };

//  function healthMeter() {
//    let health = this.healthPoints;
//       function name() {

//       };
//  }

  const mage = new Heroes({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Heroes({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const darkElf = new Villians({
    createdAt: new Date(),
    dimensions: {
    length: 4,
    width: 2,
    height: 3,
    },
    healthPoints: 5,
    name: 'Poison Dart',
    team: 'Wicked Men',
    weapons: [
      'Wand of Dispair',
    ],
    language: 'English',
  });

  const stoneMan = new Villians({
    createdAt: new Date(),
    dimensions: {
    length: 4,
    width: 2,
    height: 3,
    },
    healthPoints: 5,
    name: 'Stone Man',
    team: 'Wicked Men',
    weapons: [
      'Wand of Dispair',
    ],
    language: 'English',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(stoneMan.slice())
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!