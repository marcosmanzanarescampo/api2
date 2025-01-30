let express = require("express");
let app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/:id", function (req, res) {
  // res.send("hi!");
  const id = parseInt(req.params.id, 10);

  if (id >= 0 && id < data.length) {
    res.json(data[id]);
  } else {
    res.status(404).json({ message: "élement pas trouvé" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// data
const data = [
  {
    createdAt: "2025-01-29T17:54:15.169Z",
    name: "538",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1239.jpg",
    id: "1",
  },
  {
    createdAt: "2025-01-29T13:46:59.485Z",
    name: "330",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/259.jpg",
    id: "2",
  },
  {
    createdAt: "2025-01-29T16:15:57.129Z",
    name: "7420",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/715.jpg",
    id: "3",
  },
  {
    createdAt: "2025-01-29T12:50:15.389Z",
    name: "8355",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/614.jpg",
    id: "4",
  },
  {
    createdAt: "2025-01-29T16:46:23.429Z",
    name: "166",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/600.jpg",
    id: "5",
  },
  {
    createdAt: "2025-01-30T02:09:38.796Z",
    name: "34054",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/447.jpg",
    id: "6",
  },
  {
    createdAt: "2025-01-29T11:29:50.266Z",
    name: "19901",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1204.jpg",
    id: "7",
  },
  {
    createdAt: "2025-01-29T21:24:09.972Z",
    name: "0110",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/884.jpg",
    id: "8",
  },
  {
    createdAt: "2025-01-29T13:15:17.417Z",
    name: "46065",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/404.jpg",
    id: "9",
  },
  {
    createdAt: "2025-01-30T04:57:57.684Z",
    name: "3306",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/492.jpg",
    id: "10",
  },
  {
    createdAt: "2025-01-29T22:07:12.629Z",
    name: "3011",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/548.jpg",
    id: "11",
  },
  {
    createdAt: "2025-01-29T19:25:01.868Z",
    name: "62024",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/828.jpg",
    id: "12",
  },
  {
    createdAt: "2025-01-30T09:20:07.117Z",
    name: "9978",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/49.jpg",
    id: "13",
  },
  {
    createdAt: "2025-01-30T01:35:59.155Z",
    name: "33465",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/694.jpg",
    id: "14",
  },
  {
    createdAt: "2025-01-30T07:55:43.882Z",
    name: "2838",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/344.jpg",
    id: "15",
  },
  {
    createdAt: "2025-01-29T11:07:10.206Z",
    name: "481",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/383.jpg",
    id: "16",
  },
  {
    createdAt: "2025-01-30T00:49:36.823Z",
    name: "7197",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/574.jpg",
    id: "17",
  },
  {
    createdAt: "2025-01-30T04:52:56.979Z",
    name: "8946",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/552.jpg",
    id: "18",
  },
  {
    createdAt: "2025-01-30T09:17:21.416Z",
    name: "23742",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/203.jpg",
    id: "19",
  },
  {
    createdAt: "2025-01-29T11:05:12.349Z",
    name: "6953",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1183.jpg",
    id: "20",
  },
  {
    createdAt: "2025-01-29T22:12:24.964Z",
    name: "00712",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/258.jpg",
    id: "21",
  },
  {
    createdAt: "2025-01-29T12:42:56.025Z",
    name: "06317",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
    id: "22",
  },
  {
    createdAt: "2025-01-30T01:25:41.679Z",
    name: "36012",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/861.jpg",
    id: "23",
  },
  {
    createdAt: "2025-01-30T03:17:27.925Z",
    name: "278",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1209.jpg",
    id: "24",
  },
  {
    createdAt: "2025-01-29T18:10:17.761Z",
    name: "5002",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/93.jpg",
    id: "25",
  },
  {
    createdAt: "2025-01-30T02:08:09.925Z",
    name: "07069",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/631.jpg",
    id: "26",
  },
  {
    createdAt: "2025-01-29T14:43:59.102Z",
    name: "914",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/168.jpg",
    id: "27",
  },
  {
    createdAt: "2025-01-29T16:41:33.494Z",
    name: "118",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/848.jpg",
    id: "28",
  },
  {
    createdAt: "2025-01-29T10:34:05.458Z",
    name: "081",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/609.jpg",
    id: "29",
  },
  {
    createdAt: "2025-01-29T21:25:07.420Z",
    name: "451",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/669.jpg",
    id: "30",
  },
  {
    createdAt: "2025-01-29T23:33:56.319Z",
    name: "36317",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/22.jpg",
    id: "31",
  },
  {
    createdAt: "2025-01-29T16:32:31.725Z",
    name: "67018",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/393.jpg",
    id: "32",
  },
  {
    createdAt: "2025-01-29T13:00:33.236Z",
    name: "007",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/836.jpg",
    id: "33",
  },
  {
    createdAt: "2025-01-29T18:41:32.306Z",
    name: "4866",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/51.jpg",
    id: "34",
  },
  {
    createdAt: "2025-01-30T05:04:12.188Z",
    name: "667",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/602.jpg",
    id: "35",
  },
  {
    createdAt: "2025-01-30T03:14:43.591Z",
    name: "6352",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1181.jpg",
    id: "36",
  },
  {
    createdAt: "2025-01-29T11:23:53.818Z",
    name: "08812",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/68.jpg",
    id: "37",
  },
  {
    createdAt: "2025-01-29T22:07:48.074Z",
    name: "14151",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1004.jpg",
    id: "38",
  },
  {
    createdAt: "2025-01-29T10:11:32.628Z",
    name: "6010",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1128.jpg",
    id: "39",
  },
  {
    createdAt: "2025-01-29T18:48:14.920Z",
    name: "749",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/164.jpg",
    id: "40",
  },
  {
    createdAt: "2025-01-30T07:45:07.981Z",
    name: "76196",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/643.jpg",
    id: "41",
  },
  {
    createdAt: "2025-01-30T09:24:40.510Z",
    name: "9191",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/510.jpg",
    id: "42",
  },
  {
    createdAt: "2025-01-29T22:38:57.152Z",
    name: "8985",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/546.jpg",
    id: "43",
  },
  {
    createdAt: "2025-01-29T23:46:54.714Z",
    name: "418",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/452.jpg",
    id: "44",
  },
  {
    createdAt: "2025-01-29T11:45:01.931Z",
    name: "1796",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/661.jpg",
    id: "45",
  },
  {
    createdAt: "2025-01-30T05:05:08.085Z",
    name: "6925",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/200.jpg",
    id: "46",
  },
  {
    createdAt: "2025-01-30T05:34:40.503Z",
    name: "774",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/295.jpg",
    id: "47",
  },
  {
    createdAt: "2025-01-30T05:19:49.243Z",
    name: "162",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1201.jpg",
    id: "48",
  },
  {
    createdAt: "2025-01-29T10:39:13.851Z",
    name: "85142",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/675.jpg",
    id: "49",
  },
  {
    createdAt: "2025-01-29T21:21:31.679Z",
    name: "69773",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1086.jpg",
    id: "50",
  },
];
