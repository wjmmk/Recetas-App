/* eslint-disable prettier/prettier */
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create three dummy recipes
  const recipe1 = await prisma.recipe.upsert({
    where: { title: 'Spaghetti Bolognese' },
    update: {},
    create: {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian dish',
      ingredients:
        'Spaghetti, minced beef, tomato sauce, onions, garlic, olive oil, salt, pepper',
      instructions:
        '1. Cook the spaghetti. 2. Fry the minced beef. 3. Add the tomato sauce to the beef. 4. Serve the spaghetti with the sauce.',
    },
  });

  const recipe2 = await prisma.recipe.upsert({
    where: { title: 'Chicken Curry' },
    update: {},
    create: {
      title: 'Chicken Curry',
      description: 'A spicy Indian dish',
      ingredients:
        'Chicken, curry powder, onions, garlic, coconut milk, olive oil, salt, pepper',
      instructions:
        '1. Fry the chicken. 2. Add the curry powder to the chicken. 3. Add the coconut milk. 4. Serve the curry with rice.',
    },
  });

  const recipe3 = await prisma.recipe.upsert({
    where: { title: 'Pezcado al Ajíllo' },
    update: {},
    create: {
      title: 'Pezcado al Ajíllo',
      description: 'A typical dish from the Colombian coast.',
      ingredients:
        'Fish, oil, garlic, onion, spices, vegetables, potatoes, tomato, etc.',
      instructions:
        'Vamos a iniciar nuestra receta, fileteando el ajo finamente para que quede bien troceado. 2. Toma el ramito de perejil y cilantro y trocéalo también para que quede fino. 3. Toma los filetes y sazónalos con sal y pimienta por ambos lados. 4. Cuando estén bien sellados y cocidos, retíralos y reserva. 5. Disfruta!!!',
    },
  });

  console.log({ recipe1, recipe2, recipe3 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
