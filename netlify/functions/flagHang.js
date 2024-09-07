let flagHangTriggered = false;  // This will track if the flag hang event is triggered

exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',  // Allow any origin
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

  // Handle POST request (to trigger flag hang event)
  if (event.httpMethod === 'POST') {
    flagHangTriggered = true;  // Set flag hang state to true
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Flag Hang Triggered' }),
    };
  }

  // Handle GET request (to poll the flag hang state)
  if (event.httpMethod === 'GET') {
    if (flagHangTriggered) {
      flagHangTriggered = false;  // Reset the state after being fetched
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Flag Hang Triggered' }),  // Inform the website to trigger the flag hang event
      };
    } else {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Flag Hang function is ready.' }),  // Normal state
      };
    }
  }

  // Handle invalid methods
  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ message: 'Method Not Allowed' }),
  };
};
