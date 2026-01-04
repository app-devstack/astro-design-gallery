import { uuidv7 } from '@/shared/utils/uuid';
import { exit } from 'process';

const GENERATE_COUNT = 10;

/*=====================
  Main Function
=====================*/
async function main() {
  try {
    for (let i = 0; i < GENERATE_COUNT; i++) {
      const uuid = uuidv7();
      console.log('Generated UUIDv7:', uuid);
    }
  } catch (error) {
    console.error(error);
  }

  process.exit(0);
}

/*=====================
   Run Script
 =====================*/
main()
  .catch((e) => {
    console.log('Error:', e);
    throw e;
  })
  .finally(async () => {
    console.log('finally');
    exit();
  });
