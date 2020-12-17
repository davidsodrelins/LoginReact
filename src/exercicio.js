import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react'

//classe responsável pelo login
class Exercicio extends Component {
	//construtor é um metodo especial para iniciar um objeto criado pela classe
	constructor(props){
		//o super é usado para chamar o o constructor de ma classe pai
	  	super(props);
	    //criando as váriaveis de controle  
	    this.state={
	    	username:'',
	    	password:'',
	    	email: '',
	    	logado: false
	    }
		//para atualizar a variável do input
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleClick = this.handleClick.bind(this); 
		}


	//evento de click do botão
	handleClick() {
		this.handleSubmit();
		console.log("click");
	}

	//Evento de permissao para efetuar o login
	handleSubmit(event) {
		//dados dos usuários
	    var data = [
			{ username: 'Amanda', password: 'sjba', email: 'amanda@ufba.br' },
			{ username: 'Carina', password: 'sjba', email: 'carina@ufba.br' }, 
		    { username: 'David', password: 'sjba', email: 'david@ufba.br' },
		    { username: 'Eduardo', password: 'sjba', email: 'eduardo@ufba.br'},
		    { username: 'Gabriel', password: 'sjba', email: 'gabriel@ufba.br' },
		    { username: 'Joubet', password: 'sjba', email: 'joubert@ufba.br' },
		    { username: 'Juliana', password: 'sjba', email: 'juliana@ufba.br' },
		    { username: 'Karen', password: 'sjba', email: 'karen@ufba.br' },
		    { username: 'Naiara', password: 'sjba', email: 'naiara@ufba.br' },
		    { username: 'Reno', password: 'sjba', email: 'reno@ufba.br' },
		    ];

	    let username= this.state.username;
	    let password= this.state.password;
	    let email = this.state.email;

	    var permissao = data.map(function(elem, i){
	    	if(elem.username==username && elem.password==password
	    		&& elem.email==email){
	    		console.log('achou');
	    		console.log(elem.username);
	    		return true;} 
	    	else{return false}})

		if(permissao.includes(true)){
			alert(`Login efetuado`)
			this.state.logado = true
			this.setState({ logado: true });
	   	} else{
		   		alert (`Tente novamente`)}
    		}


	//manipulador de eventos com metadados úteis
	handleInputChange(event) {

		const target = event.target;
		const value = target.value;
		const name = target.name;
    	//mantém os dados atualizado
    	this.setState({[name]: value});
    }

    render() {
	//variavel de conteúdo da pagina
	var logado= this.state.logado;

	if(this.state.logado==false){
		logado = 
		<div>
		<MuiThemeProvider>
		<div>
		<AppBar title="Login"/>


		<TextField
		hintText="Username"
		floatingLabelText="Username"
		onChange = {(event,newValue) => this.setState({username:newValue})}
		/>
		<br/>

		<TextField
		hintText="E-mail"
		floatingLabelText="E-mail"
		onChange = {(event,newValue) => this.setState({email:newValue})}
		/>
		<br/>


		<TextField
		type="password"
		hintText="Password"
		floatingLabelText="Password"
		onChange = {(event,newValue) => this.setState({password:newValue})}
		/>
		<br/>


		<RaisedButton label="Submit" primary={true}  onClick={(event) => this.handleClick(event)}/>
		</div>
		</MuiThemeProvider>
		</div> 
	}else{
		logado = <h1>Bem-vindo!!!!!!!!!!!!!!!!!</h1> 
	}

	return (
		<div className="component">
		
		{logado}
		</div>
		);
	}
}

export default Exercicio;