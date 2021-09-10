import { buyNft } from '../store/interactions'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header/Header'
import Identicon from 'identicon.js';
import Loading from './Loading'
import {
  contractSelector,
  metadataSelector,
  nftStateSelector,
  networkSelector,
  metadataLoadedSelector,
  nftStateLoadedSelector
} from '../store/selectors'


class Main extends Component {
  render() {
    if(this.props.dataLoaded) {
        return (
          <div className="Main">
          
  
            <br></br>
            <Header />
              <div className="row">
                <main role="main" className="col-lg-12 d-flex text-center">
                  <div className="content mr-auto ml-auto">
                    <div className="row justify-content-around" style={{ width: '1000px', fontSize: '13px'}}>
  
                    {this.props.metadata.map((nft, key) => {
                      return(
                        <div className="p-3" key={key}>
                        {this.props.nftState[nft.id]
                          ? <a href={nft.image} target="_blank" rel="noopener noreferrer">
                              <img src={`data:image/png;base64,${nft.img}`} style={{ border: '1mm ridge #8B8B8B', width: '200px', height: '300px' }} alt="art"/>
                            </a>
                          : <a href={nft.image} target="_blank" rel="noopener noreferrer">
                              <img
                                src={`data:image/png;base64,${nft.img}`} style={{ border: '1mm ridge white', width: '200px', height: '300px' }} alt="art"
                              />
                            </a>
                        }
                          <p></p>
                          <table style={{ width: '200px' }}>
                            <thead>
                              <tr>
                                <th className="text-left" style={{color: "#8B8B8B"}}>ID: </th>
                                <th style={{color: "#FFFFFF"}}>{nft.id}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th className="text-left" style={{color: "#8B8B8B"}}>URI: </th>
                                <td>
                                  <a href={nft.uri} target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                                    link
                                  </a>
                                </td>
                              </tr>
                              {this.props.nftState[nft.id]
                              ? <tr>
                                  <th className="text-left" style={{color: "#8B8B8B"}}>Owner:</th>
                                  <th>
                                    <img
                                      alt="id"
                                      className="ml-2 id border border-success"
                                      width="15"
                                      height="15"
                                      src={`data:image/png;base64,${new Identicon(this.props.nftState[nft.id], 30).toString()}`}
                                    />{' '}
                                    <a
                                      href={`https://etherscan.io/address/` + this.props.nftState[nft.id]}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{color: "white", "fontWeight": "normal"}}
                                    >
                                      {this.props.nftState[nft.id].substring(0,8) + '...'}
                                    </a>
                                  </th>
                                </tr>
                              : <tr>
                                  <th className="text-left" style={{color: "#8B8B8B"}}>Price: </th>
                                  <th style={{color: "#FFFFFF"}}>{nft.price/10**18} ETH</th>
                                </tr>
                              }
                            </tbody>
                          </table><p></p>
                            {this.props.nftState[nft.id]
                              ? <button
                                  type="Success"
                                  className="btn btn-block"
                                  style={{border: '1px ridge #8B8B8B', color: "#8B8B8B", width: '200px'}}
                                  onClick={(e) => buyNft(this.props.dispatch, nft.id, nft.price)}
                                  disabled
                                >
                                  <b>S o l d</b>
                                </button>
                              : <button
                                  type="Success"
                                  className="btn btn-block btn-outline"
                                  style={{border: '1px ridge white', color: "white", width: '200px'}}
                                  onClick={(e) => buyNft(this.props.dispatch, nft.id, nft.price)}
                                >
                                  <b>B u y</b>
                                </button>
                            }&nbsp;
                          </div>
                      )
                    })}
  
                    </div>
                  </div>
                </main>
              </div>
           
            <br></br>
            <footer>
            {this.props.contract
              ? <div style={{color: "#8B8B8B", fontSize: "14px"}}>
                  NFT deployed at:&nbsp;
                  <a
                    href={`https://${this.props.network}.etherscan.io/address/` + this.props.contract._address}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: "#fff"}}
                  >
                  {this.props.contract._address}
                  </a>
                </div>
              : <div> Wrong network </div>
            }
            </footer>
          </div>
        )
      } else {
      return(
        <Loading />
      ) 
    }    
  }
}

function mapStateToProps(state) {
  const dataLoaded = metadataLoadedSelector(state) && nftStateLoadedSelector(state)
  return {
    metadata: metadataSelector(state),
    contract: contractSelector(state),
    nftState: nftStateSelector(state),
    network: networkSelector(state),
    dataLoaded
  }
}

export default connect(mapStateToProps)(Main)