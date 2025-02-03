# Number Classification API

This API classifies numbers and returns interesting mathematical properties along with a fun fact.

## Endpoints

### GET /api/classify-number?number=<number>

#### Query Parameters

- `number`: The number to classify.

#### Responses

**200 OK**

**400 Bad Request**


```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}


{
  "number": "alphabet",
  "error": true
}
