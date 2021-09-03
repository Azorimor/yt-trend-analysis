import app from './app';
import {PORT} from './utils/config';
import connection from './utils/mongo';

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error(error);
  });
