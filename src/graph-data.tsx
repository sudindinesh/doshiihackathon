const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const baseData = {
  labels,
  datasets: [
    {
      label: 'Average Orders',
      data: [11, 15, 12, 22, 25, 30, 4],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Predicted orders',
      data: [13, 17, 17, 23, 25, 30, 10],
      backgroundColor: 'rgba(63,188,253,0.5)'
    }
  ]
};

export const boostData = {
  labels,
  datasets: [
    {
      label: 'Average Orders',
      data: [11, 15, 12, 22, 25, 30, 4],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Predicted orders',
      data: [15, 19, 20, 23, 25, 30, 15],
      backgroundColor: 'rgba(63,188,253,0.5)'
    }
  ]
};

export const boost2Data = {
  labels,
  datasets: [
    {
      label: 'Average Orders',
      data: [11, 15, 12, 22, 25, 30, 4],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Predicted orders',
      data: [15, 20, 25, 23, 25, 30, 25],
      backgroundColor: 'rgba(63,188,253,0.5)'
    }
  ]
};