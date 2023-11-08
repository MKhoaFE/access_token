import React, { useState } from "react";
import { Button, Card, Space, Table, Tag } from "antd";
import axios from "axios";

const columns = [
  {
    title: "ID",
    dataIndex: "film_id",
    key: "film_id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "release_year",
    dataIndex: "release_year",
    key: "release_year",
  },
  {
    title: "rating",
    dataIndex: "rating",
    key: "rating",
  },
  {
    title: "length",
    dataIndex: "length",
    key: "length",
  },
  {
    title: "special_features",
    dataIndex: "special_features",
    key: "special_features",
  },
  {
    title: "replacement_cost",
    dataIndex: "replacement_cost",
    key: "replacement_cost",
  },
];

function GetFilm() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLoadData = () => {
    setLoading(true);
    axios.get("http://localhost:3000/Api/v1/films")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Button danger style={{ width: "100%", height: "4rem" }} onClick={handleLoadData}>
        GET Films
      </Button>
      <Card title="Actor list from SAKILA" style={{ width: "100%" }}>
        <Table columns={columns} dataSource={data} loading={loading} />
      </Card>
    </>
  );
}

export default GetFilm;