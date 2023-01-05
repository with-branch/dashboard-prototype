import React from 'react';
import InfoModal from './InfoModal';


export default function IssuesChartPlaceholder(
    {
        issueType,
        title,
        description,
    }:
        {
            issueType: string,
            title: string,
            description: string,
        }
) {


    return (
        <div className="relative flex flex-col min-h-98 m-4 p-4 pl-0 bg-gray-100 rounded-md shadow-xl">
            <div>
                <InfoModal title={title} description={description} />
            </div>
            <img src="" alt="IssueExample" />
        </div>
    );
}