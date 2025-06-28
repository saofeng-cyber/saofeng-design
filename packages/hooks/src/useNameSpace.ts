export const NAMESPACE = 's';

export const useNameSpace = (namespace: string) => {
  return `${NAMESPACE}-${namespace}`;
};
