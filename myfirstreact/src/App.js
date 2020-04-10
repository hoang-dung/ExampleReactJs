import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      txtUserName:'',
      txtPassword:'',
      txtMoTa: '',
      txtGioiTinh: 0,
      rdLang: 'vi',
      checkbox: true
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  onHandleChange(event){
    var target = event.target;
    var name = target.name;//txtUserName, txtPassword
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    })
  }
  onHandleSubmit(event){
    event.preventDefault();// chan ko cho submit
    console.log(this.state);
  }
  render() {
    return (
      <div className="container mt-30">
        
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">
                  
                  <form onSubmit = {this.onHandleSubmit}>
                    <legend>Form title</legend>
                  
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" name="txtUserName" 
                      onChange={this.onHandleChange} value={this.state.txtUserName}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" name="txtPassword" 
                      onChange={this.onHandleChange} value={this.state.txtPassword}/>
                    </div>
                    <div className="form-group">
                      <label>Mô tả</label>
                      
                      <textarea className="form-control" rows="3" name="txtMoTa"
                        onChange={this.onHandleChange} value={this.state.txtMoTa}
                      ></textarea>
                      
                    </div>
                    <label>Giới tính</label>
                    <select className="form-control" name="txtGioiTinh" value={this.state.txtGioiTinh}
                     onChange = {this.onHandleChange}>
                      <option value={0}>Nữ</option>
                      <option value={1}>Nam</option>
                    </select>
                    <br></br>

                    <label>Ngôn ngũ</label>
                    <div className="radio">
                      <label>
                        <input type="radio" name ="rdLang" value = "en"
                          onChange={this.onHandleChange}
                          checked={this.state.rdLang==="en"}/>
                        Tiếng Anh
                      </label>
                      <br></br>
                      <label>
                        <input type="radio" name ="rdLang" value = "vi"
                          onChange={this.onHandleChange}
                          checked={this.state.rdLang==="vi"}/>
                        Tiếng Việt
                      </label>
                    </div>
                    
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" value="" name="checkbox" value={true} 
                          onChange={this.onHandleChange} checked={this.state.checkbox === true}/>
                        Trạng thái
                      </label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                    <button type="reset" className="btn btn-default">Xóa</button>
                  </form>
                  
                </div>
            </div>
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
