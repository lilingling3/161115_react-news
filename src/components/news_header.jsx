import React, {Component} from 'react'
import {
  Row,
  Col,
  Menu,
  Icon,
  Button,
  Modal
} from 'antd'
const MenuItem = Menu.Item

import {Link} from 'react-router'

import logo from '../images/logo.png'

class NewsHeader extends Component {

  constructor (props) {
    super(props)
    this.state = {
      currKey: 'top',
      username: null,
      userId: null,
      modalVisible: false
    }
  }

  clickItem = (event) => {
    const {key} = event
    //更新状态
    this.setState({currKey: key})
    //如果是注册/登陆, 更新modalVisible
    if(key==='register') {
      this.setState({modalVisible: true})
    }
  }

  //更新状态modalVisible
  setModalVisible = (modalVisible, event) => {
    this.setState({modalVisible})
  }

  render() {
    const {currKey, username, modalVisible} = this.state

    //确定用户menuItem
    const userItem = username
      ? (
          <MenuItem key="logout" className="register">
            <Button type="primary">{username}</Button>
            &nbsp;&nbsp;
            <Link to="/user_center">
              <Button type="dashed">个人中心</Button>
            </Link>
            &nbsp;&nbsp;
            <Button type="ghost">退出</Button>
          </MenuItem>
        )
      : (
        <MenuItem key="register" className="register">
          <Icon type="appstore" />注册/登陆
        </MenuItem>
      )

    return (
      <header>
        <Row>
          <Col span={1}></Col>
          <Col span={3}>
            <div className="logo">
              <img src={logo} alt="logo"/>
              <span>ReactNews2</span>
            </div>
          </Col>
          <Col span={19}>

            <Menu mode='horizontal' selectedKeys={[currKey]} onClick={this.clickItem}>
              <MenuItem key="top">
                <Icon type="appstore" />头条
              </MenuItem>
              <MenuItem key="shehui">
                <Icon type="appstore"/>社会
              </MenuItem>
              <MenuItem key="guonei">
                <Icon type="appstore"/>国内
              </MenuItem>
              <MenuItem key="guoji">
                <Icon type="appstore"/>国际
              </MenuItem>
              <MenuItem key="yule">
                <Icon type="appstore"/>娱乐
              </MenuItem>
              <MenuItem key="tiyu">
                <Icon type="appstore"/>体育
              </MenuItem>
              <MenuItem key="keji">
                <Icon type="appstore"/>科技
              </MenuItem>
              <MenuItem key="shishang">
                <Icon type="appstore"/>时尚
              </MenuItem>
              {userItem}
            </Menu>
            <Modal title="用户中心"
                   visible={modalVisible}
                   onOk={this.setModalVisible.bind(this, false)}
                   onCancel={this.setModalVisible.bind(this, false)}
                   okText='关闭'>
              xxxxx
            </Modal>
          </Col>
          <Col span={1}></Col>
        </Row>
      </header>
    )
  }
}

export default NewsHeader