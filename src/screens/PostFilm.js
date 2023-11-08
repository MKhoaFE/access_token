// import { Button, Card, Form, Input, Space } from "antd";
// import React, { useState } from "react";
// import axios from "axios";

// function PostFilm() {
//   const [formData, setFormData] = useState({

//     Title: "",
//     Description: "",
//     Lid: "",
//     Duration: "",
//     Rate: "",
//     Length: "",
//     Language: "",
//     ReleaseYear: "",
//     Cost: "",
//     Rating: "",
//     Special: "",

//   });

//   const handleFormSubmit = async () => {
//     try {
//       const {

//         Title,
//         Description,
//         Lid,
//         Duration,
//         Rate,
//         Length,
//         Cost,
//         Rating,
//         Special,

//         Language,
//         ReleaseYear,
//       } = formData;
//       const response = await axios.post("http://localhost:3000/Api/v1/films", {

//         description: Description,
//         original_language_id: Lid,
//         title: Title,
//         rental_duration: Duration,
//         language_id: Language,
//         rental_rate: Rate,
//         length: Length,
//         replacement_cost: Cost,
//         release_year: ReleaseYear,
//         rating: Rating,
//         special_features: Special,

//       });
//       console.log("Film added successfully:", response.data);
//       setFormData({
//         Title: "",
//         Description: "",
//         Lid: "",
//         Duration: "",
//         Rate: "",
//         Length: "",
//         Cost: "",
//         Rating: "",
//         Special: "",
//         Language: "",
//         ReleaseYear: "",
//       });
//     } catch (error) {
//       console.error("Error adding film:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <>
//       <Button
//         danger
//         htmlType="button"
//         style={{ width: "100%", height: "4rem" }}
//         onClick={handleFormSubmit}
//       >
//         POST Film
//       </Button>
//       <Card title="Post a film to SAKILA" style={{ width: "100%" }}>
//         <Form
//           name="basic"
//           size="large"
//           labelCol={{
//             span: 4,
//           }}
//           wrapperCol={{
//             span: 26,
//           }}
//           style={{
//             width: "100%",
//           }}
//         >

//           <Form.Item label="Title" name="Title">
//             <Input
//               name="Title"
//               value={formData.Title}
//               onChange={handleInputChange}
//             />
//           </Form.Item>
//           <Form.Item label="Description" name="Description">
//             <Input
//               name="Description"
//               value={formData.Description}
//               onChange={handleInputChange}
//             />
//           </Form.Item>
//           <Form.Item label="Length" name="Length">
//             <Input
//               name="Length"
//               value={formData.Length}
//               onChange={handleInputChange}
//             />
//           </Form.Item>
//           <Form.Item label="Lid" name="Lid">
//             <Input
//               name="Lid"
//               value={formData.Lid}
//               onChange={handleInputChange}
//             />
//           </Form.Item>
//           <Form.Item label="Duration" name="Duration">
//             <Input
//               name="Duration"
//               value={formData.Duration}
//               onChange={handleInputChange}
//             />
//           </Form.Item>
//           <Form.Item label="Rate" name="Rate">
//             <Input
//               name="Rate"
//               value={formData.Rate}
//               onChange={handleInputChange}
//             />
//           </Form.Item>
//           <Form.Item label="Cost" name="Cost">
//             <Input
//               name="Cost"
//               value={formData.Cost}
//               onChange={handleInputChange}
//             />
//           </Form.Item>
//           <Form.Item label="Rating" name="Rating">
//             <Input
//               name="Rating"
//               value={formData.Rating}
//               onChange={handleInputChange}
//             />
//           </Form.Item>
//           <Form.Item label="Special" name="Special">
//             <Input
//               name="Special"
//               value={formData.Special}
//               onChange={handleInputChange}
//             />
//           </Form.Item>
//           <Form.Item label="Language" name="Language">
//             <Input
//               name="Language"
//               value={formData.Language}
//               onChange={handleInputChange}
//             />
//           </Form.Item>

//           <Form.Item label="Release Year" name="ReleaseYear">
//             <Input
//               name="ReleaseYear"
//               value={formData.ReleaseYear}
//               onChange={handleInputChange}
//             />
//           </Form.Item>
//         </Form>
//       </Card>
//     </>
//   );
// }

// export default PostFilm;


import React, { useState } from "react";
import axios from "axios";
import styles from "./App.module.css";
import { Button } from "antd";

const FilmsList = () => {
  const [films, setActors] = useState([]);

  const loadActors = () => {
    axios
      .get("http://localhost:3000/api/v1/films")
      .then((response) => {
        setActors(response.data);
      })
      .catch((error) => console.error("Error loading actors", error));
  };

  return (
    <div>

      <Button danger style={{ width: "100%", height: "4rem" }} onClick={loadActors}>
      Load Film List
      </Button>
      <div className={styles.actorsList}>
        <h4>Film List from SAKILA</h4>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>year release</th>
            </tr>
          </thead>
          <tbody>
            {films.map((film) => (
              <tr key={film.film_id}>
                <td>{film.film_id}</td>
                <td>{film.title}</td>
                <td>{film.description}</td>
                <td>{film.release_year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PostFilm = () => {
  const [Title, setFirstName] = useState("");
  const [ReleaseYear, setLastName] = useState(0);
  const [Description, setDescription] = useState("");
  const [Language, setLanguage] = useState(0);

  const handleCreate = () => {
    let data={
      title: Title,
      release_year: parseInt(ReleaseYear),
      description : Description,
      language_id: parseInt(Language),

    }
    axios
      .post("http://localhost:3000/api/v1/films", data)
      .then((response) => {
        console.log(" Film posted:", response.data);
        // Optionally, you can clear the input fields after successful creation
        setFirstName("");
        setLastName("");
      })
      .catch((error) => console.error("Error creating actor", error));
  };

  return (
    <div className={styles.formContainer}>
      <h2>Post A New Film</h2>
      <input
        type="text"
        placeholder="title"
        value={Title}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="number"
        placeholder="RL Year"
        value={ReleaseYear}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Language"
        value={Language}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <Button danger onClick={handleCreate}>Post Film</Button>
    </div>
  );
};

const App = () => {
  return (
    <div className={styles.appContainer}>
      <FilmsList />
      <PostFilm />
    </div>
  );
};

export default App;
