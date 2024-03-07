import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';


const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
    
})