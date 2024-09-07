exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',  // This allows requests from any origin
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight request' }),
    };
  }

  if (event.httpMethod === 'POST') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Flag Hang Triggered' }),  // Return as valid JSON
    };
  } else if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Flag Hang function is ready.' }),  // Return valid JSON for GET requests
    };
  }

  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ message: 'Method Not Allowed' }),  // Handle invalid methods
  };
};
