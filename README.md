GET /api/v1/assets_classifications_with_capacities?config=Config_9
{
    "data" : {
        "CAP": "number",
        "DGO": "number",
        "HSO": "number",
        "HSW": "number",
        "HFO": "number",
        "KJF": "number",
        "LPG": "number",
        "LSO": "number",
        "LSW": "number",
        "MSO": "number",
        "MSW": "number",
        "NAP": "number",
    }
}

GET /api/v1/composition_limit?config=Config_9&asset=HSW&from=number&to=number
GET /api/v1/composition_limit?config=Config_9&asset=HSW&from=2&to=10
{
    "data" : [
        {
            "config": "string",
            "feed": "string",
            "comp": "float"
        }
    ]
}

GET /api/v1/avg_composition?config=Config_9&asset=HSW
{
    "data" : [
        {
            "config": "string",
            "feed": "string",
            "avg": "float"
        }
    ]
}

GET /api/v1/extracted_data?country=Algeria
{
    "data" : [
        {
            "month_year": "string",
            "value": "number"
        }
    ]
}