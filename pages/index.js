import React, { Component, Fragment } from 'react';
import Link from 'next/link'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'

export default class extends Component {

    static async getInitialProps() {
        let r = await fetch ('https://api.audioboom.com/channels/recommended')
        let { body: channels } = await r.json()
        
        return { channels }

    }

    render() {

        const { channels } = this.props 

        return(
               <Layout title="Podcasts">
                    <ChannelGrid channels={ channels }></ChannelGrid>   
                </Layout>
        )
    }
}