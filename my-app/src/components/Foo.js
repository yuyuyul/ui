import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

class Foo extends Component {
  /*
  static propTypes = {
    strArg : PropTypes.string,            
    numArg : PropTypes.number.isRequired   
  }
  */
  render(){
    const {
      status,
      premium_user,
      industry,
      type,
      employees,
      job_postings,
      alertFunc,
      propsElem,
    } = this.props;

    if(status === 'PENDING') return (<Spinner />);
    return (
      <div className="company_basic_info">
        <div className="basic_info_sec bg_gray">
          <div className="basic_info_sec">
            <ul className="basic_info_list">
              <li>
                <div className="basic_info_item ico_industry" onClick={alertFunc}>
                  <div className="info_description">
                    <strong className="info_item_subject">{premium_user ? industry : '???'}</strong>
                    <span>산업</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="basic_info_item ico_company_shape" onClick={alertFunc}>
                  <div className="info_description">
                    <strong className="info_item_subject">{premium_user ? type : '???'}</strong>
                    <span>기업형태</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="basic_info_item ico_employees" onClick={alertFunc}>
                  <div className="info_description">
                    <strong className="info_item_subject">{premium_user ? employees : '???'}명</strong>
                    <span>사원수</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="basic_info_sec bg_gray">
          <ul>
          {
            job_postings 
            ? job_postings.map((v,i) => (
              <li key={i}>
                <div className="hiring_card">
                  <a href={v.url} target="_blank" rel="noopener noreferrer">
                    <div className="row">
                      <div className="title">{v.title}</div>
                      <span className="jply_rounded_xs orange500">{v.d_day}</span>
                    </div>
                  </a>
                </div>
              </li>
            ))
            : <li>{propsElem}</li>
          }
          </ul>
        </div>
      </div>
    );
  }
}

Foo.propTypes = {  
  status: PropTypes.oneOf(['PENDING', 'DONE', 'ERROR']).isRequired,
  premium_user: PropTypes.bool.isRequired,
  industry: PropTypes.string,
  type: PropTypes.string,
  employees: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  job_postings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      d_day: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      // 사용자 정의 유효성 검사기를 지정할 수도 있습니다.
      // 검사 실패 시에는 에러(Error) 객체를 반환해야 합니다.
      // `oneOfType`안에서는 작동하지 않으므로 `console.warn` 혹은 throw 하지 마세요.
      /*phone: function(props, propName, componentName) {
        if (/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/.test(props[propName])) {
          return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }
      }
      */
    })
  ).isRequired,
  job_posting: PropTypes.shape({
    title: PropTypes.string.isRequired,
    d_day: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  // `arrayOf` 와 `objectOf 에 사용자 정의 유효성 검사기를 적용할 수 있습니다.
  // 검사 실패 시에는 에러(Error) 객체를 반환해야 합니다.
  // 유효성 검사기는 배열(array) 혹은 객체의 각 키(key)에 대하여 호출될 것입니다.
  // 유효성 검사기의 첫 두 개의 변수는 배열 혹은 객체 자신과 현재 아이템의 키입니다.
  emails: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  }).isRequired,
  alertFunc: PropTypes.func.isRequired,
  propsElem: PropTypes.element,
  instance: PropTypes.instanceOf(Foo).isRequired
}

Foo.defaultProps = { /* props property가 없을 때 */
  status: 'PENDING',
  job_postings: [],
  alertFunc: () => console.warn("alertFunc 값이 없습니다."),
}

export default Foo;