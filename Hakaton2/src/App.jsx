import { Route, Routes } from "react-router";
import { NotFound, TeamMemberPage } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route
          path="/team-member"
          element={
            <>
              <TeamMemberPage />
            </>
          }
        />
        <Route path="/favorite" element={<h1>Избранное</h1>} />
        <Route
          path="/*"
          element={
            <>
              <NotFound />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
