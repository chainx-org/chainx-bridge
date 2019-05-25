import RpcBase from '@polkadot/rpc-core';
import jsonRpc from './jsonRpc'

export default class ChainxRpcBase extends RpcBase{
  constructor(provider) {
    super(provider)
    this.chainx = this.createInterface(jsonRpc);
  }
}
