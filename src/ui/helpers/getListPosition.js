const getListPosition = (ref, nested) => {
  const elem = ref.current;
  if (elem) {
    const posElement = elem.getBoundingClientRect();
    const elemWidth = elem.offsetWidth;
    const elemHeight = elem.offsetHeight;
    const toTop = posElement.y + elemHeight > window.innerHeight;
    const toLeft = posElement.x + elemWidth > window.innerWidth;

    if (!nested) {
      const verticalPos = toTop ? { bottom: '100%' } : { top: '100%' };
      const horizontalPos = toLeft ? { right: 0 } : { left: 0 };
      return { ...verticalPos, ...horizontalPos };
    } else {
      const verticalPos = toTop ? { bottom: '-5px' } : { top: '10px' };
      const horisontalPos = toLeft ? { right: 'calc(100% + 2px)' } : { left: 'calc(100% + 2px)' };
      return { ...horisontalPos, ...verticalPos };
    }
  }
  return {};
};

export default getListPosition;
