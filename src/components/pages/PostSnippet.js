import React from 'react';
import { Card } from 'antd';

function PostSnippet(props) {
  return (
    
    <div className='article-container'>
      <hr/>
      <div className='articles_container'>
        <div className='article_container'>
            <Card
              style={{ marginTop: 16 }}
              type="inner"
              title={props.title}
              extra={<a href="#">More</a>}
            >
              <p>
                {props.content}
              </p>
            </Card>
        </div>
      </div>
    </div>
  )
}

export default PostSnippet;