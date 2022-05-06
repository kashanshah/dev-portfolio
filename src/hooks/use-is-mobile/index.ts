import isMobile from 'ismobilejs';
import * as _ from 'lodash';

function flattenObject(ob: {}) {
  var toReturn = {};

  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;

    if (typeof ob[i] == 'object' && ob[i] !== null) {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        toReturn[i + '.' + x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
}

export const useIsMobile = () => {
  const mobileResult = isMobile();

  return {
    isMobile: mobileResult?.any,
    result: mobileResult,
    device: _.findKey(flattenObject(mobileResult), (v) => v === true),
  };
};
