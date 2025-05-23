export default function deepAssign(target, ...sources) {
  for (const source of sources) {
    mergeObjects(target, source);
  }
}

function mergeObjects(target, source) {
  for (let key in source) {
    if (key in source) {
      const sourceValue = source[key];
      const targetValue = target[key];
      if (typeof sourceValue === 'object' &&
        sourceValue !== null &&
        !Array.isArray(sourceValue) &&
        targetValue &&
        typeof targetValue === 'object' &&
        !Array.isArray(targetValue)) {
        mergeObjects(targetValue, sourceValue);
      }
      else if (sourceValue !== undefined) {
        target[key] = sourceValue;
      }
    }
  }
}