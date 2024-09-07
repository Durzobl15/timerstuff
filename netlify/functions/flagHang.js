exports.handler = async function(event, context) {
  if (event.httpMethod === 'POST') {
    // Here we will trigger the 'flag hang' event on the frontend.
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Flag Hang Triggered' }),
    };
  }
  return {
    statusCode: 405,
    body: 'Method Not Allowed',
  };
};
