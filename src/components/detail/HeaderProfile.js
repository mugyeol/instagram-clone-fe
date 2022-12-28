import React from 'react'
import { profile } from '../../asset/navbar'
import Img from '../elem/Img'
import FlexRowCenter from '../layout/FlexRowCenter'
import Span from '../elem/Span'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import { flexStart } from '../layout/className'
import { useSelector } from 'react-redux'
export default function HeaderProfile() {
  const nickname = useSelector((state)=> state.detail.postDetail.nickname)
  // const profileImg = useSelector((state)=> state.detail.postDetail.profileImg)

  return (
    <FlexRowCenter pd='var(--ig-post-padding)' gap='var(--ig-post-padding)' justify={flexStart}>
      <Img wd='3.5rem' hg='3.5rem' type='circle-profile' src={profile}/>
      <Span flex={1} fs='1.4rem'>{nickname}</Span>
      <HiOutlineDotsHorizontal size={25} />
    </FlexRowCenter>
  )
}
