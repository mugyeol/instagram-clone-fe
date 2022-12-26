import React from "react";
import Accounts from "../components/main/Accounts";
import PostList from "../components/main/PostList";
import FlexRow from "../components/ui/layout/FlexRow";
import Layout from "../components/ui/layout/Layout";

const MainPage = () => {
  return (
    <Layout>
      <FlexRow justify={'center'} gap={'3rem'}>
        <div>
        <PostList />
        </div>
        <div>
        <Accounts />
        </div>
      </FlexRow>
    </Layout>
  );
};

export default MainPage;
