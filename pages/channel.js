import React, { Component, Fragment } from 'react';
import Link from 'next/link'
import AudioClips from '../components/AudioClips'

export default class extends Component {

    static async getInitialProps({query}) {
        
        let idChannel = query.id;

        let [rChannel, rClips, rChildsChannels] = await Promise.all([
            fetch (`https://api.audioboom.com/channels/${idChannel}`),
            fetch (`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
            fetch (`https://api.audioboom.com/channels/${idChannel}/child_channels`)
        ])

        let dataChannel= await rChannel.json()
        let channel = dataChannel.body.channel

        let dataClips= await rClips.json()
        let audioClips = dataClips.body.audio_clips

        let dataChilds= await rChildsChannels.json()
        let childChannels = dataChilds.body.channels
        
        
        return { channel , audioClips, childChannels }
      }

    render() {
        const {channel, audioClips, childChannels} = this.props

        return  (  <>   

                <Head>
                    <title>asjkdasd</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                </Head>

                <header>Podcasts</header>
                <h1>{channel.title}</h1>

               <AudioClips audioClips= {audioClips}></AudioClips>
               
                <div className="audioClips">
                    
                    <h3>audioClips</h3>

                    {childChannels.map((channel) => (
                        <p className="title"> { channel.title }</p>
                    ))}
                </div>
             

                <style jsx>{`
                    header {
                    color: #fff;
                    background: #8756ca;
                    padding: 15px;
                    text-align: center;
                    }

                   

                    .channel {
                    display: block;
                    border-radius: 3px;
                    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
                    margin-bottom: 0.5em;
                    }

                    .channel img {
                    width: 100%;
                    }

                    .channel h2 {
                    padding: 5px;
                    font-size: 0.9em;
                    font-weight: 600;
                    margin: 0;
                    text-align: center;
                    }
                `}</style>

                <style jsx global>{`
                    body {
                    margin: 0;
                    background: white;
                    font-family: system-ui;
                    }
                `}</style>
        </>)
    }


}