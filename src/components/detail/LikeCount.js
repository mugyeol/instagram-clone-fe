import React from 'react'
import { flexStart } from '../layout/className'
import FlexRowCenter from '../layout/FlexRowCenter'

const LikeCount = () => {
  return (
    <FlexRowCenter justify={flexStart}>
      <span style={{fontWeight:700}}> 좋아요 1.6만개</span> 
    </FlexRowCenter>
  )
}

export default LikeCount
