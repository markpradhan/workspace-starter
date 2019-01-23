// Libs
import { isArray, isObject } from 'lodash'

// ---------------------------------------------------------------------------

/**
 * Checks types and replaces them
 * @param replaceFrom any type
 * @param replaceWith any type
 */
const check = (replaceFrom, replaceWith) => data =>
  isArray(data)
    ? parseArray(replaceFrom, replaceWith)(data)
    : isObject(data)
      ? parseObject(replaceFrom, replaceWith)(data)
      : valueReplacer(replaceFrom, replaceWith)(data)

/**
 * Parse array
 * @param {Any} replaceFrom value you want to replace
 * @param {Any} replaceWith final value after replaced
 */
const parseArray = (replaceFrom, replaceWith) => array =>
  array.map(check(replaceFrom, replaceWith))

/**
 * Recursively change object.
 * @param {Object} object data object value to convert.
 */
const parseObject = (replaceFrom, replaceWith) => object =>
  Object.entries(object).reduce(
    (rObj, [key, value]) => ({
      ...rObj,
      [key]: check(replaceFrom, replaceWith)(value),
    }),
    {},
  )

/**
 * Replace value
 * @param {Any} value data value
 * @param {Any} replaceFrom value that want to replaced
 * @param {Any} replaceWith value final after replaced
 */
const valueReplacer = (replaceFrom, replaceWith) => value =>
  value === replaceFrom ? replaceWith : value

// ---------------------------------------------------------------------------

export const nullToUndefined = check(null, undefined)

export default check
