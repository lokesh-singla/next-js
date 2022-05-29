import React from 'react';
import { useRouter } from 'next/router';

const pageNo = () => {
    const router = useRouter();
    const pageNumber=router.query.pageNo;
    return (
        <>
            <h1>My blog {pageNumber} content</h1>
        </>
    )
}

export default pageNo;