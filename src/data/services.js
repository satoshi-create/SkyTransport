import cityImg from "../images/city.png";
import localCityImg from "../images/local-city.png";
import islandImg from "../images/island.png";

const services = [
  {
    id: 1,
    cat: "都市エリア",
    cls:"active-btn-primary-02",
    set: [
      {
        image: cityImg,
        desc: "東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        url: "/",
        cls:"btn-primary-02"
      },
      {
        image: cityImg,
        desc: "東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        url: "/",
        cls:"btn-primary-02"
      },
      {
        image: cityImg,
        desc: "東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        url: "/",
        cls:"btn-primary-02"
      },
    ],
  },
  {
    id: 2,
    cat: "地方エリア",
    cls:"active-btn-primary-01",
    set: [
      {
        desc: "地方都市を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        image: localCityImg,
        url: "/",
        cls:"btn-primary-01"
      },
      {
        desc: "地方都市を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        image: localCityImg,
        url: "/",
        cls:"btn-primary-01"
      },
      {
        desc: "地方都市を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        image: localCityImg,
        url: "/",
        cls:"btn-primary-01"
      },
    ],
  },
  {
    id: 3,
    cat: "離島エリア",
    cls:"active-btn-primary-03",
    set: [
      {
        desc: "離島を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        image: islandImg,
        url: "/",
        cls:"btn-primary-03"
      },
      {
        desc: "離島を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        image: islandImg,
        url: "/",
        cls:"btn-primary-03"
      },
      {
        desc: "離島を中心とした都市部で、ドローン宅配の実証実験をおこなっています。",
        image: islandImg,
        url: "/",
        cls:"btn-primary-03"
      },
    ],
  },
];

export default services;
