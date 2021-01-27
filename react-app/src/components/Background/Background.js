import React from 'react'
import Particles from 'react-particles-js';
import Ethereum from '../../imgs/ethereum.png'
import Litecoin from '../../imgs/litecoin.png'
import SVG from '../../imgs/bitcoin-coin.svg'
import Chainlink from '../../imgs/chainlink.png'
import Monero from '../../imgs/monero.png'
import Waves from '../../imgs/waves.png'
import BitcoinCash from '../../imgs/bitcoinCash.png';

const Background = () => {
    return (
            <>
            <Particles
                className="particles"
    params={{
	    "particles": {
	        "number": {
	            "value": 15,
	            "density": {
	                "enable": true,
	                "value_area": 1000
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	            ],
	            "image": [
	                {
	                    "src": SVG,
	                    "height": 20,
	                    "width": 23
	                },
	                {
	                    "src": Ethereum,
	                    "height": 20,
	                    "width": 20
	                },
	                {
	                    "src": BitcoinCash,
	                    "height": 20,
	                    "width": 30
	                },
	                {
	                    "src": Chainlink,
	                    "height": 50,
	                    "width": 150
	                },
	                {
	                    "src": Monero,
	                    "height": 50,
	                    "width": 160
	                },
	                {
	                    "src": Waves,
	                    "height": 50,
	                    "width": 150
	                },
	                {
	                    "src": Litecoin,
	                    "height": 20,
	                    "width": 20
	                }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 2,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
                }} />
        </>
    )
}

export default Background
