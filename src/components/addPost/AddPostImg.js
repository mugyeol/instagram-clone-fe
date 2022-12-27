import React from 'react'
import FlexColumnCenter from "../../components/ui/layout/FlexColumnCenter";
import FlexRowCenter from "../../components/ui/layout/FlexRowCenter";
import { addPostMsg } from "../../dataManager/messageVariables";
import Modal from "../../modal/Modal";
import Img from '../ui/elem/Img';
const AddPostImg = (props) => {
console.log('props addpost img',props);

  return (
    <Modal>
      <FlexColumnCenter type="full-height">
        <FlexRowCenter type="add-header">
          <div></div>
          <h2>{addPostMsg.addNewPost}</h2>
          <div></div>
        </FlexRowCenter>
        <FlexColumnCenter type='add-body'>
        <Img src={props.props} type='addpost-image'/>
        </FlexColumnCenter>
      </FlexColumnCenter>
    </Modal>
  )
}

export default AddPostImg
