import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { baseData, platformsOrderData, platforms, appOrderData, apps } from './graph-data';

const Container = styled.div(
  () =>
    css`
      width: 100%;
      background-color: #7C004B;
      min-height: 100vh;
      display: flex;
      align-items: center;
      flex-direction: column;
      .campaign-header {
        font-size: 38px;
        color: #fff790
      }
      .selection-header {
        margin-top: 50px;
        font-weight: 500;
        font-size: 25px;
        color: #B3B3B3;
      }
      .selection-category-header {
        margin-top: 35px;
        font-weight: 600;
        font-size: 25px;
        color: #000000;
      }
    `
);

const BarContainer = styled.div(
  () =>
    css`
      width: 800px;
      margin: 0 auto;
    `
);

const NavContainer = styled.div(
  () =>
    css`
      display: flex;
      flex-direction: row;
      background-color: #7C004B;
      padding: 30px;
      img {
        height: 22px;
        width: 80px;
      }
    `
);


const WhiteContainer = styled.div(
  () =>
    css`
      background-color: white;
      border-radius: 30px;
      padding: 30px;
      margin-top: 25px;
      width: 1000px;
      margin-bottom: 50px;
      .card-container:hover {
        background-color: #F2F6F7;
        cursor: pointer;
      } 
    `
);

const CardSubContainer = styled.div(
  () =>
    css`
      display: flex;
      flex-direction: row;
      img {
        width: 50px;
        height: 50px;
      }
      .card-content {
        margin-left: 10px;
        h3 {
          margin: 7px 0 5px 0
        }
        p {
          margin: 0;
          font-size: 12px;
        }
      }
    `
);

interface CardContainerProps {
  isSelected: boolean
}

const CardContainer = styled.div((props: CardContainerProps) => ({
  borderWidth: '3px',
  borderRadius: '60px',
  borderColor: props.isSelected ? '#005059' : '#dedede',
  borderStyle: 'solid',
  padding: '15px 18px',
  marginTop: '15px',
  width: '200px',
}));

const CardsContainer = styled.div(
  () =>
    css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    `
);

const NotificationsContainer = styled.div(
  () =>
    css`
      margin: 25px 0;
      width: 800px;
      height: 28px;
      padding: 30px;
      display: flex;
      .notificationButton {
        margin-left: 5px;
      }
    `
);

const App = (): React.ReactElement => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  // const initialSelectState = [{ id: 'instagram', isSelected: false }];
  const initialSelectState = {
    instagram: true,
    facebook: false,
    cheddar: false,
    commbank: false,
    bobsburger: true,
    mailchimp: false,
    twilio: false,
    tiktok: false,
    deliveroo: true,
    doordash: true,
    chewzie: false,
    meandyou: false,
    mryum: false,
    dq: false,
    tablecheck: false,
    opentable: false
  };

  interface GraphData {
    labels: string[],
    datasets: {
      label: string,
      data: number[],
      backgroundColor: any
    }[]
  }

  const [graphData, setGraphData] = useState<GraphData>(baseData);
  const [selectedStates, setSelectedStates] = useState<{ [key: string]: boolean }>(initialSelectState);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: false,
        text: 'Average orders over past 60 days'
      }
    }
  };

  const handleClickPlatforms = (id: string) => {
    const selectedStateCopy = JSON.parse(JSON.stringify(selectedStates));
    const currentState = selectedStates[id];
    const newState = !currentState;
    selectedStateCopy[id] = newState;
    setSelectedStates(selectedStateCopy);

    const graphDataCopy = JSON.parse(JSON.stringify(graphData));
    graphDataCopy.datasets[1].data = graphData.datasets[1].data.map((item, index) => newState ? item + platformsOrderData[id][index] : item - platformsOrderData[id][index]);
    setGraphData(graphDataCopy);
  }

  const handleClickApps = (id: string) => {
    const selectedStateCopy = JSON.parse(JSON.stringify(selectedStates));
    const currentState = selectedStates[id];
    const newState = !currentState;
    selectedStateCopy[id] = newState;
    setSelectedStates(selectedStateCopy);

    const graphDataCopy = JSON.parse(JSON.stringify(graphData));
    graphDataCopy.datasets[1].data = graphData.datasets[1].data.map((item, index) => newState ? item + appOrderData[id][index] : item - appOrderData[id][index]);
    setGraphData(graphDataCopy);
  }

  return (
    <React.Fragment>
      <NavContainer>
        <img src={'./doshii logo.svg'}/>
      </NavContainer>
      <Container data-testid="app-container">
        <div>
          <h1 className="campaign-header">
            Get smashing on your weekly sales!
          </h1>
          <WhiteContainer>
            <h2 style={{ fontWeight: '600', fontSize: '30px' }}>
              Sales
            </h2>
            <BarContainer>
              <Bar height={150} options={options} data={graphData} />
            </BarContainer>
            <h1 className="selection-category-header">
              Platforms
            </h1>
            <CardsContainer>
              {platforms.map(platform => {
                return <CardContainer className="card-container" isSelected={selectedStates[platform.id]} onClick={() => handleClickPlatforms(platform.id)}>
                  <CardSubContainer>
                    <img src={`./${platform.id}.png`}/>
                    <div className="card-content">
                      <h3>{platform.name}</h3>
                      <p>{platform.type}</p>
                    </div>
                  </CardSubContainer>
                </CardContainer>
              })}
            </CardsContainer>
            <h1 className="selection-category-header">
              Apps
            </h1>
            <CardsContainer>
              {apps.map(app => {
                return <CardContainer className="card-container" isSelected={selectedStates[app.id]} onClick={() => handleClickApps(app.id)}>
                  <CardSubContainer>
                    <img src={`./${app.id}.png`}/>
                    <div className="card-content">
                      <h3>{app.name}</h3>
                      <p>{app.type}</p>
                    </div>
                  </CardSubContainer>
                </CardContainer>
              })}
            </CardsContainer>
          </WhiteContainer>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default App;
