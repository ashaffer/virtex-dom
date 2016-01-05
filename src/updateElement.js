/**
 * Imports
 */

import removeAttribute from './removeAttribute'
import setAttribute from './setAttribute'
import forEach from '@f/foreach'

/**
 * Update element
 */

function updateElement (prev, next) {
  /**
   * Diff attributes
   */

  forEach((val, key) => {
    if (!nattrs || isUndefined(nattrs[key])) {
      effect(removeAttribute(node, key))
    }
  }, pattrs)

  forEach((val, key) => {
    if (!pattrs || val !== pattrs[key]) {
      effect(setAttribute(node, key, val))
    }
  }, nattrs)

}

/**
 * Exports
 */

export default updateElement
