import React, { useState } from "react";
import { Button, Card, Space, Table,  Modal, Input } from "antd";
import axios from "axios";



function UpdateFilm() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
  const [updateData, setUpdateData] = useState({});
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
      title: "Action", 
      key: "action",
      render: (text, record) => (
        <Space size="small">
          <Button type="primary" onClick={() => handleUpdate(record)}>
            Update
          </Button>
        </Space>
      ),
    },
  ];
  const handleLoadData = () => {
    setLoading(true);
    axios
      .get("http://localhost:3000/Api/v1/films")
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

  const handleUpdate = (record) => {
    setUpdateData(record);
    setUpdateModalVisible(true);
  };

  const handleUpdateModalOk = () => {
    const updatedData = {
      film_id: updateData.film_id, 
      title: updateData.title, 
    };
  
    axios.put(`http://localhost:3000/Api/v1/films/${updateData.film_id}`, updatedData)
      .then((response) => {
        console.log("Dữ liệu đã được cập nhật thành công:", response.data);
        setUpdateModalVisible(false);
        handleLoadData(); 
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật dữ liệu:", error);
      });
  };

  const handleUpdateModalCancel = () => {
    setUpdateModalVisible(false);
  };

  return (
    <>
      <Button danger style={{ width: "100%", height: "4rem" }} onClick={handleLoadData}>
        GET Films
      </Button>
      <Card title="Actor list from SAKILA" style={{ width: "100%" }}>
        <Table columns={columns} dataSource={data} loading={loading} />
      </Card>

      <Modal
        title="Update Film"
        open={isUpdateModalVisible} 
        onOk={handleUpdateModalOk}
        onCancel={handleUpdateModalCancel}
      >
        <Input
          placeholder="Title"
          value={updateData.title}
          onChange={(e) => setUpdateData({ ...updateData, title: e.target.value })}
        />
      </Modal>
    </>
  );
}

export default UpdateFilm;