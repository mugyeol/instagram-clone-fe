import React from "react";
import Accounts from "../components/main/Accounts";
import PostList from "../components/main/PostList";
import FlexRowCenter from "../components/ui/layout/FlexRowCenter";
import Layout from "../components/ui/layout/Layout";

const MainPage = () => {
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
