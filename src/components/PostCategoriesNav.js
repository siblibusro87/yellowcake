import React from 'react'

import BlogSearch from './BlogSearch'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories, enableSearch }) => (
  <div className="PostCategoriesNav">
       {enableSearch && <BlogSearch />}
  </div>
)

export default PostCategoriesNav
