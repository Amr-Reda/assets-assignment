import express from 'express';
import { assetsClassificationsWithCapacitiesController, compositionLimit, avgComposition, extractedData } from './handler';

const router = express.Router()

router.get(
    '/assets_classifications_with_capacities',
    assetsClassificationsWithCapacitiesController,
)

router.get(
    '/composition_limit',
    compositionLimit,
)

router.get(
    '/avg_composition',
    avgComposition,
)

router.get(
    '/extracted_data',
    extractedData,
)

export { router as assetsRoutes };