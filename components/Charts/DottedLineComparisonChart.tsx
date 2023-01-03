import React from 'react';
import { VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries, FlexibleXYPlot, GradientDefs, DiscreteColorLegend } from 'react-vis';
import Dropdown from './Dropdown';
import InfoModal from './InfoModal';
import IssueIndicator from './IssueIndicator';


export default function DottedLineComparisonChart(
    {
        lineData,
        lineData2,
        legendItems,
        XAxisLabel,
        YAxisLabel,
        title,
        description,
        hasDropdown,
        dropdownData,
        hasIssue,
        setGraph,
        selected,
        setSelected
    }:
        {
            lineData: Array<any>,
            lineData2: Array<any>,
            legendItems: Array<any>,
            XAxisLabel: string,
            YAxisLabel: string,
            title: string,
            description: string,
            hasDropdown: boolean,
            dropdownData: Array<any>,
            hasIssue: boolean,
            setGraph: Function,
            selected: Array<any>,
            setSelected: Function
        }
) {


    return (
        <div className="relative flex flex-col min-h-98 m-4 p-4 pl-0 bg-gray-100 rounded-md shadow-xl">
            {hasDropdown ? (
                <div className="absolute left-0 top-2">
                    <Dropdown alignRight={false} options={dropdownData} handleUpdate={setGraph} selected={selected} setSelected={setSelected} />
                </div>
            ) : (null)
            }

            {hasIssue ? (
                <IssueIndicator />
            ) : (null)
            }

            <div className="absolute top-4 left-24 text-xl font-bold">
                {title}
            </div>
            <div>
                <InfoModal title={title} description={description} />
            </div>
            <div className="flex">
                <h3 className="yAxis ml-4 self-center rotate-180 font-bold whitespace-nowrap">{YAxisLabel}</h3>
                <div className="w-5/6">
                    <FlexibleXYPlot
                        xType="ordinal"
                        yType="linear"
                        colorType="linear"
                        height={300}
                        className="max-w-5/6 mt-2 mb-2 ml-4 mr-4 rounded-md">
                        <DiscreteColorLegend className="absolute top-4 left-14 text-black font-extrabold" orientation="vertical" width={300} items={legendItems} />
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis top={(255)} style={{ fill: 'black', fontSize: '14px' }} hideLine />
                        <YAxis left={(10)} style={{ fill: 'black', fontSize: '14px' }} hideLine />
                        <GradientDefs>
                            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="blue" stopOpacity={0.4} />
                                <stop offset="100%" stopColor="lightblue" stopOpacity={0.4} />
                            </linearGradient>
                        </GradientDefs>
                        
                        <LineSeries animation="gentle" data={lineData2} strokeStyle="dashed" color={legendItems[0].color} style={{ strokeWidth: 3 }} curve={'curveMonotoneX'} />
                        <LineSeries animation="gentle" data={lineData} color="#2563EB" style={{ strokeWidth: 4 }} curve={'curveMonotoneX'} />
                    </FlexibleXYPlot>
                </div>
            </div>

            <h3 className="text-center font-bold">{XAxisLabel}</h3>
        </div>
    );
}