import React from "react";
import { useSelector } from "react-redux";
import Img from "../elem/Img";
import Card from "../layout/Card";
import { flexStart} from '../layout/className';
import FlexColumnCenter from "../layout/FlexColumnCenter";
import FlexRowCenter from "../layout/FlexRowCenter";

const Accounts = () => {
  const user = useSelector(state=>state.user)
  console.log('user',user)

  
  return (
      <Card mg={'4rem 0'} pd={'1.5rem'} wd = {'32rem'}>
        <FlexRowCenter gap={'1.5rem'} justify={flexStart}>
        <Img type='circle-profile' src={user.profileImg} />
        <FlexColumnCenter gap='1rem'>
        <FlexRowCenter>
        <span style={{flex:1}}>{user.nickname}</span> 
        <span style={{fontSize:'1.2rem', color:'var(--ig-taglink-text)'}}>전환</span> 
        </FlexRowCenter>
        <FlexRowCenter justify='flex-start' gap='2rem'>
          <div style={{fontSize:'1.3rem', color:'var(--color-primary)'}}>팔로워 {user.followerCount}명</div>
          <div style={{fontSize:'1.3rem', color:'var(--color-primary)'}}>팔로잉 {user.followingCount}명</div>
        </FlexRowCenter>
        </FlexColumnCenter>

        </FlexRowCenter>
      </Card>
  );
};

export default Accounts;
