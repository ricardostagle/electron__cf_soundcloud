import React, { Component } from 'react'
import classNames from 'classnames'

export default class Player extends Component {
  render() {
    const playStatus = classNames({
      'fa fa-play': this.props.playStatus == 'PLAYING' ? false : true,
      'fa fa-pause': this.props.playStatus == 'PLAYING' ? true : false 
    })

    return (
      <div class='ui five column centered grid'>
        <div class='three wide column'>
          <button class='ui massive button' onClick={this.props.backward}>
            <i class='fa fa-backward'></i>
          </button>
        </div>
        <div class='three wide column'>
          <button class='ui massive button' onClick={this.props.togglePlay}>
            <i class={playStatus}></i>
          </button>
        </div>
        <div class='three wide column'>
          <button class='ui massive button' onClick={this.props.stop}>
            <i class='fa fa-stop'></i>
          </button>
        </div>
        <div class='three wide column'>
          <button class='ui massive button' onClick={this.props.random}>
            <i class='fa fa-random'></i>
          </button>
        </div>
        <div class='three wide column'>
          <button class='ui massive button' onClick={this.props.forward}>
            <i class='fa fa-forward'></i>
          </button>
        </div>
      </div>
    )
  }
}