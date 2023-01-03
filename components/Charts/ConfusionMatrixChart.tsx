import React from 'react';
import { VerticalGridLines, HorizontalGridLines, XAxis, YAxis, FlexibleXYPlot, GradientDefs, HeatmapSeries, LabelSeries } from 'react-vis';
import Dropdown from './Dropdown';
import InfoModal from './InfoModal';
import IssueIndicator from './IssueIndicator';


export default function ConfusionMatrixChart(
    {
        data,
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
            data: Array<any>,
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
                        yType="ordinal"
                        colorType="linear"
                        colorDomain={[0, 5, 10]}
                        colorRange={["#2563EB", "#29D3E7", "#34D399"]}
                        height={300}
                        className="max-w-5/6 mt-2 mb-2 -ml-4 mr-4 rounded-md">
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis top={(255)} style={{ fill: 'black', fontSize: '14px' }} hideLine />
                        <YAxis left={(10)} style={{ fill: 'black', fontSize: '14px' }} tickLabelAngle={270} top={-20} hideLine />
                        <GradientDefs>
                            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="blue" stopOpacity={0.4} />
                                <stop offset="100%" stopColor="lightblue" stopOpacity={0.4} />
                            </linearGradient>
                        </GradientDefs>
                        <HeatmapSeries animation="gentle" data={data} stroke="#ffffff" style={{ strokeWidth: 2 }} />
                        <LabelSeries
                            style={{ pointerEvents: 'none', fill: 'white' }}
                            data={data}
                            labelAnchorX="middle"
                            labelAnchorY="baseline"
                        />
                    </FlexibleXYPlot>

                </div>
                <div className="h-3/4 w-6 -mt-8 -ml-5 self-center float-right rounded-md bg-gradient-to-b from-green-400 via-cyan-300 to-blue-600">

                </div>
            </div>

            <h3 className="text-center font-bold">{XAxisLabel}</h3>
        </div>
    );
}