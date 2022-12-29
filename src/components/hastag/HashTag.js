import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { profile } from '../../asset/navbar'
import { __getHashTagList } from '../../redux/modules/hashSlice'
import Img from '../elem/Img'
import PrimaryButton from '../elem/PrimaryButton'
import FlexColumnCenter from '../layout/FlexColumnCenter'
import FlexRowCenter from '../layout/FlexRowCenter'

function HashTag() {
    const {tag} = useParams()
    console.log('tag', tag)
    const dispatch = useDispatch()
    const hashTagList = useSelector(state=> state.hashTagList)
    useEffect(()=>{
        dispatch((__getHashTagList(tag)))
    },[])
  return (
    <FlexColumnCenter pd={'2rem 4rem'}>
      <FlexRowCenter gap='3rem'>
        <Img wd='7rem' hg='7rem' src={profile}/>
        <FlexColumnCenter gap='1rem'>
            <div>
            <h1>
                #tag
            </h1>
            <h3>
                게시물 count
            </h3>
            </div>
            <div>
                <PrimaryButton></PrimaryButton>
            </div>
        </FlexColumnCenter>
      </FlexRowCenter>
    </FlexColumnCenter>
  )
}

export default HashTag
