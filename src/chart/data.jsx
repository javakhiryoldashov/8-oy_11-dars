export const data = {
  labels: [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ],

  datasets: [
    {
      label: "Phone Usage (seconds)",
      data: [
        600, 0, 0, 0, 0, 0, 0, 600, 1000, 2700, 3000, 3300, 3600, 3900, 3800,
        3800, 1000, 120, 600, 3200, 3000, 3000, 3700, 3000,
      ],
      fill: true,
      tension: 0.2,
      backgroundColor: "rgba(54, 162, 235, 0.4)",
      borderColor: "rgba(54, 162, 235, 1)",
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Phone Usage Throughout the Day",
    },
  },
};
