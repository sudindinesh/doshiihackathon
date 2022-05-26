import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { baseData, boostData } from './graph-data';

const Container = styled.div(
  () =>
    css`
      width: 100%;
      min-height: 100vh;
      display: flex;
      align-items: center;
      flex-direction: column;
    `
);

const BarContainer = styled.div(
  () =>
    css`
      width: 800px;
    `
);

const SettingsContainer = styled.div(
  () =>
    css`
      margin: 25px 0;
      border: dotted 2px #7f7f7f;
      border-radius: 4px;
      width: 800px;
      height: 135px;
      padding: 20px;
    `
);

const NotificationsContainer = styled.div(
  () =>
    css`
      margin: 25px 0;
      border: dotted 2px #7f7f7f;
      border-radius: 4px;
      width: 800px;
      height: 28px;
      padding: 30px;
      display: flex;
      .notificationButton {
        margin-left: 5px;
      }
    `
);

const FormItemsContainer = styled.div(
  () =>
    css`
      display: flex;
      flex-direction: column;
      label {
        margin-top: 15px;
      }
      input {
        margin-left: 7px;
      }
      .submitButton {
        margin-top: 25px;
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
      <SettingsContainer>
        <form>
          <FormItemsContainer>
            <label>
              Discount limit based on no. of orders
              <input type="input" name="discountLimit" />
            </label>
            <label>
              Discount percentage
              <input type="input" name="discountPercentage" />
            </label>
            <div className="submitButton">
              <button type="submit">Submit</button>
            </div>
          </FormItemsContainer>
        </form>
      </SettingsContainer>
      <form>
        <NotificationsContainer>
          <div className="notificationButton">Boost:</div>
          <div className="notificationButton">
            <button onClick={() => setGraphData(baseData)}>Free</button>
          </div>
          <div className="notificationButton">
            <button onClick={() => setGraphData(boostData)}>Boost</button>
          </div>
          <div className="notificationButton">
            <button type="submit">Boost 2x</button>
          </div>
        </NotificationsContainer>
      </form>
      <BarContainer>
        <Bar height={150} options={options} data={graphData} />
      </BarContainer>
    </Container>
  );
};

export default App;
