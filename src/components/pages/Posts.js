import React from 'react';
import { PageHeader } from 'antd';
import PostSnippet from './PostSnippet'
import blogAPI from '../../api/blog-api'
import _ from 'lodash'

function Posts() {
  return (
    
    <div className='post-container'>
      <br />
      <br />
      <br />

      <div>
        <PageHeader
            className="site-page-header"
            title="GWS Blog"
            subTitle="Posts"
          />
      </div>
      <hr/>
      <div className='articles_container'>
        <div className='article_container'>
          {
            _.map(blogAPI, (article, idx) => {
                return (
                  <PostSnippet
                    key={idx}
                    title={article.title}
                    content={article.content}
                  />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Posts;