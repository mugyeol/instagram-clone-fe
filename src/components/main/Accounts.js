import React from "react";
import { profile } from "../../asset/navbar";
import Img from "../elem/Img";
import Card from "../ui/layout/Card";
import { flexStart} from '../ui/layout/className';
import FlexRowCenter from "../ui/layout/FlexRowCenter";

const Accounts = () => {
  return (
      <Card mg={'4rem 0'} pd={'1.5rem'} wd = {'32rem'}>
        <FlexRowCenter gap={'1.5rem'} justify={flexStart}>
        <Img type='circle-profile' src={profile} />
        <span style={{flex:1}}>htpadkorik</span> 
        <span style={{fontSize:'1.2rem', color:'skyblue'}}>전환</span> 
        </FlexRowCenter>
      </Card>
  );
};

export default Accounts;
