import React from "react";
import { profile } from "../../asset/navbar";
import { CircleImg } from "../ui/elem/CircleImg";
import Card from "../ui/layout/Card";
import { flexStart} from '../ui/layout/className';
import FlexRow from "../ui/layout/FlexRow";

const Accounts = () => {
  return (
      <Card mg={'4rem 0'} pd={'1.5rem'} wd = {'32rem'}>
        <FlexRow  align={'center'} gap={'1.5rem'} justify={flexStart}>
        <CircleImg src={profile} />
        <span style={{flex:1}}>htpadkorik</span> 
        <span style={{fontSize:'1.2rem', color:'skyblue'}}>전환</span> 
        </FlexRow>
      </Card>
  );
};

export default Accounts;
