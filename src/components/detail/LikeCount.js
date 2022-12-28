import React from 'react'
import { useSelector } from 'react-redux'
import { flexStart } from '../layout/className'
import FlexRowCenter from '../layout/FlexRowCenter'

const LikeCount = () => {
  const likeCount = useSelector(state=>state.detail.postDetail.likeCount)
  console.log('like',likeCount)
  return (
    <FlexRowCenter justify={flexStart}>
      <span style={{fontWeight:700}}> 좋아요 {likeCount}개</span> 
    </FlexRowCenter>
  )
}

export default LikeCount
