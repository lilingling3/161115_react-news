import React, {Component} from 'react'
import {
  Row,
  Col,
  Carousel
} from 'antd'

import NewsImageBlock from './news_image_block'
import carousel_1 from '../images/carousel_1.jpg'
import carousel_2 from '../images/carousel_2.jpg'
import carousel_3 from '../images/carousel_3.jpg'
import carousel_4 from '../images/carousel_4.jpg'

class NewsContainer extends Component {

  render() {

    return (
      <div className="container">
        <Row>
          <Col span={1}></Col>
          <Col span={22}>
            <div className="leftContainer">
              <Carousel autoplay infinite>
                <div><img src={carousel_1}/></div>
                <div><img src={carousel_2}/></div>
                <div><img src={carousel_3}/></div>
                <div><img src={carousel_4}/></div>
              </Carousel>

              <NewsImageBlock title='国际头条' count={6} type='top' width='100%' imageWidth='110px'/>
            </div>

            <div>
              <NewsImageBlock title='国内新闻' count={8} type='guonei' width='100%' imageWidth='110px'/>
              <NewsImageBlock title='娱乐新闻' count={16} type='yule' width='100%' imageWidth='110px'/>
            </div>
          </Col>
          <Col span={1}></Col>
        </Row>
      </div>
    )
  }
}

export default NewsContainer