import React, { useState } from "react";
import { Button, Card, Space, Table, Tag } from "antd";
import axios from "axios";



function DeleteFilm() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "ID",
      dataIndex: "film_id",
      key: "film_id",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button danger onClick={() => handleDelete(record.film_id)}>Delete</Button>
      ),
    },
  ];
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

  const handleDelete = (filmId) => {
    axios.delete(`http://localhost:3000/Api/v1/films/${filmId}`)
      .then(() => {
        setData(data.filter(film => film.film_id !== filmId));
        console.log("Deleted film:", filmId);
      })
      .catch((error) => {
        console.error("Error deleting film:", error);
      });
  };

  return (
    <>
      <Button danger style={{ width: "100%", height: "4rem" }} onClick={handleLoadData}>
        GET Films
      </Button>
      <Card title="Film list from SAKILA" style={{ width: "100%" }}>
        <Table columns={columns} dataSource={data} loading={loading} />
      </Card>
    </>
  );
}

export default DeleteFilm;