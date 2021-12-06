import cityImg from "../images/city.png";
import localCityImg from "../images/local-city.png";
import islandImg from "../images/island.png";

const services = [
  {
    id: 1,
    cat: "都市エリア",
    set: [
      {
        image: cityImg,
        desc: "東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        url: "/",
      },
      {
        image: cityImg,
        desc: "東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        url: "/",
      },
      {
        image: cityImg,
        desc: "東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    cat: "地方エリア",
    set: [
      {
        desc: "地方都市を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        image: localCityImg,
        url: "/",
      },
      {
        desc: "地方都市を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        image: localCityImg,
        url: "/",
      },
      {
        desc: "地方都市を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        image: localCityImg,
        url: "/",
      },
    ],
  },
  {
    id: 3,
    cat: "離島エリア",
    set: [
      {
        desc: "離島を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        image: islandImg,
        url: "/",
      },
      {
        desc: "離島を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        image: islandImg,
        url: "/",
      },
      {
        desc: "離島を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        image: islandImg,
        url: "/",
      },
    ],
  },
];

export default services;
