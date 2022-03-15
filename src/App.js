import './App.css';
import Card from './components/Card'
import Profile from "./components/Profile"
import Input from "./components/Input"
import DisQuestion from "./components/DisQuestion"
import React, { Component } from 'react'



class App extends Component {
  constructor() {
    super() 
    this.state = {
      search : "",
      page: "start",
      count: 0,
      count1: 0,
      count2: 0,
      count3: 0, 
      color: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#DC2323] to-[#ED9B81] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl",
      color1: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#FF7455] to-[#FD9E2F] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl",
      color2: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#1052FD] to-[#3CD0F0] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl",
      color3: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#89F4C1] to-[#0BCA08] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl",
    }
  }
  onSearched = (event) => {
    this.setState({search: event.target.value})
    console.log(event.target.value)
  }
  
  render() {
    if (this.state.page === "question"){
      return (
      <div className="App">
        <div className="bg-[#131828] text-center grid justify-items-center items-center h-screen">
          <div>
            <Card searchField={this.onSearched}/>
            <div className="p-10">
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick = {() => {this.setState({page: "start"})}}> Quit 
                </button>
            </div>
           
          </div>
          
        </div>
        
      </div>
      ); 
    } else if (this.state.page === "start"){
      return (
        <div className="App">
            <div className="bg-[#131828] text-center grid justify-items-center items-center h-screen">
            <div className="text-white text-3xl">How many people are playing?</div>
            <div className= "flex flex-row space-x-10">
                <Profile styling = {this.state.color} 
                onClicked= {() => {
                  if (this.state.count < 1) {
                    this.setState({ count: this.state.count + 1 })
                    this.setState({color: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#DC2323] to-[#ED9B81] rounded-xl cursor-pointer border-4 border-[#336A9A] shadow-xl"})
                  } else {
                    this.setState({ count: this.state.count - 1 })
                    this.setState({color: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#DC2323] to-[#ED9B81] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl"})
                  }
                  
                  }}/>
                <Profile 
                styling = {this.state.color1} 
                onClicked= {() => {
                  if (this.state.count1 < 1) {
                    this.setState({ count1: this.state.count1 + 1 })
                    this.setState({color1: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#FF7455] to-[#FD9E2F] rounded-xl cursor-pointer border-4 border-[#336A9A] shadow-xl"})
                  } else {
                    this.setState({ count1: this.state.count1 - 1 })
                    this.setState({color1: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#FF7455] to-[#FD9E2F] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl"})
                  }
                  
                  }}/>
                <Profile 
                styling = {this.state.color2} 
                onClicked= {() => {
                  if (this.state.count2 < 1) {
                    this.setState({ count2: this.state.count2 + 1 })
                    this.setState({color2: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#1052FD] to-[#3CD0F0] rounded-xl cursor-pointer border-4 border-[#336A9A] shadow-xl"})
                  } else {
                    this.setState({ count2: this.state.count2 - 1 })
                    this.setState({color2: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#1052FD] to-[#3CD0F0] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl"})
                  }
                  
                  }}/>
                <Profile 
                styling = {this.state.color3} 
                onClicked= {() => {
                  if (this.state.count3 < 1) {
                    this.setState({ count3: this.state.count3 + 1 })
                    this.setState({color3: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#89F4C1] to-[#0BCA08] rounded-xl cursor-pointer border-4 border-[#336A9A] shadow-xl"})
                  } else {
                    this.setState({ count3: this.state.count3 - 1 })
                    this.setState({color3: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#89F4C1] to-[#0BCA08] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl"})
                  }
                  
                  }}/>
            </div>
            <div className="">
              <div className="text-white text-3xl">{`Number Of Players Selected: ${this.state.count+this.state.count1+this.state.count2+this.state.count3}`}</div>
              <div className = "py-3"></div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick = {() => {this.setState({page: "upload"})}}> Next </button>
            </div>
            
          </div>
        </div>
        
      )
    } else if (this.state.page === "upload"){
      return (
          <div className="App">
            <div className="bg-[#131828] text-center grid justify-items-center items-center h-screen">
              <div className="flex flex-row">
                <Input />
                <DisQuestion />
              </div>
            </div>
          </div>
      )
    }
    
  }
  
}

export default App;
