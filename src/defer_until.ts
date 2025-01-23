export type deferUntilType = {
  later(): void,
  defer(handler: () => void): () => void,
};
export const deferUntilFactory = () => {
  let deferred: (() => void)[] = [];

  const defer = (handler: () => void) => {
    deferred.push(handler);
  };

  const later = () => {
    deferred.reverse().forEach(d => d());
    deferred = [];
  };

  return {defer, later} as deferUntilType;
};
