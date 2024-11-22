const header = document.querySelector('header')
const main = document.querySelector('main')




setInterval(_header,10000)

function _header() {
    header.innerHTML = `
        <p>#</p>
        <p>Name</p>
        <p>Price</p>
        <p>pricechange
        <i class="bi bi-exclamation-circle-fill"></i>
        </p>
        
        <p>price change 24h
        <i class="bi bi-exclamation-circle-fill"></i>
        </p> 
         
        <p>last updated</p> 
        <p>diagram</p> 
         
    `


    const mypic = {
        bitcoin: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
        ethereum: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg',
        tether: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
        solana: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
        binancecoin: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1839.svg',
        ripple: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
        dogecoin: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/74.svg',
        "usd-coin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
        "staked-ether": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3890.svg',
        "cardano": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2010.svg',
        "tron": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1958.svg',
        "shiba-inu": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5994.svg',
        "avalanche-2": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5805.svg',
        "wrapped-bitcoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/9104.svg',
        "the-open-network": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11419.svg',
        "wrapped-steth": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/18876.svg',
        "sui": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20947.svg',
        "bitcoin-cash": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1831.svg',
        "bitcoin-cash": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1831.svg',
        "weth": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/30126.svg',
        "chainlink": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1975.svg',
        'pepe': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/24478.svg',
        "polkadot": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6636.svg',
        "leo-token": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6892.svg',
        "stellar": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/512.svg',
        "near": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6535.svg',
        "litecoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2.svg',
        "aptos": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/21794.svg',
        "wrapped-eeth": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29270.svg',
        "uniswap": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7083.svg',
        "usds": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/33440.svg',
        "crypto-com-chain": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32880.svg',
        "hedera-hashgraph": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6783.svg',
        "internet-computer": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7950.svg',
        "ethereum-classic": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32880.svg',
        "bonk": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/23095.svg',
        "kaspa": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20396.svg',
        "render-token": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3890.svg',
        "bittensor": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/22974.svg',
        "ethena-usde": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5632.svg',
        "polygon-ecosystem-token": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7080.svg',
        "whitebit": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7431.svg',
        "dai": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4943.svg',
        "fetch-ai": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28782.svg',
        "dogwifcoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/33788.svg',
        "mantra-dao": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7950.svg',
        "arbitrum": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11841.svg',
        "monero": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
        "blockstack": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11840.svg',
        "filecoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2280.svg',
        "mantle": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/27075.svg',
        "vechain": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3077.svg',
    
      }


    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res =>{
            if(res.ok){
                return res.json()
            } 
            Promise.reject(err)
        })
        
        .then(data=>{
            data.map((val)=>{
                const mychart=mypic[val.id]
                console.log(mychart);
                
                const art = document.createElement('article')
                art.innerHTML=`
            <p><i class="bi bi-star"></i>${val.market_cap_rank}</p>
            <figure>
                <img src=${val.image} alt="">
                <figcaption>
                    <p>${val.name}</p>
                    <h3> ${val.symbol}</h3>
                </figcaption>
            </figure>
            <div class="price">
                <h2 >${'$'+ val.current_price}</h2>
            </div>            
            <div class="pricechange">
                <h2 >${(val.price_change_24h).toFixed(3)+'%'}</h2>
            </div>            
            <div class="price_change_percentage_24h">
                <h2 >${(val.price_change_percentage_24h).toFixed(3)+'%'}</h2>
            </div>            
            <div class="last_updated">
                <h2 >${val.last_updated}</h2>
            </div> 
            <img class='pic' src=${mychart} alt="">
                `
                const _color=art.querySelector('.pricechange>h2')
                const _color2=art.querySelector('.price_change_percentage_24h>h2')
                const img=art.querySelector('.pic')
                console.log(img);
                
                
                if(_color){
                    const num=val.price_change_24h
                    if(num>0){
                        _color.style.color='green'
                    }else if(num<0){
                          _color.style.color='red'
                    }
                }


                if(_color2){
                    const num2=val.price_change_percentage_24h
                    if(num2>0){
                        _color2.style.color='green'
                    }else if(num2<0){
                          _color2.style.color='red'
                    }
                }
               
                main.appendChild(art)
            })
            
        })


        .then((err)=>{
            console.log(err);
            
        })
}
_header()
