import React, { Component, Fragment } from 'react'

export default class AudioClips extends Component {
    render() {
        const {audioClips} = this.props
        return (
                 <div className="audioClips">
                    {audioClips.map((clip) => (
                        <Fragment>
                            <h2 className="title"> { clip.title }</h2>
                            <h2 className="title"> { clip.duration }</h2>
                        </Fragment>
                    ))}
                </div>
        )
    }
}
