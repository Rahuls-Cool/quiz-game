import { Provider, chain, createClient, defaultChains } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import Login from "./Buttonlogin"
// API key for Ethereum node
// Two popular services are Alchemy (alchemy.com) and Infura (infura.io)
const alchemyId = process.env.ALCHEMY_ID

const chains = defaultChains
const defaultChain = chain.mainnet

// Set up connectors
const client = createClient({
  autoConnect: true,
  connectors({ chainId }) {
    const chain = chains.find((x) => x.id === chainId) ?? defaultChain
    const rpcUrl = chain.rpcUrls.alchemy
      ? `${chain.rpcUrls.alchemy}/${alchemyId}`
      : chain.rpcUrls.default
    return [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'wagmi',
          chainId: chain.id,
          jsonRpcUrl: rpcUrl,
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
          rpc: { [chain.id]: rpcUrl },
        },
      }),
      new InjectedConnector({
        chains,
        options: { name: 'Injected' },
      }),
    ]
  },
})

// Pass client to React Context Provider
function Signin() {
  return (
    <Provider client={client}>
      <Login />
    </Provider>
  )
}

export default Signin