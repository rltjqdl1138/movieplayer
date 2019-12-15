import React, {Component} from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import Playlist from '../components/player/playlist'
import VideoPlayer from '../components/player/videoPlayer'
import { PlayerActions } from '../store/actionCreators';

