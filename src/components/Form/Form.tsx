import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

const Form: React.FC = () =>{
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/login" element={<Login />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
}
export default Form;