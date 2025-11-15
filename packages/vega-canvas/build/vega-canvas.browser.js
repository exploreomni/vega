function domCanvas(w, h) {
  if (typeof document !== 'undefined' && document.createElement) {
    const c = document.createElement('canvas');
    if (c && c.getContext) {
      c.width = w;
      c.height = h;
      return c;
    }
  }
  return null;
}
const domImage = () => typeof Image !== 'undefined' ? Image : null;

/**
 * Create an OffscreenCanvas instance if available.
 * OffscreenCanvas is a browser API that provides a canvas which can be rendered
 * off screen in Web Workers. It is not available in Node.js environments.
 *
 * @param {number} w - The canvas width in pixels
 * @param {number} h - The canvas height in pixels
 * @returns {OffscreenCanvas|null} An OffscreenCanvas instance, or null if unavailable
 */
function offscreenCanvas(w, h) {
  if (typeof OffscreenCanvas !== 'undefined') {
    try {
      return new OffscreenCanvas(w, h);
    } catch (e) {
      // OffscreenCanvas constructor may throw in some contexts
    }
  }
  return null;
}

// Browser fallback: try domCanvas first, then OffscreenCanvas
function canvas(w, h) {
  return domCanvas(w, h) || offscreenCanvas(w, h) || null;
}
function image() {
  return domImage() || null;
}

export { canvas, domCanvas, domImage, image, offscreenCanvas };
//# sourceMappingURL=vega-canvas.browser.js.map
