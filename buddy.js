let url = $request.url
console.log(url)
let body = {
  "success": true,
  "response": {
      "product_id": "585133",
      "activation_id": "admin",
      "type": "personal",
      "expires": 1,
      "expiry_date": 1999999999999
  }
}
$done({ body: JSON.stringify(body) });
