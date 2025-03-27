import Express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
const servidor = Express();
servidor.use(cors());
servidor.use(morgan('dev'));
servidor.use(json({ urlencoded: false }));
servidor.listen(3001, () => {
    console.log('servidor en linea en puerto', 3001);
});
