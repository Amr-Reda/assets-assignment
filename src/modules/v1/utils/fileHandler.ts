import xlsx from 'node-xlsx';
import fs from 'fs';

const csvReader = (path: string) => {
    const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${path}`));
    return workSheetsFromBuffer[0].data
}

export {
    csvReader, 
}