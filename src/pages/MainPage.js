import React from "react";
import Accounts from "../components/main/Accounts";
import PostList from "../components/main/PostList";
import FlexRowCenter from "../components/layout/FlexRowCenter";
import Layout from "../components/layout/Layout";
import { useDispatch } from 'react-redux';
import { $getToken } from "../dataManager/myQueries";
import { __getUser } from "../redux/modules/userSlice";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  console.log('is true',$getToken()?.startsWith("bearer"))

  if ($getToken()) {
    dispatch(__getUser());
  }else{
    navigate('/')
  }
  return (
    <Layout>
      <FlexRowCenter align='flex-start' justify={'center'} gap={'3rem'}>
        <div>
        <PostList />
        </div>
        <div>
        <Accounts />
        </div>
      </FlexRowCenter>
    </Layout>
  );
};

export default MainPage;
