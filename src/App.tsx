import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { baseData, orderData } from './graph-data';

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
        margin-top: 20px;
        font-weight: 500;
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
        width: 75px;
        height: 75px;
      }
      .card-content {
        margin-left: 5px;
        h3 {
          margin: 10px 0 5px 0
        }
        p {
          margin: 0;
        }
      }
    `
);

interface CardContainerProps {
  isSelected: boolean
}

const CardContainer = styled.div((props: CardContainerProps) => ({
  borderWidth: '2px',
  borderRadius: '60px',
  borderColor: props.isSelected ? '#005059' : '#dedede',
  borderStyle: 'solid',
  padding: '15px 30px',
  marginTop: '25px',
  width: '200px',
}));


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
    instagram: true
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
        display: true,
        text: 'Average orders over past 60 days'
      }
    }
  };

  const handleClick = (id: string) => {
    const selectedStateCopy = JSON.parse(JSON.stringify(selectedStates));
    const currentState = selectedStates[id];
    const newState = !currentState;
    selectedStateCopy[id] = newState;
    setSelectedStates(selectedStateCopy);

    const graphDataCopy = JSON.parse(JSON.stringify(graphData));
    graphDataCopy.datasets[1].data = graphData.datasets[1].data.map((item, index) => newState ? item + orderData[id][index] : item - orderData[id][index]);
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
            <h1 className="selection-header">
              Fill your plate with apps to see your sales change!
            </h1>
            <h1 className="selection-category-header">
              Platforms
            </h1>
            <CardContainer className="card-container" isSelected={selectedStates.instagram} onClick={() => handleClick('instagram')}>
              <CardSubContainer>
                <img src="./instagram.png"/>
                <div className="card-content">
                  <h3>Instagram</h3>
                  <p>Social Media</p>
                </div>
              </CardSubContainer>
            </CardContainer>
          </WhiteContainer>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default App;
