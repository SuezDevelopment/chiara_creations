import { HomepageMeta } from '@/data/types';
import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';


const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
})