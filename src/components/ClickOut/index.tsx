import React, {useEffect, useRef} from 'react';

const ClickOut = ({onClickOut, children}) => {

    const ref = useRef(null);

    useEffect(() => {
        const onEvent = (e: MouseEvent) => {
            const inside = e.target === ref?.current || ref?.current?.contains(e.target);
            if (!inside) onClickOut();
        }
        document.addEventListener('click', onEvent)
        return () => document.removeEventListener('click', onEvent);
    }, [onClickOut]);

    return <div ref={ref}>{children}</div>
}

export default ClickOut;
