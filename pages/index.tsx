import React from 'react';
import { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import '../node_modules/react-vis/dist/style.css';
import Head from 'next/head'
import Loader from '../components/Loader'
import Sidebar from '../components/Sidebar';
import ContentItem from '../components/Charts/ContentItem';
import Dropdown from '../components/Charts/Dropdown';
import AreaSeriesChart from '../components/Charts/AreaSeriesChart';
import AccuracyChart from '../components/Charts/AccuracyChart';
import MultipleLineChart from '../components/Charts/MultipleLineChart';
import ConfusionMatrixChart from '../components/Charts/ConfusionMatrixChart';

const Home: NextPage = () => {

  const [loading, setLoading] = React.useState(true);
  const observePage = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        } else {
          entry.target.classList.remove('animated')
        }
      })
    })

    const elementsToAnimate = document.querySelectorAll('.to-animate')
    console.log(elementsToAnimate)
    elementsToAnimate.forEach((element) => observer.observe(element))
  }

  const [data, setData] = useState([
    { x: 0, y: 0 },
    { x: 1, y: .5 },
    { x: 2, y: .2 },
    { x: 3, y: .9 },
    { x: 4, y: .5 },
    { x: 5, y: .8 },
  ]);

  const [data2, setData2] = useState([
    { x: 0, y: 0 },
    { x: 1, y: .2 },
    { x: 2, y: .6 },
    { x: 3, y: .4 },
    { x: 4, y: .7 },
    { x: 5, y: .9 },
  ]);

  const [data3, setData3] = useState([
    { x: 0, y: 0 },
    { x: 1, y: 20 },
    { x: 2, y: 18 },
    { x: 3, y: 45 },
    { x: 4, y: 12 },
    { x: 5, y: 40 },
  ]);

  const [data4, setData4] = useState([
    { x: 0, y: 12 },
    { x: 1, y: 4 },
    { x: 2, y: 18 },
    { x: 3, y: 40 },
    { x: 4, y: 16 },
    { x: 5, y: 38 },
    { x: 6, y: 45 },
    { x: 7, y: 42 },
  ]);

  const exampleDataArray =
    [
      [
        { x: 0, y: 12 },
        { x: 1, y: 4 },
        { x: 2, y: 18 },
        { x: 3, y: 40 },
        { x: 4, y: 16 },
        { x: 5, y: 38 },
        { x: 6, y: 45 },
        { x: 7, y: 42 },
      ],
      [
        { x: 0, y: 2 },
        { x: 1, y: 18 },
        { x: 2, y: 13 },
        { x: 3, y: 32 },
        { x: 4, y: 28 },
        { x: 5, y: 40 },
        { x: 6, y: 14 },
        { x: 7, y: 45 },
      ],
      [
        { x: 0, y: 16 },
        { x: 1, y: 24 },
        { x: 2, y: 14 },
        { x: 3, y: 34 },
        { x: 4, y: 22 },
        { x: 5, y: 38 },
        { x: 6, y: 28 },
        { x: 7, y: 36 },
      ]
    ]

  const [data5, setData5] = useState([
    { x: "Conclusions", y: "Conclusions", color: 2, label: "2" },
    { x: "Conclusions", y: "Results", color: 1, label: "1" },
    { x: "Conclusions", y: "Methods", color: 6, label: "6" },
    { x: "Results", y: "Conclusions", color: 4, label: "4" },
    { x: "Results", y: "Results", color: 10, label: "10" },
    { x: "Results", y: "Methods", color: 5, label: "5" },
    { x: "Methods", y: "Conclusions", color: 9, label: "9" },
    { x: "Methods", y: "Results", color: 2, label: "2" },
    { x: "Methods", y: "Methods", color: 1, label: "1" },
  ]);

  const [data6, setData6] = useState([
    { x: "Conclusions", y: "Conclusions", color: 3, label: "3" },
    { x: "Conclusions", y: "Results", color: 2, label: "2" },
    { x: "Conclusions", y: "Methods", color: 4, label: "4" },
    { x: "Results", y: "Conclusions", color: 8, label: "8" },
    { x: "Results", y: "Results", color: 8, label: "8" },
    { x: "Results", y: "Methods", color: 2, label: "2" },
    { x: "Methods", y: "Conclusions", color: 6, label: "6" },
    { x: "Methods", y: "Results", color: 9, label: "9" },
    { x: "Methods", y: "Methods", color: 3, label: "3" },
  ]);

  const updateGraph = () => {
    setData(data2)
    setData2(data)
  }

  const [selectedFilter, setSelectedFilter]: [selectedFilter: any, setSelectedFilter: any] = useState([])
  const [selectedTopic, setSelectedTopic]: [selectedFilter: any, setSelectedFilter: any] = useState([])

  const filters = [
    { id: 0, name: 'F1 - score' },
    { id: 1, name: 'Accuracy' },
    { id: 2, name: 'Phi Coefficient' },
    { id: 3, name: 'Recall' },
    { id: 4, name: 'Precision' },
    { id: 5, name: 'Specificity' },
    { id: 6, name: 'Sensitivity' },
  ]

  const [contentArray, setContentArray]: [selectedFilter: any, setSelectedFilter: any] = useState([{}])

  const contentArray1 = [
    { id: 0, title: 'Photo - 103948', accuracy: '98.8', source: 'blue_mattress_queen.png' },
    { id: 1, title: 'Photo - 100042', accuracy: '97.8', source: 'RedWagon.png' },
    { id: 2, title: 'Photo - 124648', accuracy: '82.3', source: 'doggy_car_seat.jpg' },
    { id: 3, title: 'Photo - 24921', accuracy: '99.1', source: 'blue_mattress_king.png' },
    { id: 4, title: 'Photo - 28326', accuracy: '96.4', source: 'HalloweenDecor.jpg' },
    { id: 5, title: 'Photo - 34985', accuracy: '98.4', source: 'taco-cart.png' },
    { id: 6, title: 'Photo - 48263', accuracy: '99.2', source: 'pig_cat_pajamas.png' },
  ]

  const contentArray2 = [
    { id: 1, title: 'Photo - 200042', accuracy: '99.4', source: 'BlueWagon.png' },
    { id: 2, title: 'Photo - 224648', accuracy: '81.4', source: 'booster-seat.jpg' },
    { id: 3, title: 'Photo - 24921', accuracy: '99.3', source: 'burgerking.png' },
    { id: 4, title: 'Photo - 38326', accuracy: '95.8', source: 'Canteloupe.jpg' },
    { id: 5, title: 'Photo - 44985', accuracy: '98.4', source: 'ramen.png' },
    { id: 6, title: 'Photo - 58263', accuracy: '83.5', source: 'cat_pants.png' },
  ]

  const topics = [
    { id: 0, name: 'Topic 1' },
    { id: 1, name: 'Topic 2' },
  ]

  const updateContentItems = () => {
    selectedTopic.id === 0 ? (
      setContentArray(contentArray2)
    ) : selectedTopic.id === 1 ? (
      setContentArray(contentArray1)
    ) : (null)
  }

  useEffect(() => {
    setLoading(false);
    setSelectedFilter(filters[0])
    setSelectedTopic(topics[0])
    setContentArray(contentArray1)
    for (let data in exampleDataArray) {
      console.log(exampleDataArray[data])
    }
  }, []);

  return (


    <div onLoad={() => { observePage() }}>
      <Head>
        <title>Branch</title>
        <meta name="description" content="With Branch any business can implement ML in less than two sprints and couple of developers." />
      </Head>

      {!loading ? (
        <>
          <Sidebar />
          <div className="h-screen w-screen pl-12 md:pl-16 flex flex-col overflow-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full">
              <AccuracyChart
                data={data}
                XAxisLabel="Time (days)"
                YAxisLabel={selectedFilter.name}
                title="F1 - Score"
                description="This graph shows the F1 scores of the selected filter over time.
                  The F1-score, is a measure of a model's accuracy on a dataset. 
                  It is used to evaluate binary classification systems, which classify examples into 'positive' or 'negative'.
                  F1-score ranges between 0 and 1. The closer it is to 1, the better the model."
                dropdownData={filters}
                setGraph={() => { updateGraph() }}
                selected={selectedFilter}
                setSelected={setSelectedFilter}
              />
              <AreaSeriesChart
                data={data3}
                XAxisLabel="Time (days)"
                YAxisLabel="Feedback items"
                title="Feedback items"
                description="The number of feedback items that have been recieved on the given filter over a period of time."
                hasDropdown={false}
                dropdownData={[]}
                setGraph={updateGraph}
                selected={selectedFilter}
                setSelected={setSelectedFilter}
              />
              <MultipleLineChart
                dataArray={exampleDataArray}
                XAxisLabel="Time (days)"
                YAxisLabel=""
                title="Metrics"
                description="Different types of metrics used to evaluate your ML system over time."
                hasDropdown={false}
                dropdownData={[]}
                setGraph={updateGraph}
                selected={selectedFilter}
                setSelected={setSelectedFilter}
              />
              {/* <ConfusionMatrixChart
                data={data5}
                XAxisLabel="Predicted"
                YAxisLabel="Actual"
                title="Commonly confused categories"
                description="Sometimes a model can have labels or categories that are very similar and this can cause the model to be less accurate. 
                  An example of this could be 'World Post' and 'The World Post'. This chart represents which categories are being confused and to what extent."
                hasDropdown={false}
                dropdownData={[]}
                setGraph={updateGraph}
                selected={selectedFilter}
                setSelected={setSelectedFilter}
              /> */}
              <div className="p-4">
                <div className="flex flex-col md:flex-row text-center justify-between">
                  <h1 className="ml-0 md:ml-8 mb-4 text-2xl font-medium">Content Items</h1>
                  <span className="text-xl text-blue-600">&#x2022; {contentArray.length}</span>
                  <div className="relative mx-auto md:mx-0 mt-4 md:mt-0 mb-10 md:mb-0">
                    <Dropdown alignRight={true} options={topics} handleUpdate={updateContentItems} selected={selectedTopic} setSelected={setSelectedTopic} />
                  </div>
                </div>
                <div className="md:max-h-96 flex flex-col gap-4 rounded-md overflow-y-scroll">
                  {contentArray ? contentArray.map((content: { id: React.Key | null | undefined; }) => <ContentItem key={content.id} content={content} />) : null}
                </div>
              </div>
            </div>
            <div onClick={() => { updateGraph() }} className="h-10 w-40 ml-4 my-4 pt-2 text-center rounded-md bg-blue-600 text-white border border-blue-600 cursor-pointer hover:bg-transparent hover:text-blue-600">
              Update data
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}

    </div>
  )
}

export default Home
