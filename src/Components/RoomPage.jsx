import React from 'react'
import RoomPageQuestionSection from './RoomPageQuestionSection'
import RoomPageQuestionDisplaySection from './RoomPageQuestionDisplaySection'
import RoomPageEditorSection from './RoomPageEditorSection'
import LeaderBoardComponent from './LeaderBoardComponent'
import WaitingRoomModal from './WaitingRoomModal'
import WaitingRoomModalJoinRoom from './WaitingRoomModalJoinRoom'
import { useState } from 'react'
import { useStateValue } from '../context/stateProvider'
const RoomPage = () => {
  const [waitingRoomRequest, setWaitingRoomRequest] = useState(true);
  const [{joinRoomFlag},dispatch]=useStateValue()
  console.log("joinroomflag",joinRoomFlag)
  return (
    <div className='flex w-full min-h-screen h-[100vh] bg-primary_gray text-primary_green '>
       {joinRoomFlag?
        <WaitingRoomModalJoinRoom
        openWaitingRoomModalJoinRoom={waitingRoomRequest}
        onCloseWaitingRoomModalJoinRoom={() => {
            setWaitingRoomRequest(!waitingRoomRequest);
          }}
        />:
        <WaitingRoomModal
        openWaitingRoomModal={waitingRoomRequest}
        onCloseWaitingRoomModal={() => {
            setWaitingRoomRequest(!waitingRoomRequest);
          }}
        />
      }
     <RoomPageQuestionSection/>
     <RoomPageQuestionDisplaySection/>
     <RoomPageEditorSection/>
     <LeaderBoardComponent/>
    </div>
  )
}

export default RoomPage