/**
 * Returns node(s) for the given string attribute value of `data-test-id`
 * @function findByTestAttribute
 *
 * @name
 * @param {ShallowWrapper} wrapper - ShallowMounted Enzyme wrapper
 * @param {string} attributeValue - value of data-test-id attribute as string
 *                                  for searching the nodes
 * @returns {ShallowWrapper}
 */
 export function findByTestAttribute(wrapper, attributeValue) {
    if (!wrapper) {
      return null;
    }
  
    return wrapper.find(`[data-test-id="${attributeValue}"]`);
  }