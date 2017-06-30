import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Home />
            <Form />
            <Service />
         </div>
      );
   }
}

export default App;

class Header extends React.Component {
   render() {
      return (
         <div className="myClass">

            <span className="myClassLinks"><a href="/services">Services</a></span>
            <span className="myClassLinks"><a href="/contact">Contact</a></span>
            <span className="myClassLinks"><a href="/">Home</a></span>

        </div>
      );
   }
}

class Home extends React.Component {
    render(){
        return (
            <div>
                <div className='firstRowTilesContainer'>
                    <div className='firstRowTiles'>Div1</div>
                    <div className='firstRowTiles'>Div2</div>
                </div>

                <div className="secondRowTilesContainer">
                    <div className="secondRowTiles">Left Stuff</div>
                    <div className="secondRowTiles">Middle Stuff</div>
                    <div className="secondRowTiles">Right Stuff</div>
                    <br className="breakAfterFloat"/>
                </div>
            </div>
        );
    }
}
//export default Home;

class Form extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         //data: 'Enter your email here'
         data: ''
      }

      this.updateState = this.updateState.bind(this);
   };
   updateState(e){
            this.setState({data: e.target.value});
            if(e.target.value.substring(e.target.value.length-3)==='.in'){
                console.log('valid input');
            }else{
                console.log('invalid input');
            }
   };
   submit(){
       console.log('form');
   }
   render(){
        return (
            <div>
                <form action="submit">
                    <h3>Contact Us Form</h3>
                        <input id="emailBox" type = "email" value = {this.state.data} onChange = {this.updateState} required/>
                        {/*<h4>{this.state.data}</h4>*/}
                        <input type = "text"  maxLength="14" required/>
                        <textarea rows='15' min="3" maxLength="250"/>
                        <input type="submit" value="Submit" />
                        <input type="reset" value="Reset" />
                </form>
            </div>
        );
    }
}
//export default Form;

class Service extends React.Component {

    callService(){
        var getJSON = function(url) {
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open('get', url, true);
                xhr.responseType = 'json';
                xhr.onload = function() {
                var status = xhr.status;
                if (status == 200) {
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
                };
                xhr.send();
            });
        };

        getJSON('http://localhost:8080/tech.json').then(function(data) {
            console.log(data);
            //result.innerText = data; //display the result in an HTML element
            const listItems = data.map((d) =>
                <li>{d.name}</li>
            );
            console.log(listItems);
        }, function(status) { //error detection....
        alert('Something went wrong.');
        });
    }
    render(){
        return (

            <div>
                <button onClick={this.callService}>Get Results</button>

                <br /><br />
            </div>
        );
    }
}
//export default Service;

