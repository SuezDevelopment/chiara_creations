export interface HomepageMeta {
    title: string;
    description: string;
    ogImageUrl?: string;
    twitterCardType?: 'summary' | 'summary_large';
    twitterTitle?: string;
    twitterSite?: string;
    twitterCreator?: string;
    twitterDomain?: string;
    twitterUrl?: string;
    twitterDescription?: string;
    twitterImageUrl?: string;
}

export interface Service {
    name: string;
    description: string;
    icon?: string;
}