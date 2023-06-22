import { Database } from 'sqlite3';
import {DB_PATH} from "./constants";

let db = new Database(DB_PATH, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

const readData = (query: string) => {
    return new Promise((resolve, reject) => {
        db.all(query, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

export {
    readData, 
}