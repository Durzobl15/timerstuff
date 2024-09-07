exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*', // Allow any origin to access the function
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    // Handle CORS preflight request
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
      body: JSON.stringify({ message: 'Flag Hang Triggered' }),
    };
  } else if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers,
      body: 'Flag Hang function is ready.',
    };
  }

  return {
    statusCode: 405,
    headers,
    body: 'Method Not Allowed',
  };
};
