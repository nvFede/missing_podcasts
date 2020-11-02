import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default class Layout extends Component {
    render() {

        const {children, title} = this.props

        return (

            <Fragment>

                <Head>
                    <title>{title}</title>
                </Head>

                <div>
                    <header><Link href="/"><a>Podcasts</a></Link></header>
                </div>

                {children}

                <style jsx>{`
                    header {
                        color: #fff;
                        background: #8756ca;
                        padding: 15px;
                        text-align: center;
                    }
                    header a {
                        text-decoration:none;
                        color: #FFF;
                    }
                `}
                </style>

                <style jsx global>{`
                    body {
                        margin: 0;
                        background: white;
                        font-family: system-ui;
                    }
                `}</style>
            </Fragment>

        )
    }
}
