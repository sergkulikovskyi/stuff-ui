const getPopoverPosition = (elem) => {
  if (elem) {
    const posElement = elem.getBoundingClientRect();
    const elemWidth = elem.offsetWidth;
    const elemHeight = elem.offsetHeight;
    const toTop = posElement.y + elemHeight > window.innerHeight;
    const toLeft = posElement.x + elemWidth > window.innerWidth;

    const verticalPos = toTop ? { bottom: '100%' } : { top: '100%' };
    const horizontalPos = toLeft ? { right: 0 } : { left: 0 };
    return { ...verticalPos, ...horizontalPos };
  }
  return {};
};

export default getPopoverPosition;
