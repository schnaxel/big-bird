'use client'
import React from 'react';
import Link from "next/link";
import { ElfsightWidget } from 'react-elfsight-widget';

const InstagramFeed: React.FC = () => {
    return (
        <div className='mt-5'>
            <h2 className={'mb-4 text-center'} >
                <Link href={'https://www.instagram.com/bigbirdsfarm'} rel="noopener" target="_blank">
                    #BIGBIRDS
                </Link>
            </h2>
            <ElfsightWidget widgetId={"28c5f280-cfed-4ebf-8486-2cabcf09b089"} lazy/>
        </div>
    );
};

export default InstagramFeed;