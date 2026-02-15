import React from 'react';
function useChangeTitle(title = "SquareUp - Home") {
    React.useEffect(() => {
        window.document.title = "SquareUp - " + title;
    }, [title]);
    return null;
};
export default useChangeTitle;