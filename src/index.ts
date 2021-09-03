import app from './app';
import prepareQueues from './queues';
import {PORT} from './utils/config';
import connection from './utils/mongo';

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
      prepareQueues();
    });
  })
  .catch(error => {
    console.error(error);
  });
