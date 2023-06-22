import { Request, Response } from 'express';
import _ from 'lodash'
import {csvReader} from "./utils/fileHandler";
import {readData} from "./utils/sqlLiteHandler";
import {COMP_LIMIT_PATH, COUNTRIES, GLOBAL_CAP_PATH, GLOBAL_COMP_PATH, PAGE_LIMIT, TABLE_NAME} from "./utils/constants";

const assetsClassificationsWithCapacitiesController = async (req: Request, res: Response) => {
    try {
        let config = 'Config_0'; //set Config_0 as default config
        let data = csvReader(GLOBAL_CAP_PATH)
        // skip the header
        data.shift();
        let parsedResult = data.map((item, index) => {
            return {
                config: item[1],
                "CAP": item[3],
                "LSO": item[4],
                "LSW": item[5],
                "MSO": item[6],
                "MSW": item[7],
                "HSO": item[8],
                "HSW": item[9],
            }
        })

        // filter according to query params
        let result = _.find(parsedResult, {config: req.query.config || config})

        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error'});
    }
}

const compositionLimit = async (req: Request, res: Response) => {
    try {
        let data = csvReader(GLOBAL_COMP_PATH)
        // skip the header
        data.shift();
        let result = data.map((item, index) => {
            return {
                config: item[0],
                feed: item[1],
                comp: item[2],
            }
        })

        // filter according to query params
        if (req.query.config) {
            result = _.filter(result, {config: req.query.config})
        }
        if (req.query.asset) {
            result = _.filter(result, {feed: req.query.asset})
        }
        if (req.query.from) {
            result = _.filter(result, function(o) { return Number(o.comp) > Number(req.query.from); })
        }
        if (req.query.to) {
            result = _.filter(result, function(o) { return Number(o.comp) < Number(req.query.to); })
        }

        let totalCount = result.length

        // pagination for the data
        const page = req.query.page ? Number(req.query.page) : 1;
        const pageLimit = req.query.size ? Number(req.query.size) : PAGE_LIMIT;
        result = result.slice((page - 1) * pageLimit, page * pageLimit);
        return res.status(200).json({ success: true, data: result, totalCount });
    } catch (e) {
        return res.status(500).json({ success: false, message: 'Internal server error'});
    }
}

const avgComposition = async (req: Request, res: Response) => {
    try {
        let data = csvReader(COMP_LIMIT_PATH)
        // skip the header
        data.shift();
        let result = data.map((item, index) => {
            return {
                config: item[0],
                feed: item[1],
                avg: (Number(item[2])+Number(item[3])) / 2,
            }
        })

        // filter according to query params
        if (req.query.config) {
            result = _.filter(result, {config: req.query.config})
        }
        if (req.query.asset) {
            result = _.filter(result, {feed: req.query.asset})
        }

        let totalCount = result.length

        const page = req.query.page ? Number(req.query.page) : 1;
        const pageLimit = req.query.size ? Number(req.query.size) : PAGE_LIMIT;
        result = result.slice((page - 1) * pageLimit, page * pageLimit);
        return res.status(200).json({ success: true, data: result, totalCount });
    } catch (e) {
        return res.status(500).json({ success: false, message: 'Internal server error'});
    }
}

const extractedData = async (req: Request, res: Response) => {
    try {
        const page = req.query.page ? Number(req.query.page) : 1;
        const pageLimit = req.query.size ? Number(req.query.size) : PAGE_LIMIT;
        let skip = ((pageLimit * page) - pageLimit);

        let query = `SELECT * FROM ${TABLE_NAME} ORDER BY Country LIMIT ${skip},${pageLimit}`

        // filter according to query params
        if (req.query.country && COUNTRIES.includes(String(req.query.country))) {
            query = `SELECT * FROM ${TABLE_NAME} WHERE Country="${req.query.country}"  ORDER BY Country LIMIT ${skip},${pageLimit}`
        }

        let result = await readData(query)
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        return res.status(500).json({ success: false, message: 'Internal server error'});
    }
}

export {
    assetsClassificationsWithCapacitiesController, 
    compositionLimit, 
    avgComposition, 
    extractedData
}