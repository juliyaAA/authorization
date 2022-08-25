import GlobalFonts from './fonts/fonts';
import Container from './styles/Container.style';
import GlobalStyle from './styles/Global.style';
import Header from './components/Header/Header';
import Form from './components/Form/Form';

function App() {
	return (
		<Container>
			<GlobalFonts />
			<GlobalStyle />
			<Header/>
			<Form/>
		</Container>
	);
}

export default App;
