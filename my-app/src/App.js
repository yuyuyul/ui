import React, { Component } from 'react';
import './App.css';
import Foo from './components/Foo';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      "status": "PENDING",
      "premium_user": true,
      "industry": "게임",
      "type": "중견기업",
      "employees": 348,
      "job_postings": [ 
        {
          "title": '',
          "d_day": "D-41",
          "url": "http://jobplanet.co.kr/",
          "phone": "01099098888",
        },
        {
          "title": "undefined",
          "d_day": "d_41",
          "url": "http://jobplanet.co.kr/companies/83745/job_postings/1143701/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EA%B2%8C%EC%9E%84-%ED%95%B4%EC%99%B8%EC%98%81%EC%96%B4%EA%B6%8C%EC%82%AC%EC%97%85-pm/%EB%84%A4%EC%98%A4%EC%9C%84%EC%A6%88",
          "phone": "01099098888",
        },
        {
          "title": "게임 운영",
          "d_day": "D-41",
          "url": "http://jobplanet.co.kr/companies/83745/job_postings/1143701/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EA%B2%8C%EC%9E%84-%ED%95%B4%EC%99%B8%EC%98%81%EC%96%B4%EA%B6%8C%EC%82%AC%EC%97%85-pm/%EB%84%A4%EC%98%A4%EC%9C%84%EC%A6%88",
          "phone": "01099098888",
        }
      ],
      "job_posting": {
        "title": "게임 운영",
        "d_day": 41,
        "url": "http://jobplanet.co.kr/companies/83745/job_postings/1143701/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EA%B2%8C%EC%9E%84-%ED%95%B4%EC%99%B8%EC%98%81%EC%96%B4%EA%B6%8C%EC%82%AC%EC%97%85-pm/%EB%84%A4%EC%98%A4%EC%9C%84%EC%A6%88"
      },
      "emails": ["ww98@naver.com", ""]
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        status: "DONE"
      })
    },2000);
  }
  alertFunc = (e) => {
    alert(e.target.innerText);
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload. npm start!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Foo 
            {...this.state}
            alertFunc={this.alertFunc}//this.alertFunc
            propsElem={(<div>
              리액트 엘리먼트
            </div>)}
            instance={(new Foo())}
          />
        </header>
      </div>
    ); 
  }
}

export default App;
