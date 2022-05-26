import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { baseData, boost2Data, boostData } from './graph-data';

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
    `
);

const BarContainer = styled.div(
  () =>
    css`
      width: 800px;
      margin: 0 auto;
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
    `
);

const CardContainer = styled.div(props => ({
  backgroundColor: '#f2e6ed',
  borderRadius: '30px',
  padding: '30px',
  marginTop: '25px',
  width: '200px',
  height: '300px'
}))

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

  const [graphData, setGraphData] = useState(baseData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Average orders over past 60 days'
      }
    }
  };
  console.log(graphData);
  return (
    <Container data-testid="app-container">
      <div>
        <h1 className="campaign-header">
          Get smashing on your weekly sales!
        </h1>
        <WhiteContainer>
          <BarContainer>
            <Bar height={150} options={options} data={graphData} />
          </BarContainer>
        </WhiteContainer>
        <WhiteContainer>
          <CardContainer>
            <div className="notificationButton">
              <button onClick={(e) => {e.preventDefault(); setGraphData(baseData);}}>Free</button>
            </div>
          </CardContainer>
          <CardContainer>
            <div className="notificationButton">
              <button onClick={(e) => {e.preventDefault(); setGraphData(baseData);}}>Free</button>
            </div>
          </CardContainer>
          <CardContainer>
            <div className="notificationButton">
              <button onClick={(e) => {e.preventDefault(); setGraphData(baseData);}}>Free</button>
            </div>
          </CardContainer>
          <form>
            <NotificationsContainer>
              <div className="notificationButton">Boost:</div>

              <div className="notificationButton">
                <button onClick={(e) => {e.preventDefault(); setGraphData(boostData);}}>Boost</button>
              </div>
              <div className="notificationButton">
                <button onClick={(e) => {e.preventDefault(); setGraphData(boost2Data);}}>Boost 2x</button>
              </div>
            </NotificationsContainer>
          </form>
        </WhiteContainer>
      </div>
    </Container>
  );
};

export default App;
