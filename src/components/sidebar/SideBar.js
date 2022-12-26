import React from 'react'
import Card from '../../components/ui/layout/Card';
import FlexColumn from '../../components/ui/layout/FlexColumn';
import { IconImg } from '../../components/ui/elem/IconImg';
import { homeIcon, profile } from '../../asset/navbar';
import FlexRow from '../../components/ui/layout/FlexRow';
import { flexStart } from '../../components/ui/layout/className';
import { useNavigate } from "react-router-dom";
import { PATH } from '../../Router';
import { CircleImg } from '../ui/elem/CircleImg';
const SideBar = () => {
  const navigate = useNavigate()
  return (
    <Card wd={'28rem'} hg={'100vh'} pd='4rem 3rem' border='1px solid var(--ig-elevated-separator)'>
      <FlexColumn align={flexStart} gap='3rem'>
      <h1 onClick={()=>navigate(PATH.main)} style={{ marginBottom:'3rem'}}>Instagram</h1> 
        <FlexRow gap={'2rem'} justify={flexStart} onClick={()=>navigate(PATH.main)}>
            <IconImg src={homeIcon}/>
            <h2>홈</h2>
        </FlexRow>
        <FlexRow gap={'2rem'} justify={flexStart} onClick={()=>navigate(PATH.main)}>
            <IconImg src={homeIcon}/>
            <h2>검색</h2>
        </FlexRow>
        <FlexRow gap={'2rem'} justify={flexStart} onClick={()=>navigate(PATH.main)}>
            <IconImg src={homeIcon}/>
            <h2>탐색 탭</h2>
        </FlexRow>
        <FlexRow gap={'2rem'} justify={flexStart} onClick={()=>navigate(PATH.main)}>
            <IconImg src={homeIcon}/>
            <h2>릴스</h2>
        </FlexRow>
        <FlexRow gap={'2rem'} justify={flexStart} onClick={()=>navigate(PATH.main)}>
            <IconImg src={homeIcon}/>
            <h2>메세지</h2>
        </FlexRow>
        <FlexRow gap={'2rem'} justify={flexStart} onClick={()=>navigate(PATH.main)}>
            <IconImg src={homeIcon}/>
            <h2>알림</h2>
        </FlexRow>
        <FlexRow gap={'2rem'} justify={flexStart} onClick={()=>navigate(PATH.main)}>
            <IconImg src={homeIcon}/>
            <h2>만들기</h2>
        </FlexRow>
        <FlexRow gap={'2rem'} justify={flexStart} onClick={()=>navigate(PATH.main)}>
            <CircleImg wd={'2.5rem'} hg={'2.5rem'} src={profile}/>
            <h2>프로필</h2>
        </FlexRow>
      </FlexColumn>
    </Card>
  )
}

export default SideBar
