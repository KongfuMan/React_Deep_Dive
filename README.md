 Redux and Redux-Thunk 入门到精通

如果不用redux, 那么我们整个App的状态将会是一件非常痛苦的事情，尤其是当项目变得越来越庞大的时候。因为整个react的UI都是由state来驱动。redux的思想非常简单，那就是将所有component的state集中管理在一个JS object中，component只能通过dispatch action（只能是Object) 到 reducer中对state进行更新，注意不是修改，而是整个state都会刷新，之前的那个state是不能改变的（这样能够回到上一个状态？）

但是，action只能是一个Object(详见源码：https://github.com/reduxjs/redux/blob/master/src/createStore.js line:184)。这样带来了一个不便，每次dispatch之前我们都要知道action长啥样，不然dispatch啥呢？ 例如，我们需要从服务器端取数据，按照之前的思路，我们可以这么写：
      `
      get(url).then((res)=>{
      `
        ... //一些操作
      `
        dispatch(success_action);
      `
      }).catch((err) =>{
      `
        ...//一些操作
      `
        dispatch(failure_action);
      `
      });
      `
      









整个过程都是synchronous的，也就是说这个过程中任何一个环节阻塞，就会带来UI更新的阻塞从而造成卡顿。
