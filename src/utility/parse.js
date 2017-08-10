export const PARSE_API_URL = 'https://jmd-server.herokuapp.com';
export const PARSE_HEADERS = {
  "X-Parse-Application-Id": "jmd-server",
  "X-Parse-REST-API-Key": "slumber"
}

export const setPointer = (parseClass, objectId) => {
  let pointerObject = {
    '__type': 'Pointer',
    'className': parseClass,
    objectId: objectId
  };
  return pointerObject;
}
