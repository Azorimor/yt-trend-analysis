import app from './app';
import cronQueue from './queues/cronQueue';
import {PORT} from './utils/config';
import connection from './utils/mongo';
import {worker} from './worker/loadRegions';

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
      cronQueue
        .add('load-regions', {}, {repeat: {cron: '0 0 * * *'}})
        .then(() => {
          console.log('cron-queue load-regions added for 0 0 * * *');
        });
      cronQueue
        .add('load-regions', {}, {repeat: {cron: '0 12 * * *'}})
        .then(() => {
          console.log('cron-queue load-regions added for 0 12 * * *');
        });
      cronQueue.add('load-regions', {}).then(() => {
        console.log('TEST load-regions added.');
      });
    });
  })
  .catch(error => {
    console.error(error);
  });
