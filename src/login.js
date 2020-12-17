import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React, { Component } from "react";

//classe responsável pelo login
class Login extends Component {
  //construtor iniciar o state
  constructor(props) {
    super(props);
    //criando as váriaveis de controle
    this.state = {
      username: "",
      password: "",
      email: "",
      logado: false,
    };
    //para atualizar funções dentro do meu component
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
      { username: "Amanda", password: "sjba", email: "teste@email.com" },
      { username: "Carina", password: "sjba", email: "teste@email.com" },
      { username: "David", password: "sjba", email: "teste@email.com" },
      { username: "Eduardo", password: "sjba", email: "teste@email.com" },
      { username: "Gabriel", password: "sjba", email: "teste@email.com" },
      { username: "Joubet", password: "sjba", email: "teste@email.com" },
      { username: "Juliana", password: "sjba", email: "teste@email.com" },
      { username: "Karen", password: "sjba", email: "teste@email.com" },
      { username: "Naiara", password: "sjba", email: "teste@email.com" },
      { username: "Reno", password: "sjba", email: "teste@email.com" },
    ];

    let username = this.state.username;
    let password = this.state.password;
    let email = this.state.email;

    var permissao = data.map(function (elem) {
      if (elem.username == username && elem.password == password && elem.email == email) {
        console.log("achou");
        console.log(elem.username);
        return true;
      } else {
        return false;
      }
    });

    if (permissao) {
      alert(`Login efetuado`);
      this.setState({ logado: true });
    } else {
      alert(`Login ou senha incorreto`);
    }
  }

  //manipulador de eventos com metadados úteis
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    //mantém os dados atualizado
    this.setState({ [name]: value });
  }

  render() {
    //variavel de conteúdo da pagina
    var logado = this.state.logado;

    if (this.state.logado == false) {
      logado = (
        <div>
          <MuiThemeProvider>
            <div>
              <AppBar title="React SJBA" />

              <TextField
                hintText="Username"
                floatingLabelText="Username"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
              <br />

              <TextField
				hintText="Email"
				type="email"
                floatingLabelText="Email"
                onChange={(event, newValue) =>
                  this.setState({ email: newValue })
                }
              />
              <br />

              <TextField
                type="password"
                hintText="Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <br />

              <RaisedButton
                label="Submit"
                primary={true}
                onClick={(event) => this.handleClick(event)}
              />
            </div>
          </MuiThemeProvider>
        </div>
      );
    } else {
      logado = <h1>Bem-vindo!</h1>;
    }

    return <div>{logado}</div>;
  }
}

export default Login;
