import { StylesProvider } from '@material-ui/core';
import React, {useEffect} from 'react';
import { useDispatch, userDispatch, useSelector } from 'react-redux'
import {addChannels, setCurrentChannel, getChannels } from '../store/actions/channels'

const ChannelButtons = () => {
  //TODO useSelector for Server, and currentServer which will be passed into getChannels
  const serverId = 1
  //Replace hardcoded serverId with the currentServer from state.servers.currentServer
  const channels = useSelector(state => state.channels.channels)
  const currentChannel = useSelector(state => state.channels.currentChannel)
  const dispatch = useDispatch()

  //Fetch list of channels for a server
  useEffect(() => {
    //This dispatch, will fetch from the backend all the servers that belong to a channel
    //Also will add the channels that it recieved to state.channels.channels
    dispatch(getChannels(serverId))
    //Only runs once, when the channelButtons is called
  }, [])

  // debugger;
  const joinChannel = (channel) => {
    dispatch(setCurrentChannel(channel))
  }

  // console.log(channels)
  return channels.map((channel) => {
    return (
      <button
      key={channel.id}
      onClick={() => joinChannel(channel.id)}
      >
        {`#${channel.channelName}`}
      </button>
    )
  })
}

export default ChannelButtons