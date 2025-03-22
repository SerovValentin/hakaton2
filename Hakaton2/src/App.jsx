import { Route, Routes } from 'react-router';
import { NotFound, TeamMemberPage } from './pages';
import { TeamList } from './components/team-list/team-list';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<TeamList />} />
			<Route path='/favorite' element={<h1>Избранное</h1>} />
			<Route path='/team-member/:id' element={<TeamMemberPage />} />
			<Route
				path='/*'
				element={
					<>
						<NotFound />
					</>
				}
			/>
		</Routes>
	);
}

export default App;
