// BEGIN
export default function (objects, callback) {
  for (const obj of objects) {
    callback.call(obj);
  }
}
// END
