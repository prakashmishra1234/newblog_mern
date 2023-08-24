import React from "react";
import { Box } from "@mui/material";

interface sources {
  id: string;
  name: string;
}
export interface articles {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: sources;
  title: string;
  url: string;
  urlToImage: string;
}

export interface NewsCardProps {
  data: articles;
}
interface filterOpt {
  key: string;
  value: string;
}
const countryfilter = [
  {
    key: "in",
    value: "India",
  },
  {
    key: "us",
    value: "United States",
  },
  {
    key: "ch",
    value: "China",
  },
  {
    key: "fr",
    value: "France",
  },
];

const Home = () => {
  const [news, setnews] = React.useState<articles[]>([]);
  const [country, setCountry] = React.useState<filterOpt>({
    key: "in",
    value: "India",
  });

  React.useEffect(() => {
    getNews();
  }, [country]);

  const getNews = () => {};

  return (
    <Box sx={{ display: "flex", flexDirection: { md: "row", xs: "column" } }}>
      Home
    </Box>
  );
};

export default Home;
