
async function usesaunakey(){
    console.log("check key");
    const Address = "0x52FAD36d259a4b35Dc6057cc2e3257b2e371b711";
    
    mycontract = await new web3tr.eth.Contract(abi, Address);
    let useraddress = await web3tr.eth.getAccounts();
    console.log(useraddress[0]);
    let fromblockchain1 = await mycontract.methods.balanceOf(useraddress[0]).call();
    console.log(fromblockchain1);
      if (fromblockchain1 != 0){
        console.log(fromblockchain1);
        window.alert("NFTサウナキーを利用し、分散サウナに移動します");
        window.location.href = "https://ipfs.io/ipfs/QmNpiESgzKVavAFvZeLb6Eje4vET3WC4joBAKpA6FYqi46";
    } else {
          window.alert("手元にサウナキーがありません");
      }
      }


  async function makesaunakey(){
    console.log("make key");
    const Address = "0x52FAD36d259a4b35Dc6057cc2e3257b2e371b711";
    
    mycontract = await new web3tr.eth.Contract(abi, Address);
    let useraddress = await web3tr.eth.getAccounts();
    window.alert("確認ボタンを押して、サウナキーを発行してください。約10秒かかります。")
    let ret = await mycontract.methods.mint().send({ from: useraddress[0] });
    window.alert("サウナキーを発行しました。saunaの画像をクリックして入室してください。")
    console.log("useraddress[0]_is_your_Address:" + useraddress[0]);
  }
  