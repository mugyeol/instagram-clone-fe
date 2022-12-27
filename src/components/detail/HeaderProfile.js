import React from 'react'
import { profile } from '../../asset/navbar'
import Img from '../elem/Img'
import FlexRowCenter from '../layout/FlexRowCenter'
import Span from '../elem/Span'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import { flexStart } from '../layout/className'
export default function HeaderProfile() {
  return (
    <FlexRowCenter pd='var(--ig-post-padding)' gap='var(--ig-post-padding)' justify={flexStart}>
      <Img wd='3.5rem' hg='3.5rem' type='circle-profile' src={profile}/>
      <Span flex={1} fs='1.4rem'>htpadkorik</Span>
      <HiOutlineDotsHorizontal size={25} />
    </FlexRowCenter>
  )
}
