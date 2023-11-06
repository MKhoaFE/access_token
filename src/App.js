import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import SiderComponent from "./components/SiderComponent";
import UpdateActor from "./screens/UpdateActor";
import DetailActor from "./screens/DetailActor";
import DeleteActor from "./screens/DeleteActor";
import PostActor from "./screens/PostActor";
import GetActor from "./screens/GetActor";

const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout
        style={{
          height: "100vh",
          width: "80vw",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <HeaderComponent/>
        <Layout>
          <SiderComponent/>
          <Content>
              <Routes>
                <Route path='/get' element={<GetActor />} />
                <Route path='/post' element={<PostActor />} />
                <Route path='/detail' element={<DetailActor />} />
                <Route path='/delete' element={<DeleteActor/>}/>
                <Route path='/update' element={<UpdateActor />}>
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
