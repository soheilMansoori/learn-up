import { useState, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';

export default function useInfiniteScroll(key, fetcher) {
    const [hasNextPage, setHasNextPage] = useState(false);
    const [mainData, setMainData] = useState([]);
    const { data, isFetching, fetchNextPage, ...rest } = useInfiniteQuery(
        key,
        fetcher,
        {
            getNextPageParam: (lastPage, pages) => {
                if (pages.length < lastPage.pages) {
                    return pages.length + 1;
                } else {
                    return undefined;
                }
            },
        }
    );

    useEffect(() => {
        // set blogs array
        const mainData = data?.pages.map(page => page.data).flat(Infinity);
        setMainData(mainData);
        // set next page
        const hasNextPage = data?.pages.every(page => page.next);
        setHasNextPage(hasNextPage);
    }, [data]);

    return { hasNextPage, mainData, isFetching, fetchNextPage , ...rest};
}
