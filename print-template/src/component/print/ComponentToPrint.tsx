import { MutableRefObject, forwardRef } from 'react';

export const ComponentToPrint = forwardRef((props, ref) => {
  return <div ref={ref as MutableRefObject<null>}></div>;
});
