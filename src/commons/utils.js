import lodash from 'lodash'
const { isEqual } = lodash;

export const isCurrentExact = (currentPath, comparePath) => isEqual(currentPath, comparePath)
