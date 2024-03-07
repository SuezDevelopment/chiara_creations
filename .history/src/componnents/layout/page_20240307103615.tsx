import { HomepageMeta } from '@/data/types';
import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';


const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
    const router = useRouter();
    const {asPath: pathname} = useRouter();
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link href="/favicon.ico" rel="icon" sizes="any" />
                <link href="/icon.svg" rel="icon" type="image/svg+xml" />
                <link href="/site.webmanifest" rel="manifest" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
})