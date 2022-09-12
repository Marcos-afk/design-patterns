import { MainDishBuilder } from './creational/builder/classes/main-dish-builder';
import { myDatabase } from './creational/singleton/db/my-database';
import { validateEmail } from './structural/adapter/client';
import { EmailValidatorAdapter } from './structural/adapter/validation/email-validator-adapter';

/* Singleton */
console.log('---------------- Singleton ------------------');
const singletonFirstInstance = myDatabase;
const singletonSecondInstance = myDatabase;

console.log(singletonFirstInstance === singletonSecondInstance);

singletonFirstInstance.add({ name: 'Marcos André', email: 'teste' });
singletonFirstInstance.add({ name: 'Marcos Lima', email: 'teste' });
singletonFirstInstance.list();
singletonFirstInstance.remove('Marcos André');
console.log('------------------------------------');
singletonFirstInstance.list();
console.log('-------------------------------------');
singletonSecondInstance.add({ name: 'Marcos Melo', email: 'teste' });
singletonSecondInstance.add({ name: 'Marcos Oliveira', email: 'teste' });
singletonSecondInstance.list();
singletonSecondInstance.remove('Marcos Melo');
console.log('-------------------------------------');

/* Builder */
console.log('------------------------- Builder -----------------------');

const mainDish = new MainDishBuilder();
mainDish.makeMeal().makeBeverage();
console.log(mainDish.getMeal());
console.log(mainDish.getPrice());

/* Adapter */

validateEmail(new EmailValidatorAdapter(), 'marcosmelo@gamil.com');
