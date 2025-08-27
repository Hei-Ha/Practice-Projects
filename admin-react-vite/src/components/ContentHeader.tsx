import React, { FC } from 'react';


interface ContentHeaderProps {
    title: string;
    subTitle: string;
}

export const ContentHeader: FC<ContentHeaderProps> = ({ title, subTitle }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div className="my-10">
                <h2>{subTitle}</h2>
            </div>
            <hr />
        </div>
    );
};
