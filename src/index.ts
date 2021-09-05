import app from './app';
import prepareQueues, {queues} from './queues';
import {PORT} from './utils/config';
import connection from './utils/mongo';
import {ExpressAdapter} from '@bull-board/express';
import {createBullBoard} from '@bull-board/api';

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
      prepareQueues();

      const serverAdapter = new ExpressAdapter();
      const {addQueue, removeQueue, setQueues, replaceQueues} = createBullBoard(
        {
          queues: queues,
          serverAdapter: serverAdapter,
        }
      );
      serverAdapter.setBasePath('/bull/');
      app.use('/bull/', serverAdapter.getRouter());
    });
  })
  .catch(error => {
    console.error(error);
  });
