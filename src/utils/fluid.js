export default (minFont, diff, minWidth, maxWidth) => {
  return `calc(${minFont}px + (${diff}) * ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth})));`
}
