import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function ContentItem({ content }: { content: any }) {


    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="p-2 bg-white rounded-md shadow-xl">
            <h3 className="text-xl font-medium">{content.title}</h3>
            <div className="grid grid-cols-3 justify-between">
                <div className={classNames(
                            content.accuracy >= '99.0' ? 'text-green-400' : content.accuracy <= '98.9' && content.accuracy >= '86.0' ? 'text-blue-600' : 'text-red-400',
                            'flex flex-row mt-2'
                        )}>
                    <Stack spacing={2} direction="row">
                        <CircularProgress
                        style={{color: 'inherit'}}
                        variant="determinate" 
                        value={parseFloat(content.accuracy)} 
                        />
                    </Stack>
                    <p className="ml-2 -mt-1 self-center">{content.accuracy}%</p>
                </div>
                <div className="flex flex-col float-center">
                    <h6 className="text-lg">Source</h6>
                    <p className="text-blue-600">{content.source}</p>
                </div>
                <BsThreeDotsVertical className="text-4xl justify-self-end" />
            </div>
        </div>
    )
}