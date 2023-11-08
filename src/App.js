import "./App.css";
import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import SiderComponent from "./components/SiderComponent";
import GetActor from "./screens/GetFilm";

import GetFilm from "./screens/GetFilm";
import PostFilm from "./screens/PostFilm";

import DeleteFilm from "./screens/DeleteFilm";
import UpdateFilm from "./screens/UpdateFilm";

const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout
        style={{
          height: "100vh",
          width: "60vw",
          marginLeft: "20%",
          marginRight: "20%",
        }}
      >
        <HeaderComponent/>
        <Layout style={{backgroundColor:"white"}}>
          <SiderComponent/>
          <Content>
              <Routes>
                <Route path='/get' element={<GetFilm />} />
                <Route path='/post' element={<PostFilm />} />
                <Route path='/delete' element={<DeleteFilm/>}/>
                <Route path='/update' element={<UpdateFilm />}>
                </Route>
                <Route path='*' element={<GetActor />} />
              </Routes>
            </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
