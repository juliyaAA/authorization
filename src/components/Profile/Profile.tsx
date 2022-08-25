import { useNavigate } from "react-router-dom";
import ButtonExit from "../../styles/ButtonExit.style";

const Profile = () => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem("email") || ('"steve.jobs@example.com"'));
	const exit = () => {
		localStorage.clear();
		navigate('/login');
	}
	return (
		<div className='form'>
			<h3>Здравствуйте, <span> {user}</span></h3>
			<ButtonExit onClick={exit}>Выйти</ButtonExit>
		</div>

	)
}
export default Profile;